import React from 'react';
import './basketProduct.css';

import { useSelector, useDispatch } from 'react-redux';
import {
	addProduct,
	removeProduct,
	getProductsCartCount,
} from '../redux/redux_slices/cartSlice';

const BasketProduct = ({ productImage, description, price, rating, id }) => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cart);
	return (
		<div className='basket__product'>
			<div className='product__detailsContainer'>
				<img src={productImage} alt='' className='basket__productImage' />
				<div className='basket__details'>
					<p className='basket__productDescription'>{description}</p>
					<p className='basket__productPrice'>{`$${price}`}</p>
					<p className='basket__productRating'>
						{Array(rating)
							.fill()
							.map((_, index) => (
								<p>⭐</p>
							))}
					</p>
					<button
						onClick={() => {
							dispatch(removeProduct(id));
						}}>
						Remove from basket
					</button>
				</div>
			</div>
		</div>
	);
};

export default BasketProduct;
