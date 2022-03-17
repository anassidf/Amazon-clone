import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

/* this key is safe  */
const load = loadStripe(
	'pk_test_51KeGeDI11C8WtWP5HNsWzuPlTnkMhkuvuopgQupeSfztuySUDnHJyRp6Gahl33xm5tAAh7akVCmvJPRLHyig0ggg00UFhe2HId'
);
function App() {
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('user is logged in');
			} else {
				console.log('user is not logged in');
			}
		});
	}, [auth]);
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header />
							<Home />
						</>
					}
				/>
				<Route
					path='/checkout'
					element={
						<>
							<Header />
							<Checkout />
						</>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route
					path='/payment'
					element={
						<>
							<Header />
							<Elements stripe={load}>
								<Payment />
							</Elements>
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
