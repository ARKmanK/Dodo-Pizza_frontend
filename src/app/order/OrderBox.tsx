'use client'

import { Separator } from '@/components/ui/separator'
import { useCartSummary } from '@/hooks/useCartSummary'
import { getProductLabel } from '@/utils/getProductLabel'
import { CirclePoundSterling, Disc2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const OrderBox = () => {
	const { cart, price, discountCode, discount, priceWithDiscount, quantity } = useCartSummary()
	const [isCartLoaded, setIsCartLoaded] = useState(false)

	useEffect(() => {
		setIsCartLoaded(true)
		/* if (priceWithDiscount === 1) priceWithDiscount */
	}, [cart])

	return (
		<>
			{isCartLoaded && (
				<div className='w-[450px] shadow-2xl p-6 absolute right-1/10 top-2/10'>
					<p className='font-bold text-xl mt-4'>Состав заказа</p>
					<div className='space-y-4 mt-7 mb-4'>
						{cart.products.map(product => (
							<div key={product.id}>
								<div className='font-bold mb-1.5'>
									<div className='flex justify-between'>
										<p className='w-50 line-clamp-1'>{product.title}</p>
										<span className=''>{(product.quantity * product.price).toFixed(2)} Руб.</span>
									</div>
									<p className='line-clamp-1 font-light w-70'>{product.description}</p>
								</div>
								<Separator />
							</div>
						))}
					</div>
					<div className='text-sm font-semibold py-2 space-y-2 '>
						<div className='flex justify-between'>
							<p>{`${quantity} ${getProductLabel(quantity)}`}</p>
							<span>{price.toFixed(2)} Руб.</span>
						</div>
						<div className='flex justify-between'>
							<p className='flex items-center'>
								Начисляем додокоины
								<Disc2 className='ml-2 mt-1' size={15} />
							</p>
							<span className='flex items-center'>
								+57 <CirclePoundSterling className='ml-2' size={15} />
							</span>
						</div>
						<Separator className='mt-2' />
					</div>
					<div className='flex justify-between mt-2'>
						<p className='text-lg font-bold'>Сумма заказа</p>
						<span className='font-bold'>{priceWithDiscount.toFixed(2)} Руб.</span>
					</div>
				</div>
			)}
		</>
	)
}

export default OrderBox
