import { ObserverHeading } from '../pizza/ObserverHeading'
import OrderForm from './OrderForm'

const OrderPage = () => {
	return (
		<>
			<main className='px-4 pt-4 flex-col items-center'>
				<ObserverHeading title='Заказ на самовывоз' />
				<div className='pb-30'>
					<OrderForm />
				</div>
			</main>
		</>
	)
}

export default OrderPage
