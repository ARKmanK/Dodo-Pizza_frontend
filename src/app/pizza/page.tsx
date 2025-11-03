import { PizzaCard } from './PizzaCard'
import { ObserverHeading } from './ObserverHeading'
import { getProducts } from '@/lib/api'

const PizzaPage = async () => {
	const products = await getProducts()

	return (
		<>
			<main className='px-4 pt-4 flex-col items-center'>
				<ObserverHeading title='Пиццы' />
				<div className='grid md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-30 pb-30'>
					{products.map(product => (
						<PizzaCard key={product.id} product={product} />
					))}
				</div>
			</main>
		</>
	)
}

export default PizzaPage
