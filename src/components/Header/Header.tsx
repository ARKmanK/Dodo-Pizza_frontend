import { CirclePoundSterling, ShoppingBag, Star, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo'

const Header = () => {
	return (
		<div className='flex justify-between mb-30'>
			<div className='flex'>
				<Logo />
				<div className='ml-10'>
					<p className='font-semibold text-sm'>
						Доставка пиццы <span className='text-[#ff7515]'>Красноярск</span>
					</p>
					<span className='flex text-sm font-semibold items-center'>
						38 мин • 4.8{' '}
						<Star size={16} fill='#ffd200' color='#ffd200' strokeWidth={1.25} className='ml-1' />
					</span>
				</div>
			</div>
			<div className='flex space-x-6 mr-10 mt-5'>
				<Link href='/dodocoins' className='flex flex-col items-center'>
					<CirclePoundSterling strokeWidth={2} />
					<p className='text-sm font-semibold'>Додокоины</p>
				</Link>
				<Link href='/profile' className='flex flex-col items-center'>
					<ShoppingBag strokeWidth={2} />
					<p className='text-sm font-semibold'>Мои акции</p>
				</Link>
				<Link href='/profile' className='flex flex-col items-center'>
					<User strokeWidth={2} />
					<p className='text-sm font-semibold'>Мои акции</p>
				</Link>
			</div>
		</div>
	)
}

export default Header
