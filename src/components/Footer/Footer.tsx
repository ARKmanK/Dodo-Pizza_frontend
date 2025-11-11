import Link from 'next/link'
import { FooterMenu } from './footer-menu'
import BadgeBlock from '../Badge/Badge'
import { BADGE_DATA } from '../Badge/badge.data'

const Footer = () => {
	return (
		<>
			<footer className='max-w-[768px]:hidden flex flex-col items-center w-full bg-[#181818] pt-9 relative'>
				<div className='md:w-[90%] lg:w-[80%] xl:w-[70%] flex '>
					<div className='grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-25 lg:text-[16px]'>
						<div className='flex flex-col'>
							<p className='text-gray-400 font-bold mb-2 text-xl'>Партнерам</p>
							<ul>
								{FooterMenu.slice(0, 4).map(page => (
									<li className='py-1.5' key={page.name}>
										<Link className='text-white font-semibold' href={page.href}>
											{page.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='flex flex-col'>
							<p className='text-gray-400 font-bold mb-2 text-xl'>Это интересно</p>
							<ul>
								{FooterMenu.slice(4, 6).map(page => (
									<li className='py-1.5' key={page.name}>
										<Link className='text-white  font-semibold' href={page.href}>
											{page.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='flex flex-col'>
							<p className='text-gray-400 font-bold mb-2 text-xl'>Контакты</p>
							<ul>
								{FooterMenu.slice(6).map(page => (
									<li className='py-1.5' key={page.name}>
										<Link className='text-white  font-semibold' href={page.href}>
											{page.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='text-white'>
							<p className='text-4xl font-semibold mb-3 lg:text-2xl'>3 062 573 545 Руб.</p>
							<p className='text-lg font-semibold text-[#8e9296] lg:text-[16px]'>
								Выручка российской сети в этом месяце
							</p>
							<p className='text-lg font-semibold text-[#8e9296] lg:text-[16px]'>
								В прошлом - 4 219 573 221 Руб.
							</p>
						</div>
						<div className='text-white'>
							<p className='text-4xl font-semibold mb-3 lg:text-2xl '>1370 пиццерий</p>
							<p className='text-lg font-semibold text-[#8e9296] lg:text-[16px]'>В 26 странах.</p>
							<p className='text-lg font-semibold text-[#8e9296] lg:text-[16px]'>
								От Турции до Нигерии
							</p>
						</div>
					</div>
					<div className='ml-auto'>
						<div className='grid grid-cols-3 grid-rows-2 max-h-30 gap-5'>
							{BADGE_DATA.map((store, index) => (
								<BadgeBlock
									key={index}
									icon={store.icon}
									size={store.size}
									color={store.color}
									fill={store.fill}
									titleTop={store.titleTop}
									titleBottom={store.titleBottom}
									href={store.href}
								/>
							))}
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
