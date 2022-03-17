import React, { useState, useEffect } from 'react';
import './payment.css';
import { auth } from '../firebaseConfig';
import BasketProduct from './BasketProduct';

import { useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { useSelector, useDispatch } from 'react-redux';
import {
	addProduct,
	removeProduct,
	getProductsCartCount,
} from '../redux/redux_slices/cartSlice';
import { axiosInstance } from '../axios';
const Payment = () => {
	const cart = useSelector((state) => state.cart);
	const navigate = useNavigate();
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [processing, setProcessing] = useState('');
	const [succeeded, setSucceeded] = useState(false);
	const [total, setTotal] = useState(0);
	const [clientSecret, setClientSecret] = useState(true);
	const handleSubmit = async (e) => {
		e.preventDefault();
		/* const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: { card: elements.getElement(CardElement) },
			})
			.then(({ paymentIntent }) => {
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				navigate('/order');
			}); */
	};

	/*  useEffect(() => {
		const getClientSecret = async () => {
			
			const response = await axiosInstance({
				method: 'post',
				url: `/payments/create?total=${total * 100}`,
			});
		};

		setClientSecret(response.data.clientSecret);
		getClientSecret();
	}, [cart]);   */
	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	};

	const cartProducts = useSelector((state) => state.cart);

	useEffect(() => {
		let temp = 0;
		cartProducts.map((product) => {
			temp += Number(product.price);
		});
		setTotal(temp);
	}, [cartProducts]);
	return (
		<div className='payment'>
			<h2
				onClick={() => {
					navigate('/checkout');
				}}>{`Checkout (${cart.length} items)`}</h2>
			<div className='payment__container'>
				<div className='payment__section'>
					<h3>Delivery Address</h3>
					<div className='payment__address'>
						<p>{auth?.currentUser?.email}</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>
				<div className='payment__section'>
					<h3>Review items and delivery</h3>
					<div className='payment__reviewItems'>
						{cart?.map((item, index) => (
							<BasketProduct
								productImage={item.productImage}
								description={item.description}
								price={item.price}
								rating={item.rating}
								id={index}
							/>
						))}
					</div>
				</div>
				<div className='payment__section'>
					{/* stripe payment */}
					<div className='payment__details'>
						<h3>Payment method </h3>
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className='payment__priceContainer'>
								<CurrencyFormat
									renderText={(value) => (
										<>
											<p className='subtotal__text'>
												{
													<>
														{`Order Total : `}
														<strong> {value}</strong>
													</>
												}
											</p>
										</>
									)}
									decimalScale={2}
									value={total}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'$'}
								/>
								<button disabled={processing || disabled || succeeded}>
									{' '}
									<span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
