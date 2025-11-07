import Header from '@/components/Header/Header'
import ProductSection from '@/components/ProductSection'

const HomePage = () => {
	return (
		<div className='md:w-[90%] lg:w-[80%] xl:w-[73%]'>
			<main className='px-4 pt-4 flex-col items-center'>
				<div className='w-full not-first:flex flex-col items-center'>
					<Header showNews={true} />
					<ProductSection />
				</div>
			</main>
		</div>
	)
}

export default HomePage
