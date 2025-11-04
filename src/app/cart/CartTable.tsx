'use client'

import EmptyBox from '@/components/EmptyBox'
import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { useActions } from '@/hooks/useActions'
import { useCartSummary } from '@/hooks/useCartSummary'
import { ICartItem } from '@/store/cart/cart.slice'
import { useEffect, useState } from 'react'

const CartTable = () => {
	const { cart, price, discountCode, discount, priceWithDiscount, quantity } = useCartSummary()
	const { changeAmount } = useActions()
	const [isCartLoaded, setIsCarLoaded] = useState(false)

	useEffect(() => {
		setIsCarLoaded(true)
	}, [cart])

	if (!isCartLoaded) {
		return (
			<div className='my-6 text-center'>
				<p className='text-lg font-medium'>Загрузка...</p>
			</div>
		)
	}

	const handleClick = (action: 'add' | 'remove', product: ICartItem) => {
		changeAmount({ product, action })
	}

	return (
		<>
			{!cart.products.length ? (
				<EmptyBox text='Корзина пуста' />
			) : (
				<div className='my-6 border-2 border-black rounded-2xl p-4'>
					<Table className='w-full'>
						<TableHeader className='text-lg'>
							<TableRow>
								<TableHead className='w-[60%]'>Название</TableHead>
								<TableHead className='w-[25%]'>Количество</TableHead>
								<TableHead className='w-[25%]'>Цена</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className='text-sm font-medium'>
							{cart.products.map(product => (
								<TableRow key={product.id.toString()}>
									<TableCell>{product.title}</TableCell>
									<TableCell>
										<span className='mr-4 min-w-[2rem] text-center'>{product.quantity}</span>
										<Button
											onClick={() => handleClick('add', product)}
											className='rounded-full bg-[#ff6900] h-[30px] w-[30px]'
										>
											+
										</Button>
										<Button
											onClick={() => handleClick('remove', product)}
											className='rounded-full bg-[#ff6900] h-[30px] w-[30px]'
										>
											-
										</Button>
									</TableCell>
									<TableCell>
										<span className='min-w-[2rem] text-center'>
											{product.price * product.quantity} Руб.
										</span>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			)}
		</>
	)
}

export default CartTable
