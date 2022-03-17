import React, { useState } from 'react';
import './login.css';
import amazon from '../assets/amazon.png';
import { auth } from '../firebaseConfig';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/redux_slices/userSlice';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				history('/');
				dispatch(setUser(auth.user.email));
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	const register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				if (auth) {
					history('/');
					dispatch(setUser(auth.user.email));
				}
			})
			.catch((err) => {
				alert(err.message);
			});
	};
	return (
		<div className='login'>
			{/* image */}
			<img src={amazon} alt='' className='login__amazon' />
			{/* box */}
			<div className='login__box'>
				<div className='login__insideBoxContent'>
					<h2 className='login__text'>Sign-in</h2>
					<form className='login__form'>
						<label htmlFor=''>E-mail</label>
						<input
							type='text'
							className='login__field'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<label label htmlFor=''>
							Password
						</label>
						<input
							type='password'
							className='login__field'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<button className='login__button' onClick={signIn}>
							Sign In
						</button>
					</form>
					<p className='login__agreementText'>
						by signing in you agree to use my amazon clone conditions of use.
					</p>
					<button onClick={register} className='login__registerationButton'>
						Create your Amazon Account{' '}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
