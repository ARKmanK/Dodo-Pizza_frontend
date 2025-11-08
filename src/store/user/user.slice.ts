import { Product } from '@/types/products'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICard {
	id: number
	cardNumber: string
	cardDate: string
	cardCVV: string
}

export interface IPurchase {
	id: number
	purchaseNumber: number
	purchaseTime: string
	purchasePrice: number
	purchasePaymentMethod: string
}

export interface IUser {
	id: number
	name: string
	phone: string
	birthday: string
	email: string
	adv: boolean
	cards: ICard[]
	purchaseHistory: IPurchase[]
}

const initialState: IUser = {
	id: 1,
	name: '',
	phone: '',
	birthday: '',
	email: '',
	adv: false,
	cards: [],
	purchaseHistory: [],
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addCard: (
			state,
			action: PayloadAction<{ cardNumber: string; cardDate: string; cardCVV: string }>
		) => {
			const newCard = {
				id: state.cards.length > 0 ? Math.max(...state.cards.map(card => card.id)) + 1 : 1,
				cardNumber: action.payload.cardNumber,
				cardDate: action.payload.cardDate,
				cardCVV: action.payload.cardCVV,
			}
			state.cards.push(newCard)
		},

		removeCard: (state, action: PayloadAction<number>) => {
			state.cards = state.cards.filter(card => card.id !== action.payload)
		},

		updateUserData: (
			state,
			action: PayloadAction<{
				name: string
				phone: string
				birthday: string
				email: string
				adv: boolean
			}>
		) => {
			state.name = action.payload.name
			state.phone = action.payload.phone
			state.birthday = action.payload.birthday
			state.email = action.payload.email
			state.adv = action.payload.adv
		},
	},
})

export const { actions: userActions, reducer: userReducer } = userSlice
export default userReducer
