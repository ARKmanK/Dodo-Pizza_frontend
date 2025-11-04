import { NextResponse } from 'next/server'

const company = [
	{
		id: 701,
		title: 'Завтрак на двоих',
		description: 'Горячий завтрак для двоих. 2 закуски из подборки и 2 напитка на выбор',
		quantity: 1,
		price: 449,
		image: 'https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.jpg',
	},
	{
		id: 702,
		title: 'Четыре в одном',
		description:
			'Если хочется всего понемногу. Маленькая пицца, закуска, напиток и соус. Цена комбо зависит от выбранных продуктов и может быть увеличена',
		quantity: 1,
		price: 739,
		image: 'https://media.dodostatic.net/image/r:292x292/01980e870b7775b890ea97fcd9f3f853.avif',
	},
	{
		id: 703,
		title: '3 пиццы',
		description:
			'Любые вкусы. Любые размеры. Соберите свою тройку, как вы любите. Цена зависит от выбора.',
		quantity: 1,
		price: 869,
		image: 'https://media.dodostatic.net/image/r:292x292/0195960cdb9079b38dd908001994d5dc.avif',
	},
	{
		id: 704,
		title: '3 пиццы 30 см',
		description:
			'Три удовольствия в нашем меню — это 3 средние пиццы на ваш выбор. Цена комбо зависит от выбранных пицц и может быть увеличена',
		quantity: 1,
		price: 1239,
		image: 'https://media.dodostatic.net/image/r:292x292/0195f0ff3ee0726a8389bda7e4d9062a.avif',
	},
	{
		id: 705,
		title: '3 пиццы 35 см',
		description:
			'3 Большие пиццы на ваш выбор. Цена комбо зависит от выбранных пицц и может быть увеличена',
		quantity: 1,
		price: 1999,
		image: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
	},
	{
		id: 706,
		title: '4 Закуски',
		description: 'Сытный квартет для маленькой компании. Комбо из четырех закусок на выбор',
		quantity: 1,
		price: 759,
		image: 'https://media.dodostatic.net/image/r:292x292/01981db11315747baa5684bb0d503ba8.jpg',
	},
	{
		id: 707,
		title: '5 пицц',
		description:
			'5 причин сделать вечеринку вкуснее. 5 средних пицц для компании из 10–15 человек. Цена комбо зависит от выбранных пицц и может быть увеличена',
		quantity: 1,
		price: 2679,
		image: 'https://media.dodostatic.net/image/r:292x292/01959613e61877b289707dec15e82d75.avif',
	},
	{
		id: 708,
		title: '7 пицц',
		description:
			'7 — счастливое число, особенно если речь о 7 средних пиццах на компанию 15-20 человек. Цена комбо зависит от выбранных пицц и может быть увеличена',
		quantity: 1,
		price: 3689,
		image: 'https://media.dodostatic.net/image/r:292x292/0195961483b97394ad6d2dd19edc969e.avif',
	},
]

export async function GET() {
	return NextResponse.json(company)
}
