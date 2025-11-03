import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import { CarouselItem } from '../ui/carousel'
import { SAUCES } from '@/data/sauces'
import { Button } from '../ui/button'
import { Product } from '@/types/products'
import { useActions } from '@/hooks/useActions'

const Souses = () => {
	const { toggleCart } = useActions()

	const handleClick = (item: Product) => {
		toggleCart(item)
	}
	return (
		<CarouselItem className='basis-auto'>
			<Sheet>
				<SheetTrigger asChild>
					<div className='p-1 cursor-pointer'>
						<Card className='py-2 min-h-30 flex items-center justify-center'>
							<CardContent className='flex flex-col items-center justify-center'>
								<Image
									width={60}
									height={60}
									src='/sauce.png'
									alt='sauce_img'
									className='object-contain'
								/>
								<p className='text-left text-wrap font-medium pt-1'>Соусы</p>
							</CardContent>
						</Card>
					</div>
				</SheetTrigger>
				<SheetTitle></SheetTitle>
				<SheetContent side='bottom' className='w-96 ml-auto h-[50vh] rounded-[10px] p-8'>
					<p className='pt-3 font-semibold text-xl'>Соусы к бортикам и закускам</p>
					{SAUCES.map((item, index) => (
						<div key={index} className='flex items-center'>
							<Image width={40} height={40} src={item.image} alt='sauce-img' />
							<div className='flex justify-between w-full ml-3 items-center'>
								<p className='font-medium'>{item.title}</p>
								<Button onClick={() => handleClick(item)}>{item.price} Руб.</Button>
							</div>
						</div>
					))}
				</SheetContent>
			</Sheet>
		</CarouselItem>
	)
}

export default Souses
