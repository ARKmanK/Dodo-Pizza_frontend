'use client'

import { Button } from '@/components/ui/button'
import { useActions } from '@/hooks/useActions'
import { useCartSummary } from '@/hooks/useCartSummary'
import { checkPromo } from '@/utils/checkPromo'
import { cn } from '@/utils/utils'
import { useEffect, useState } from 'react'

const CartPromoCode = () => {
	const [promo, setPromo] = useState('')
	const [isValid, setIsValid] = useState<true | false | null>(null)
	const { setPromoCode } = useActions()
	const { cart, price, discountCode, discount, priceWithDiscount, quantity } = useCartSummary()

	useEffect(() => {
		if (discount) {
			setPromo(discountCode)
			setIsValid(true)
		}
	}, [])

	const handleApplyPromo = (e: React.MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()
		const discountValue = checkPromo(promo)
		if (discountValue) {
			setIsValid(true)
			setPromoCode({ promo, discount: discountValue })
		} else setIsValid(false)
	}

	return (
		<>
			<div className='w-full flex justify-between'>
				<input
					type='text'
					value={promo}
					placeholder='Промокод'
					className='w-35 border-none focus:outline-0'
					onChange={e => setPromo(e.target.value)}
				/>
				<Button
					className='bg-transparent rounded-l-none rounded-r-2xl text-[#ff6900] hover:bg-inherit transf-none p-0'
					onClick={handleApplyPromo}
				>
					Применить
				</Button>
			</div>
			{isValid !== null &&
				(isValid ? (
					<p className='text-green-500 text-sm font-medium'>Промокод активирован</p>
				) : (
					<p className='text-red-500 text-sm font-medium'>Неверный промокод</p>
				))}
		</>
	)
}

export default CartPromoCode
