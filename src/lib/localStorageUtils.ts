import { ICartState } from '@/store/cart/cart.slice'
import { RootState } from '@/store/store'

export const loadState = (): { cart: ICartState } | undefined => {
	if (typeof window === 'undefined') {
		return undefined
	}
	try {
		const serializedState = localStorage.getItem('cart')
		if (serializedState === null) {
			return undefined
		}
		const parsedState = JSON.parse(serializedState)
		if (
			parsedState &&
			typeof parsedState.promoCode === 'object' &&
			Array.isArray(parsedState.products)
		) {
			return { cart: parsedState }
		}
		return undefined
	} catch (e) {
		console.error('Ошибка загрузки данных из localStorage', e)
		return undefined
	}
}

export const saveState = (state: RootState) => {
	if (typeof window === 'undefined') {
		return
	}
	try {
		const serializedState = JSON.stringify(state.cart)
		localStorage.setItem('cart', serializedState)
	} catch (e) {
		console.error('Ошибка сохранения данных в localStorage', e)
	}
}
