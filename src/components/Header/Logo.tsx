import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<>
			<div className='flex'>
				<Link href='/'>
					<Image width={140} height={90} src='/Dodo_Logo.png' alt='logo-img' />
					<p className='font-semibold text-sm ml-13 mt-2'>Сеть №1 в России</p>
					<p className='text-[#ff7515] font-semibold text-sm ml-13'>по количеству пиццерий</p>
				</Link>
			</div>
		</>
	)
}

export default Logo
