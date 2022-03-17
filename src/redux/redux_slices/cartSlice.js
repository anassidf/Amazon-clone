import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.push(action.payload);
		},
		removeProduct: (state, action) => {
			state.splice(action.payload, 1);
		},
		getProductsCartCount: (state, action) => {
			return state.length;
		},
	},
});
/* this line for the components */
export const {
	addProduct,
	removeProduct,
	getProductsCart,
	getProductsCartTotal,
} = cartSlice.actions;
/* this line for the store */
export default cartSlice.reducer;
