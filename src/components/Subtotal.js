import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import './subtotal.css';
import { useSelector, useDispatch } from 'react-redux';
import {
	addProduct,
	removeProduct,
	getProductsCartCount,
} from '../redux/redux_slices/cartSlice';
import { useNavigate } from 'react-router-dom';
const Subtotal = () => {
	const cartProducts = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	console.log(cartProducts);
	const navigate = useNavigate();
	const [total, setTotal] = useState(0);
	useEffect(() => {
		let temp = 0;
		cartProducts.map((product) => {
			temp += Number(product.price);
		});
		setTotal(temp);
	}, [cartProducts]);

	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p className='subtotal__text'>
							{
								<>
									{`Subtotal (${cartProducts.length} Items): `}
									<strong> {value}</strong>
								</>
							}
						</p>
						<small>
							<input type='checkbox' /> This Order contains gift
						</small>
					</>
				)}
				decimalScale={2}
				value={total}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button
				onClick={() => {
					navigate('/payment');
				}}>
				Proceed to Checkout
			</button>
		</div>
	);
};

export default Subtotal;
