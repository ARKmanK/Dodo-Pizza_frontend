'use client'

import Header from '@/components/Header/Header'
import BonusSection from './BonusSection'
import UserDataForm from './UserDataForm'
import UserCreditCard from './UserCreditCard'
import PurchaseHistory from './PurchaseHistory'
import { Button } from '@/components/ui/button'

const ProfilePage = () => {
	const handleLogOut = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('cart')
		localStorage.removeItem('user')
		document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
		window.location.href = '/'
	}
	return (
		<>
			<main className='md:w-[90%] lg:w-[80%] xl:w-[73%]'>
				<div className='px-4 pt-4 flex-col items-center'>
					<Header showNews={false} />
				</div>
			</main>
			<BonusSection />
			<div className='md:w-[90%] lg:w-[80%] xl:w-[73%]'>
				<div className='px-4 pt-4 flex-col items-center'>
					<UserDataForm />
					<UserCreditCard />
					<PurchaseHistory />
					<Button
						onClick={() => handleLogOut()}
						className='bg-[#f3f3f7] hover:bg-[#a5a5b3] text-black text-base font-semibold mt-20 mb-8 rounded-[20px]'
					>
						Выйти
					</Button>
				</div>
			</div>
		</>
	)
}

export default ProfilePage
