import { cartActions } from '@/store/cart/cart.slice'
import { AppDispatch } from '@/store/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const rootActions = {
	...cartActions,
}

export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch)
	}, [dispatch])
}
