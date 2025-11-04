import { NextResponse } from 'next/server'

const otherStuff = [
	{
		id: 400,
		title: 'Додо: от подвала до миллиарда',
		description:
			'Новая книга Додо: вдохновляющая история успеха и людей, которые сделали это возможным ',
		quantity: 1,
		price: 569,
		image: 'https://media.dodostatic.net/image/r:292x292/0197d1524c157360ac33b46b35ad97db.avif',
	},
	{
		id: 401,
		title: 'Акриловый брелок',
		description:
			'Один случайный акриловый брелок в стиле UGC из Мира Додо Пиццы. Встряхните — и он оживет: на обороте спрятаны подвижные элементы! ',
		quantity: 1,
		price: 174,
		image: 'https://media.dodostatic.net/image/r:584x584/0195f0526bf175f18b1a57edffdc2c0f.avif',
	},
	{
		id: 402,
		title: 'Додо Раскраска',
		description: 'Чтобы обед был не только сытным, но и веселым ',
		quantity: 1,
		price: 10,
		image: 'https://media.dodostatic.net/image/r:584x584/11ee796fafe256abb217181c2de2cc67.avif',
	},
	{
		id: 403,
		title: 'Додо Клюв',
		description: 'Если хочется перевоплощения ',
		quantity: 1,
		price: 10,
		image: 'https://media.dodostatic.net/image/r:584x584/0198c34570287236976d1fc216d53bf1.avif',
	},
	{
		id: 404,
		title: 'Додо Колпак',
		description:
			'Цвета разные, а эмоции одни – все варианты на высоте. Перед тем, как надевать, не забудьте его собрать ',
		quantity: 1,
		price: 10,
		image: 'https://media.dodostatic.net/image/r:584x584/0198c3449c987960abc90bf84302da80.avif',
	},
	{
		id: 405,
		title: 'Подарочный сертификат',
		description:
			'Сертификат на любую большую пиццу. Действует на доставку, самовывоз и в ресторане ',
		quantity: 1,
		price: 1189,
		image: 'https://media.dodostatic.net/image/r:584x584/11ee796f9a1578d4bdd808650e5a005a.avif',
	},
]

export async function GET() {
	return NextResponse.json(otherStuff)
}
