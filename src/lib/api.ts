import { formSchema } from '@/app/order/form/OrderForm'
import { IPurchase } from '@/store/user/user.slice'
import { Product } from '@/types/products'
import { number, string, z } from 'zod'

/* const API = process.env.API_URL */
const API = '/api/products/'

export const getProducts = async (type: string) => {
	const res = await fetch(`${API}${type}`, { next: { revalidate: 60 } })
	if (!res.ok) throw Error('Failed to fetch products')
	return res.json() as Promise<Product[]>
}

export const handlePayment = async (
	values: z.infer<typeof formSchema>,
	price: number
): Promise<any> => {
	if (price === 0) price = 1
	const res = await fetch('http://localhost:4200/api/payment', {
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
	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`)
	}

	const data = await res.json()
	window.location.href = data.confirmation.confirmation_url
	return data
}
