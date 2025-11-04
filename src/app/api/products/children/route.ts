import { NextResponse } from 'next/server'

const children = [
	{
		id: 750,
		title: 'Комбо Пеппероби',
		description:
			'Квадратная пицца, чтобы в игре подкрепиться. С пикантной пепперони и моцареллой. В комплекте яркий брелок, такой же как UGC в Мире Додо Пиццы!',
		quantity: 1,
		price: 539,
		image: 'https://media.dodostatic.net/image/r:292x292/0196a9ad810f70ea93151a8281a68058.avif',
	},
	{
		id: 751,
		title: 'Акриловый брелок',
		description:
			'Один случайный акриловый брелок в стиле UGC из Мира Додо Пиццы. Встряхните — и он оживет: на обороте спрятаны подвижные элементы! ',
		quantity: 1,
		price: 174,
		image: 'https://media.dodostatic.net/image/r:584x584/0195f0526bf175f18b1a57edffdc2c0f.avif',
	},
	{
		id: 752,
		title: 'Додо Бокс',
		description:
			'Классный набор для детей: две закуски с напитком на выбор и коллекционный брелок из Мира Додо Пиццы',
		quantity: 1,
		price: 429,
		image: 'https://media.dodostatic.net/image/r:292x292/019a28423bb6733e96128af1941e44fb.jpg',
	},
	{
		id: 753,
		title: 'Сырная',
		description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf40eb1171aabe90b1b3ce07c0c5.avif',
	},
	{
		id: 754,
		title: 'Пепперони',
		description: 'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус',
		quantity: 1,
		price: 319,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif',
	},
	{
		id: 755,
		title: 'Пепперони фреш',
		description: 'Выходные подъехали вместе с горячей пиццей по очень приятной цене',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
	},
	{
		id: 756,
		title: 'Ветчина и сыр',
		description: 'Ветчина, моцарелла, фирменный соус альфредо',
		quantity: 1,
		price: 299,
		image: 'https://media.dodostatic.net/image/r:292x292/0198bf283b2372ea8e7cfc8adae9ea84.avif',
	},
]

export async function GET() {
	return NextResponse.json(children)
}
