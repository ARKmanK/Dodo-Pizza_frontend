import { STUFF_CAROUSEL } from '@/data/stuffCarousel'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { useActions } from '@/hooks/useActions'
import { Product } from '@/types/products'
import Souses from './Souses'

const StuffCarousel = () => {
	const { toggleCart } = useActions()

	const handleClick = (item: Product) => {
		toggleCart(item)
	}

	return (
		<>
			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-full max-w-sm my-4'
			>
				<CarouselContent className='flex ml-0.5'>
					<Souses />
					{STUFF_CAROUSEL.map((item, index) => (
						<CarouselItem key={index} className='basis-auto'>
							<div className='p-1'>
								<Card
									className='py-2 min-h-30 flex items-center justify-center cursor-pointer'
									onClick={() => handleClick(item)}
								>
									<CardContent className='flex items-center justify-center'>
										<Image
											width={55}
											height={80}
											src={item.image}
											alt='stuff_img'
											style={{ width: '55px', height: '80px', objectFit: 'contain' }}
										/>
										<div className='flex flex-col mt-2 text-sm font-semibold ml-2'>
											<p className='text-left text-wrap max-w-32'>{item.title}</p>
											<p className='text-left mt-1'>{item.price} Руб.</p>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='absolute left-2 top-1/2 transform -translate-y-1/2 z-10' />
				<CarouselNext className='absolute right-2 top-1/2 transform -translate-y-1/2 z-10' />
			</Carousel>
		</>
	)
}

export default StuffCarousel
