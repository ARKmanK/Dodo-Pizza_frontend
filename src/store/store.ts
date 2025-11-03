import { configureStore } from '@reduxjs/toolkit'
import { reducer as cartReducer } from './cart/cart.slice'
import { loadState, saveState } from '@/lib/localStorageUtils'

const initialState = loadState() || {
	cart: {
		products: [],
		promoCode: {
			promo: '',
			discount: 0,
		},
	},
}

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
	preloadedState: initialState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

store.subscribe(() => {
	const state = store.getState()
	saveState(state)
})
