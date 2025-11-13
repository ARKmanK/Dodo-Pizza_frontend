'use client'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useNavBar } from '@/context/NavBarContext'
import { useCartSummary } from '@/hooks/useCartSummary'
import { getProductLabel } from '@/utils/getProductLabel'
import { cn } from '@/utils/utils'
import { CirclePoundSterling, Disc2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const OrderBox = () => {
	const { cart, price, priceWithDiscount, quantity } = useCartSummary()
	const [isCartLoaded, setIsCartLoaded] = useState(false)
	const { isFixed } = useNavBar()

	useEffect(() => {
		setIsCartLoaded(true)
	}, [cart])

	const getTabSize = (quantity: number) => {
		let size = 400
		switch (quantity) {
			case 1:
				size = 100
				break
			case 2:
				size = 200
				break
			case 3:
				size = 300
				break
		}
		return size
	}

	return (
		<>
			{isCartLoaded && (
				<div
					className={cn(
						'w-[450px] shadow-2xl p-6 absolute right-2/16 top-[225px] z-50 bg-white rounded-[12px]',
						isFixed && 'fixed top-[25px] right-[238px]'
					)}
				>
					<p className='font-bold text-xl mt-4'>Состав заказа</p>
					<ScrollArea className='mt-4' style={{ height: `${getTabSize(quantity)}px` }}>
						<div className='space-y-4 pr-4 '>
							{cart.products.map(product => (
								<div key={product.id}>
									<div className='font-bold mb-1.5'>
										<div className='flex justify-between'>
											<p className='w-50 line-clamp-1'>{product.title}</p>
											<span>{product.quantity * product.price} Руб.</span>
										</div>
										<p className='line-clamp-1 font-light w-70'>{product.description}</p>
									</div>
									<Separator />
								</div>
							))}
						</div>
					</ScrollArea>
					<div className='text-sm font-semibold py-2 space-y-2'>
						<div className='flex justify-between'>
							<p>{`${quantity} ${getProductLabel(quantity)}`}</p>
							<span>{price} Руб.</span>
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
						<span className='font-bold'>{priceWithDiscount} Руб.</span>
					</div>
				</div>
			)}
		</>
	)
}

export default OrderBox
