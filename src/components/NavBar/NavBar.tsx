'use client'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'
import { MENU } from './navbar-menu'
import { useNavBar } from '@/context/NavBarContext'
import { cn } from '@/utils/utils'
import { usePathname, useRouter } from 'next/navigation'
import CartButton from '../CartButton/CartButton'
import { PAGES } from '@/config/pages.config'

const NavBar = () => {
	const { isFixed } = useNavBar()
	const pathname = usePathname()
	const router = useRouter()

	const handleScrollToSection = (sectionId: string) => {
		if (pathname === '/') {
			const section = document.getElementById(sectionId)
			if (section) {
				const sectionPosition = section.getBoundingClientRect().top
				const offsetPosition = sectionPosition + window.scrollY - 140
				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				})
			}
		} else {
			router.push(`/?section=${sectionId}`)
		}
	}

	return (
		<NavigationMenu
			className={cn(
				'bg-white/80 flex justify-center w-full max-[768px]:hidden lg:text-[15px] transition-all ease-out duration-300 py-3',
				pathname !== '/cart' && isFixed
					? 'fixed top-0 left-0 right-0 w-full z-50 bg-white/70 shadow-lg backdrop-blur-md'
					: 'relative'
			)}
			viewport={false}
		>
			<Image
				src='/dodo-logo.png'
				alt='logo'
				width={120}
				height={100}
				priority
				style={{ width: '43px', height: '43px', objectFit: 'contain' }}
			/>
			<NavigationMenuList className='flex justify-between ml-2'>
				{MENU.map(page => (
					<NavigationMenuItem key={page.name}>
						{page.name !== 'Ещё' && page.name !== 'Акции' ? (
							<button
								onClick={() => handleScrollToSection(page.name)}
								className='hover:text-[#ff7515] font-semibold px-2 py-1.5 flex items-center'
							>
								{page.name}
							</button>
						) : page.name === 'Акции' ? (
							<Link
								href={PAGES.STOCKS}
								className='hover:text-[#ff7515] font-semibold px-2 py-1.5 flex items-center'
							>
								{page.name}
							</Link>
						) : (
							<>
								<NavigationMenuTrigger className='flex items-center space-x-1.5 font-semibold bg-[#f3f3f7] rounded-full lg:text-[15px] '>
									<p className='hover:text-[#ff7515]'>Ещё</p>
								</NavigationMenuTrigger>
								<NavigationMenuContent className='p-2 rounded-md bg-white shadow-lg'>
									<ul className='grid gap-2 w-auto'>
										<li>
											<button
												onClick={() => handleScrollToSection('Хиты')}
												className='block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-sm font-semibold '
											>
												Хиты
											</button>
										</li>
										<li>
											<button
												onClick={() => handleScrollToSection('На компанию')}
												className='block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-sm text-nowrap font-semibold '
											>
												На компанию
											</button>
										</li>
										<li>
											<button
												onClick={() => handleScrollToSection('Любят дети')}
												className='block w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-sm font-semibold '
											>
												Любят дети
											</button>
										</li>
									</ul>
								</NavigationMenuContent>
							</>
						)}
					</NavigationMenuItem>
				))}
				<CartButton />
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavBar
