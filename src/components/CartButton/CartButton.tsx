'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CirclePoundSterling, Disc2 } from 'lucide-react'
import Link from 'next/link'
import { getProductLabel } from '@/utils/getProductLabel'
import { useCartSummary } from '@/hooks/useCartSummary'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import CartSheetProduct from './CartSheetProduct'
import StuffCarousel from '../StuffCarousel/StuffCarousel'
import { Separator } from '../ui/separator'
import EmptyCartSheet from '../EmptyCartSheet'
import CartPromoCode from './CartPromoCode'

const CartButton = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isCartLoaded, setIsCartLoaded] = useState(false)
	const { cart, price, discountCode, discount, priceWithDiscount, quantity } = useCartSummary()

	useEffect(() => {
		setIsCartLoaded(true)
	}, [cart])

	return (
		<>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger onClick={() => setIsOpen(true)}>
					<div className='group bg-[#ff6900] text-white rounded-[30px] lg:text-[18px] ml-10 py-2 px-6 font-semibold min-w-[150px] flex justify-center items-center'>
						{isCartLoaded && cart.products.length > 0 ? (
							<>
								<span>Корзина</span>
								<span className='mx-3'>|</span>
								<div className='relative w-6 h-6 flex items-center justify-center'>
									<span className='text-center font-mono group-hover:opacity-0 transition-opacity duration-300'>
										{quantity}
									</span>
									<ArrowRight className='ml-3 absolute w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								</div>
							</>
						) : (
							<span>Корзина</span>
						)}
					</div>
				</SheetTrigger>
				<SheetContent
					className='bg-[#e2e2eb] border-none h-screen flex flex-col overflow-y-auto'
					hideCloseButton={true}
				>
					<div className='flex flex-col flex-grow'>
						{!isCartLoaded ? (
							<p className='text-center text-lg font-medium'>Загрузка...</p>
						) : cart.products.length ? (
							<>
								<SheetTitle className='my-4 ml-4 text-xl'>
									{`${quantity} ${getProductLabel(quantity)} на ${price} Руб.`}
								</SheetTitle>
								<div className='flex-grow overflow-y-auto'>
									{cart.products.length > 0 ? (
										cart.products.map(product => (
											<CartSheetProduct key={product.id} product={product} />
										))
									) : (
										<p className='text-center text-lg font-medium'>Корзина пуста</p>
									)}
									<div className='px-1 pt-4 min-h-[150px]'>
										<p className='font-semibold text-lg pl-3'>Добавить к заказу?</p>
										<StuffCarousel />
									</div>
								</div>
								<div className='mt-auto p-6 bg-white flex flex-col'>
									<>
										<CartPromoCode />
										<Separator className='mt-2' />
									</>
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
									<div className='flex justify-between items-center py-2'>
										<p className='text-lg font-bold'>Сумма заказа</p>
										<span className='font-bold'>{priceWithDiscount} Руб.</span>
									</div>
									<Link
										href='/order'
										className='flex justify-between items-center bg-[#ff6900] text-white rounded-[30px] font-semibold lg:text-[18px] py-3 px-6 mt-4 hover:bg-[#ff6900]'
										onClick={() => setIsOpen(false)}
									>
										<span className='w-4' />
										К оформлению заказа
										<ArrowRight className='w-5 h-5' />
									</Link>
								</div>
							</>
						) : (
							<EmptyCartSheet />
						)}
					</div>
				</SheetContent>
			</Sheet>
		</>
	)
}

export default CartButton
