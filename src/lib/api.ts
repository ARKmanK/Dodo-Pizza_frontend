import { formSchema } from '@/app/order/OrderForm'
import { Product } from '@/types/products'
import { z } from 'zod'

/* const API = process.env.API_URL */
const API = 'http://localhost:3000/api/products/'

export const getProducts = async (type: string) => {
	const res = await fetch(`${API}/${type}`, { next: { revalidate: 60 } })
	if (!res.ok) throw Error('Failed to fetch products')
	return res.json() as Promise<Product[]>
}

export const handlePayment = (
	values: z.infer<typeof formSchema>,
	price: number,
	clearCart: () => void
) => {
	if (price === 0) price = 1
	fetch('http://localhost:4200/api/payment', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			value: price,
			orderId: values.name,
			userId: values.name + values.phone,
		}),
	})
		.then(res => res.json())
		.then(data => {
			window.location.href = data.confirmation.confirmation_url
			clearCart()
		})
}
