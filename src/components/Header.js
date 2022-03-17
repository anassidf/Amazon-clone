import React, { useEffect, useState } from 'react';
import './header.css';
import amazon from '../assets/amazon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import {
	addProduct,
	removeProduct,
	getProductsCartCount,
} from '../redux/redux_slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/redux_slices/userSlice';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
const Header = () => {
	const cartProducts = useSelector((state) => state.cart);
	const [authenticated, setAuthenticated] = useState(false);
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setAuthenticated(false);
			})
			.catch(() => {});
	};
	useEffect(() => {
		onAuthStateChanged(auth, () => {
			if (auth) {
				setAuthenticated(true);
			} else {
				setAuthenticated(false);
			}
		});
	}, [auth]);

	return (
		<div className='header'>
			{/* image */}
			<Link to='/'>
				<img src={amazon} alt='amazon logo' className='header__logo' />
			</Link>
			{/* search bar */}
			<div className='search__bar'>
				<input
					type='text'
					placeholder='Search items...'
					className='header__searchInput'
				/>
				<SearchIcon className='header__searchIcon' />
			</div>
			{/* header nav */}
			<div className='header__nav'>
				<div className='header__option'>
					<span className='header__optionOne'>
						hello {authenticated ? auth?.currentUser?.email : 'guest'}{' '}
					</span>

					<span className='header__optionTwo'>
						{authenticated ? (
							<span onClick={logOut}> {'Sign out'}</span>
						) : (
							<>
								<Link to='/login' className='login__link'>
									<span>{'Sign in'}</span>
								</Link>
							</>
						)}
					</span>
				</div>
				<div className='header__option'>
					<span className='header__optionOne'>return</span>
					<span className='header__optionTwo'>& order</span>
				</div>
				<div className='header__option'>
					<span className='header__optionOne'>your</span>
					<span className='header__optionTwo'>prime </span>
				</div>
				<div className='header__optionBasket'>
					<Link to='/checkout' className='header__checkout'>
						<ShoppingBasketIcon />
						<span className='header__basket'>{cartProducts?.length}</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
