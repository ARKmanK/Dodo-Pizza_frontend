import Image from 'next/image'
import { Product } from '@/types/products'
import { useActions } from '@/hooks/useActions'
import { Minus, Plus } from 'lucide-react'
import { ICartItem } from '@/store/cart/cart.slice'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { ButtonGroup } from '../ui/button-group'

interface CartSheetProductProps {
	product: Product
}

const CartSheetProduct = ({ product }: CartSheetProductProps) => {
	const { toggleCart, changeAmount } = useActions()

	const handleDeleteClick = () => {
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

	const handleAmountClick = (action: 'add' | 'remove', product: ICartItem) => {
		changeAmount({ product, action })
	}

	return (
		<>
			<div className='flex flex-col w-full py-1.5'>
				<div className='flex flex-col bg-white px-4 py-2'>
					<div className='flex'>
						<Image
							width={70}
							height={80}
							src={product.image}
							alt='pizza-img'
							style={{ width: '70px', height: '80px', objectFit: 'contain' }}
						/>
						<div className='flex justify-between mt-1.5 w-full'>
							<div className='flex flex-col mr-10 ml-4'>
								<p className='font-bold line-clamp-1'>{product.title}</p>
								<span className='text-sm line-clamp-1'>{product.description}</span>
							</div>
							<>
								<Button
									className='w-[20px] h-[20px] p-0.5 bg-white hover:bg-white'
									onClick={handleDeleteClick}
								>
									<span className='text-black text-lg font-[400]'>x</span>
								</Button>
							</>
						</div>
					</div>
					<Separator className='mt-2' />
				</div>
				<div className='flex  items-center bg-white px-4 pb-2'>
					<div className='w-[35%]'>
						<span className='font-semibold'>{product.price} Руб.</span>
					</div>
					<div className='flex'>
						<Button className='edit-btn transf-none mr-2 text-[#d85c22]'>Изменить</Button>
						<ButtonGroup className=''>
							<Button
								className='bg-[#e2e2eb] text-black btn-group rounded-[20px]'
								onClick={() => handleAmountClick('remove', product)}
							>
								<Minus />
							</Button>
							<Button className='bg-[#e2e2eb] text-black btn-group-text w-12 text-center'>
								{product.quantity}
							</Button>
							<Button
								className='bg-[#e2e2eb] text-black btn-group rounded-[20px]'
								onClick={() => handleAmountClick('add', product)}
							>
								<Plus />
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartSheetProduct
