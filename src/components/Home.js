import React from 'react';
import homeImage from '../assets/home_image.jpg';
import './home.css';
import Product from './Product';
import laptop from '../assets/laptop.png';
import alexa from '../assets/alexa.png';
import camera from '../assets/camera.png';
import keyboard from '../assets/keyboard.png';
import laptop2 from '../assets/laptop2.png';
import pc from '../assets/pc.png';
import tv from '../assets/tv.png';

const Home = () => {
	return (
		<div className='home'>
			<div className='home__container'>
				<img src={homeImage} alt='' className='home__image' />
				<div className='product__row'>
					{/* product */}
					<Product
						productImage={pc}
						description='an amazing pc for multiple tasks'
						price='3000'
						rating={2}
					/>

					<Product
						productImage={camera}
						description='profetional camera'
						price='500'
						rating={4}
					/>
				</div>
				<div className='product__row'>
					{/* product */}
					<Product
						productImage={laptop2}
						description='laptop with the best hardware ever'
						price='1100'
						rating={9}
					/>
					{/* product */}
					<Product
						productImage={alexa}
						description='alexa'
						price='1500'
						rating={4}
					/>
					{/* product */}
					<Product
						productImage={keyboard}
						description='mechanical keyboard'
						price='100'
						rating={5}
					/>
				</div>
				<div className='product__row'>
					{/* product */}{' '}
					<Product
						productImage={tv}
						description='wide tv'
						price='11100'
						rating={6}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
