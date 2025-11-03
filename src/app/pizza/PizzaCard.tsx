'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Product } from '@/types/products'
import Image from 'next/image'
import { useActions } from '@/hooks/useActions'
import { useEffect, useState } from 'react'
import { useCartSummary } from '@/hooks/useCartSummary'

export interface PizzaCardProps {
	product: Product
}

export function PizzaCard({ product }: PizzaCardProps) {
	const { cart, price, discount, priceWithDiscount, quantity } = useCartSummary()
	const [isInCart, setIsInCart] = useState(false)
	const { toggleCart } = useActions()

	useEffect(() => {
		setIsInCart(cart.products.some(pr => pr.id === product.id))
	}, [cart, product.id])

	const handleClick = () => {
		const cartItem = {
			id: product.id,
			title: product.title,
			description: product.description,
			price: product.price,
			image: product.image,
			quantity: product.quantity,
		}
		toggleCart(cartItem)
	}

	return (
		<Card className='border-none shadow-none'>
			<CardContent className='flex justify-center'>
				<div className='pb-[115%] overflow-hidden h-0'>
					<Image
						width={160}
						height={120}
						src={product.image}
						alt='pizza-img'
						className='max-[500px]:w-full'
					/>
				</div>
			</CardContent>
			<CardHeader>
				<CardTitle className='line-clamp-1 xl:text-xl'>{product.title}</CardTitle>
				<CardDescription className='line-clamp-3 xl:text-lg'>{product.description}</CardDescription>
			</CardHeader>
			<CardFooter className='justify-between text-sm font-semibold xl:text-[18px]'>
				<span>от {product.price} Руб.</span>
				<Button
					className='rounded-[20px] bg-[#fff0e6] text-[#d85c22] xl:text-[17px] px-6 hover:bg-[#e7cab6]'
					onClick={handleClick}
				>
					{isInCart ? <span>Удалить</span> : <span>Добавить</span>}
				</Button>
			</CardFooter>
		</Card>
	)
}
