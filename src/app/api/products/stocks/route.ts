import { NextResponse } from 'next/server'

const stocks = [
	{
		id: 600,
		title: 'Пепперони фреш',
		description: 'Выходные подъехали вместе с горячей пиццей по очень приятной цене',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
	},
]

export async function GET() {
	return NextResponse.json(stocks)
}
