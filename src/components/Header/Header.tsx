import { CirclePoundSterling, Star } from 'lucide-react'
import Link from 'next/link'
import Logo from './Logo'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '../ui/carousel'
import { headerNews } from './headerNews.data'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import NavBar from '../NavBar/NavBar'
import { ObserverHeading } from '../ObserverHeading'
import ProfileButton from './ProfileButton'

interface IHeaderProps {
	showNews: boolean
}

const Header = ({ showNews }: IHeaderProps) => {
	return (
		<header>
			<ObserverHeading margin={'0px'}>
				<div className='flex justify-between mb-5'>
					<div className='flex'>
						<Logo />
						<div className='ml-4'>
							<p className='font-semibold text-sm'>
								Доставка пиццы <span className='text-[#ff7515]'>Красноярск</span>
							</p>
							<span className='flex text-sm font-semibold items-center'>
								38 мин • 4.8{' '}
								<Star
									size={16}
									fill='#ffd200'
									color='#ffd200'
									strokeWidth={1.25}
									className='ml-1'
								/>
							</span>
						</div>
					</div>
					<div className='flex space-x-6 mt-5 '>
						<Link
							href='/dodocoins'
							className='flex flex-col items-center hover:text-[#ff7515] group'
						>
							<CirclePoundSterling
								strokeWidth={2}
								className='group-hover:-translate-y-1.5 transition-transform duration-300'
							/>
							<p className='text-sm font-semibold'>Додокоины</p>
						</Link>
						<ProfileButton />
					</div>
				</div>
			</ObserverHeading>
			<NavBar />
			{showNews && (
				<div className='relative w-full mb-20'>
					<Carousel>
						<CarouselContent className='-ml-1'>
							{headerNews.map((item, index) => (
								<CarouselItem key={index} className='pl-1 md:basis-2/12'>
									<div className='p-1'>
										<Card className='py-0'>
											<CardContent className='p-0'>
												<div className='relative w-full' style={{ aspectRatio: '3/4' }}>
													<Image
														src={item.image}
														alt='news-img'
														fill
														className='object-cover rounded-lg'
													/>
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
				</div>
			)}
		</header>
	)
}

export default Header
