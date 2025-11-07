import Header from '@/components/Header/Header'
import BonusSection from './BonusSection'

const ProfilePage = () => {
	return (
		<>
			<main className='md:w-[90%] lg:w-[80%] xl:w-[73%]'>
				<div className='px-4 pt-4 flex-col items-center'>
					<Header showNews={false} />
				</div>
			</main>
			<BonusSection />
		</>
	)
}

export default ProfilePage
