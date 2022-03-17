import React from 'react';
import checkoutBanner from '../assets/checkout_banner.jpg';
import './checkout.css';
import Subtotal from './Subtotal';
import { useSelector, useDispatch } from 'react-redux';
import {
	addProduct,
	removeProduct,
	getProductsCartCount,
} from '../redux/redux_slices/cartSlice';
import BasketProduct from './BasketProduct';
const Checkout = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cart);
	return (
		<div className='checkout'>
			<img src={checkoutBanner} alt='' className='checkout__banner' />
			<div className='checkout__container'>
				<div className='checkout__left'>
					<div>
						<h3 className='checkout__title'>Your shopping Basket</h3>

						{/* basket items */}
						{/* <BasketProduct productImage={camera}
						description='profetional camera'
						price='500'
						rating={4}/> */}

						{products?.map((item, index) => (
							<BasketProduct
								productImage={item.productImage}
								description={item.description}
								price={item.price}
								rating={item.rating}
								id ={index}
							/>
						))}
					</div>
				</div>
				<div className='checkout__right'>
					<h3> The subtotal will go here</h3>

					<Subtotal />
				</div>
			</div>
		</div>
	);
};

export default Checkout;
