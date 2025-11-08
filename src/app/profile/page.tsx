import Header from '@/components/Header/Header'
import BonusSection from './BonusSection'
import UserDataForm from './UserDataForm'
import UserCreditCard from './UserCreditCard'
import PurchaseHistory from './PurchaseHistory'
import { Button } from '@/components/ui/button'

const ProfilePage = () => {
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
					<Button className='bg-[#f3f3f7] text-black text-base font-semibold mt-20 mb-8 rounded-[20px]'>
						Выйти
					</Button>
				</div>
			</div>
		</>
	)
}

export default ProfilePage
