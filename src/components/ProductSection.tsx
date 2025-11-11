'use client'

import { API_ENDPOINTS } from '@/config/pages.config'
import { getProducts } from '@/lib/api'
import { ProductCard } from './ProductCard'

const ProductSection = () => {
	const categories = Object.entries(API_ENDPOINTS).map(([title, endpoint]) => ({
		title,
		endpoint,
	}))

	return (
		<>
			{/* {categories.map(async ({ title, endpoint }) => {
				const products = await getProducts(endpoint)
				if (products.length === 0) return null

				return (
					<section key={endpoint} id={title}>
						<p className='text-xl font-bold lg:text-2xl'>{title}</p>
						<div className='grid md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-x-6 pb-20'>
							{products.map(product => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</section>
				)
			})} */}
		</>
	)
}

export default ProductSection
