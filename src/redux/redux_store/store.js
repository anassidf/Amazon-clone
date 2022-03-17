import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux_slices/cartSlice';
import userReducer from '../redux_slices/userSlice';
export const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userReducer,
	},
});
