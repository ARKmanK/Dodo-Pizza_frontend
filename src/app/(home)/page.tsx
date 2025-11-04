import Header from '@/components/Header/Header'
import NavBar from '@/components/NavBar/NavBar'
import { ObserverHeading } from '@/components/ObserverHeading'

import ProductSection from '@/components/ProductSection'
import { NavBarProvider } from '@/context/NavBarContext'

const HomePage = () => {
	return (
		<>
			<main className='px-4 pt-4 flex-col items-center'>
				<ObserverHeading margin={'-35px'}>
					<NavBar />
					<Header />
				</ObserverHeading>
				<ProductSection />
			</main>
		</>
	)
}

export default HomePage
