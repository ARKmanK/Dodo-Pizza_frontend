import { NextResponse } from 'next/server'

const sause = [
	{
		id: 350,
		title: 'Тысяча островов',
		description:
			'Фирменный соус с нотками томата и пряностей для горячих закусок и бортиков пиццы, 25 г',
		quantity: 1,
		price: 49,
		image: 'https://media.dodostatic.net/image/r:292x292/01980cbdbaef76e1b1aec6df48c66b64.avif',
	},
	{
		id: 351,
		title: '2 соуса',
		description: 'Комбинируйте пары соусов для ярких перекусов',
		quantity: 1,
		price: 75,
		image: 'https://media.dodostatic.net/image/r:292x292/0197f86b435777ec822337a4289ccee7.avif',
	},
	{
		id: 352,
		title: 'Сырный',
		description:
			'Фирменный соус со вкусом расплавленного сыра для бортиков пиццы и горячих закусок, 25 г',
		quantity: 1,
		price: 49,
		image: 'https://media.dodostatic.net/image/r:584x584/0197f86ac30a734eb384d710bb1789f3.avif',
	},
	{
		id: 353,
		title: 'Чесночный',
		description: 'Фирменный соус с чесночным вкусом для бортиков пиццы и горячих закусок, 25 г',
		quantity: 1,
		price: 49,
		image: 'https://media.dodostatic.net/image/r:584x584/0197f86b0d7d744992dae61761c9ba0d.avif',
	},
	{
		id: 354,
		title: 'Барбекю',
		description: 'Фирменный соус с дымным ароматом для бортиков пиццы и горячих закусок, 25 г',
		quantity: 1,
		price: 49,
		image: 'https://media.dodostatic.net/image/r:584x584/0197f86a9e7a7766a15028ff1fa74e4b.avif',
	},
	{
		id: 355,
		title: 'Малиновое варенье',
		description: 'Идеально к сырникам, 25 г',
		quantity: 1,
		price: 45,
		image: 'https://media.dodostatic.net/image/r:584x584/0197f86a743777209156e78285b05bef.avif',
	},
	{
		id: 356,
		title: 'Сгущёнка в стиках, 7 г',
		description: 'Идеально к сырникам',
		quantity: 1,
		price: 15,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf1ecc3b7148bd270117b8edf400.avif',
	},
]

export async function GET() {
	return NextResponse.json(sause)
}
