import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ILogo {
	showStep?: boolean
}

const Logo = ({ showStep }: ILogo) => {
	return (
		<>
			<div className='flex justify-between'>
				<Link href='/'>
					<Image width={140} height={90} src='/Dodo_Logo.png' alt='logo-img' />
					<p className='font-semibold text-sm ml-13 mt-2'>Сеть №1 в России</p>
					<p className='text-[#ff7515] font-semibold text-sm ml-13'>по количеству пиццерий</p>
				</Link>
				{showStep && (
					<div className='flex items-center relative ml-20'>
						<div className='flex flex-col items-center z-10 mr-3'>
							<div className='border border-black rounded-full flex items-center justify-center h-8 w-8 '>
								<Check size={20} color='black' />
							</div>
							<p className='text-sm'>Корзина</p>
						</div>
						<div className='h-[1px] bg-black w-[120px] absolute left-[55px] mb-4 px-4'></div>
						<div className='flex flex-col items-center ml-16 z-10'>
							<div className='border border-black rounded-full flex items-center justify-center h-8 w-8 text-[20px] font-bold'>
								2
							</div>
							<p className='font-semibold text-sm'>Оформление заказа</p>
						</div>
						<div className='h-[px] border-dotted border-b-2 border-[#afafaf] w-[120px] absolute left-[230px] mb-4 px-4'></div>
						<div className='flex flex-col items-center ml-15 z-10'>
							<div className='border border-[#afafaf] rounded-full flex items-center justify-center h-8 w-8 text-[20px] text-[#afafaf] font-bold'>
								3
							</div>
							<p className='font-semibold text-[#afafaf] text-sm'>Заказ принят</p>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default Logo
