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
import { usePathname } from 'next/navigation'
import CartButton from '../CartButton'

const NavBar = () => {
	const { isNavFixed } = useNavBar()
	const pathname = usePathname()

	return (
		<NavigationMenu
			className={cn(
				'bg-white/80 flex justify-center w-full max-[768px]:hidden lg:text-[17px] transition-all ease-out duration-2000',
				pathname !== '/cart' && isNavFixed
					? 'fixed top-0 left-0 right-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent'
					: 'relative'
			)}
			viewport={false}
		>
			<Image src='/dodo-logo.png' alt='logo' width={120} height={100} priority />
			<NavigationMenuList className='flex space-x-2 justify-between'>
				{MENU.map(page => (
					<NavigationMenuItem key={page.name}>
						{page.name !== 'Ещё' ? (
							<Link
								href={page.href}
								className='hover:text-[#ff7515] font-semibold px-2 py-1.5 flex items-center'
							>
								{page.name}
							</Link>
						) : (
							<>
								<NavigationMenuTrigger className='flex items-center space-x-1.5 font-semibold bg-gray-100 rounded-full lg:text-[17px]'>
									Ещё
								</NavigationMenuTrigger>
								<NavigationMenuContent className='p-2 rounded-md bg-white shadow-lg'>
									<ul className='grid gap-2 w-auto'>
										<li>
											<NavigationMenuLink asChild>
												<Link
													href='/hits'
													className='block px-2 py-1 hover:bg-gray-100 rounded text-lg'
												>
													Хиты
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink asChild>
												<Link
													href='/company'
													className='block px-2 py-1 hover:bg-gray-100 rounded text-lg text-nowrap'
												>
													На компанию
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink asChild>
												<Link
													href='/children'
													className='block px-2 py-1 hover:bg-gray-100 rounded text-lg'
												>
													Любят дети
												</Link>
											</NavigationMenuLink>
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
