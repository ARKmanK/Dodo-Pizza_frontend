import Image from 'next/image'
import { SheetTitle } from './ui/sheet'

const EmptyCartSheet = () => {
	return (
		<>
			<SheetTitle></SheetTitle>
			<div className='flex flex-col justify-center items-center h-full'>
				<Image height={250} width={310} src='/empty_cart.png' alt='empty_cart_img' />
				<p className='font-bold text-xl'>Пока тут пусто</p>
				<p className='font-medium mt-3'>Добавьте пиццу. Или две!</p>
				<p className='font-medium'>А мы доставим ваш заказ от 649 Руб.</p>
			</div>
		</>
	)
}

export default EmptyCartSheet
