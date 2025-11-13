'use client'

import { CirclePoundSterling, Star, StarHalf } from 'lucide-react'
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
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { useUserSummary } from '@/hooks/useUserSummary'

interface IHeaderProps {
	showNews: boolean
}

const Header = ({ showNews }: IHeaderProps) => {
	const { dodoCoins } = useUserSummary()

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
							<NavigationMenu className='justify-start'>
								<NavigationMenuList>
									<NavigationMenuItem>
										<NavigationMenuTrigger className='pl-0'>
											<span className='flex text-sm font-semibold items-center'>
												38 мин • 4.8
												<Star
													size={16}
													fill='#ffd200'
													color='#ffd200'
													strokeWidth={1.25}
													className='ml-1'
												/>
											</span>
										</NavigationMenuTrigger>
										<NavigationMenuContent className='z-50 bg-black/65 backdrop-blur-md shadow-lg rounded-[15px] p-3 xl:w-[600px]  border-none'>
											<div className='flex w-full'>
												<div className='w-[50%] pr-4'>
													<div className='leading-1.5'>
														<p className='text-xl text-white'>
															<span className='text-2xl'>34</span> минуты
														</p>
														<p className='text-white'>Среднее время доставки</p>
													</div>
													<p className='text-sm text-[#babdc5] mt-5'>
														Если не успеем за 60 минут, пришлем промокод на бесплатную пиццу
													</p>
												</div>
												<div className='w-[50%]'>
													<div className='leading-1.5'>
														<div className='flex'>
															<span className='text-[#f6d121] text-2xl'>4.8</span>
															<div className='mt-1 flex'>
																{Array.from({ length: 4 }).map((_, index) => (
																	<Star
																		key={index}
																		size={21}
																		fill='#ffd200'
																		color='#ffd200'
																		strokeWidth={1.25}
																		className='ml-1'
																	/>
																))}
																<StarHalf className='text-[#f6d121]' size={21} fill='#f6d121' />
															</div>
														</div>
														<span className='text-white flex'>
															2519 <p className='text-white ml-2'> оценок</p>
														</span>
													</div>
													<p className='text-sm text-[#babdc5] mt-5'>
														Оценить заказ можно в мобильном приложении
													</p>
												</div>
											</div>
											<p className='text-[#a8abb4] text-sm mt-5'>
												Данные за последние 7 дней в вашем городе
											</p>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>
					</div>
					<div className='flex space-x-6 mt-5'>
						<Link
							href='/loyaltyProgram'
							className='flex flex-col items-center hover:text-[#ff7515] group'
						>
							<CirclePoundSterling
								strokeWidth={2}
								className='group-hover:-translate-y-1.5 transition-transform duration-300'
							/>
							<p className='text-sm font-semibold relative'>
								Додокоины{' '}
								<span className='absolute bottom-9 left-12 px-1.5 py-0.5 bg-linear-to-r from-[#6031d4] to-[#3210bc] text-white text-xs rounded-[10px]'>
									{dodoCoins}
								</span>
							</p>
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
