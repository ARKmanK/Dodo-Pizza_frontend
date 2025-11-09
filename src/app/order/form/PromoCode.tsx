'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useActions } from '@/hooks/useActions'
import { useCartSummary } from '@/hooks/useCartSummary'
import { checkPromo } from '@/utils/checkPromo'
import { useEffect, useState } from 'react'

const PromoCode = () => {
	const [promo, setPromo] = useState('')
	const [isValid, setIsValid] = useState<true | false | null>(null)
	const { setPromoCode } = useActions()
	const { discountCode, discount } = useCartSummary()

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
			<div className='w-[30%]'>
				<p className='text-xl font-bold lg:text-2xl mt-20'>Промокод</p>
				<div className='flex mt-5'>
					<Input
						type='text'
						value={promo}
						className='rounded-l-2xl rounded-r-none z-1'
						onChange={e => setPromo(e.target.value)}
					/>
					<Button
						className='bg-[#ff6900] rounded-l-none rounded-r-2xl hover:bg-[#ff6900] transf-none'
						onClick={handleApplyPromo}
					>
						Применить
					</Button>
				</div>
				{isValid !== null &&
					(isValid ? (
						<p className='text-green-500 text-sm mt-2 font-medium'>Промокод активирован</p>
					) : (
						<p className='text-red-500 text-sm mt-2 font-medium'>Неверный промокод</p>
					))}
			</div>
		</>
	)
}

export default PromoCode
