import React from 'react';
import './product.css';
import { useSelector, useDispatch } from 'react-redux';
import {
	addProduct,
	removeProduct,
	getProductsCartCount,
} from '../redux/redux_slices/cartSlice';
const Product = ({ productImage, description, price, rating }) => {
	const cartProducts = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	const addToBasket = () => {
		dispatch(addProduct({ productImage, description, price, rating }));
		console.log(cartProducts, 'added');
	};
	return (
		<div className='product'>
			<div className='product__info'>
				<p className='product__description'>{description}</p>
				<p className='product__price'>
					<small>$</small> <strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, index) => (
							<p>⭐</p>
						))}
				</div>
				<img src={productImage} alt='' className='product__image' />

				<div className='product__button'>
					<button onClick={addToBasket}>Add to basket</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
