import { NavBarProvider } from '@/context/NavBarContext'
import { ObserverHeading } from '../../components/ObserverHeading'
import OrderForm from './OrderForm'
import Logo from '@/components/Header/Logo'

const OrderPage = () => {
	return (
		<>
			<main className='px-4 pt-4 flex-col items-center'>
				<NavBarProvider>
					<ObserverHeading margin='-30px'>
						<Logo />
						<div className='text-2xl font-bold pt-20 pl-6'>Заказ на самовывоз</div>
					</ObserverHeading>
					<div className='pb-30'>
						<OrderForm />
					</div>
				</NavBarProvider>
			</main>
		</>
	)
}

export default OrderPage
