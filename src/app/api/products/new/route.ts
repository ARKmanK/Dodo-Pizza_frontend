import { NextResponse } from 'next/server'
/* 450 */
const New = [
	{
		id: 450,
		title: 'Комбо Пеппероби',
		description:
			'Квадратная пицца, чтобы в игре подкрепиться. С пикантной пепперони и моцареллой. В комплекте яркий брелок, такой же как UGC в Мире Додо Пиццы!',
		quantity: 1,
		price: 539,
		image: 'https://media.dodostatic.net/image/r:292x292/0196a9ad810f70ea93151a8281a68058.avif',
	},
	{
		id: 451,
		title: '3 пиццы 35 см',
		description:
			'3 Большие пиццы на ваш выбор. Цена комбо зависит от выбранных пицц и может быть увеличена',
		quantity: 1,
		price: 1999,
		image: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
	},
	{
		id: 452,
		title: 'Холодный чикен ролл',
		description:
			'Холодная закуска для легкого перекуса: ролл с цыпленком, свежим салатом, томатами, чеддером и пармезаном с соусом ранч',
		quantity: 1,
		price: 199,
		image: 'https://media.dodostatic.net/image/r:584x584/01980e8a432071ca863e03212730c399.avif',
	},
	{
		id: 453,
		title: 'Салат Овощной микс',
		description:
			'Хрустящий салат айсберг, сочные томаты черри, перец, кубики брынзы, соус бальзамик и итальянские травы',
		quantity: 1,
		price: 280,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bebb115a7714b22c48a4acb9e12c.avif',
	},
	{
		id: 454,
		title: 'Хашбрауны',
		description:
			'Картофельные оладушки из печи. Отличная закуска для завтрака или перекуса в любое время дня',
		quantity: 1,
		price: 119,
		image: 'https://media.dodostatic.net/image/r:584x584/01981875ae8e75239a409d63775530d8.avif',
	},
	{
		id: 455,
		title: 'Латте Темный лес',
		description: 'Вишня, шоколад и мягкий кофе — вкус, как у знаменитого пирожного',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:292x292/01995c21fa247222a0e435d8924a73f6.avif',
	},
	{
		id: 456,
		title: 'Персиковый молочный коктейль',
		description: 'Сочный, спелый персик и приятная свежесть мороженого',
		quantity: 1,
		price: 230,
		image: 'https://media.dodostatic.net/image/r:584x584/0199864e07967186b27287dc88685579.avif',
	},
	{
		id: 457,
		title: 'Молочный коктейль Фисташка',
		description: 'Сочетание нежности, сливочной текстуры и тонкого вкуса фисташки',
		quantity: 1,
		price: 230,
		image: 'https://media.dodostatic.net/image/r:584x584/0199864a65a871ebade4be4d862a7c20.avif',
	},
	{
		id: 458,
		title: 'Добрый Киви-Виноград',
		description: '0,5 л',
		quantity: 1,
		price: 135,
		image: 'https://media.dodostatic.net/image/r:292x292/019a108b601a742eb22316c8e488d338.jpg',
	},
	{
		id: 459,
		title: 'Добрый Кола Ледяной Лимон',
		description: '0,5 л',
		quantity: 1,
		price: 135,
		image: 'https://media.dodostatic.net/image/r:584x584/019a108d526478988f5467e1812a9959.avif',
	},
	{
		id: 460,
		title: 'Яблочный крамбл',
		description: 'Горячий пирог из печи с рассыпчатой крошкой и кислинкой зеленого яблока',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:584x584/0198ae57be1772ec8b98e13c78b7f7ab.avif',
	},
	{
		id: 461,
		title: 'Чизкейк Дубайский',
		description:
			'Мягкий чизкейк с насыщенным фисташковым вкусом и глазурью. Вдохновлён десертом, о котором говорят все — и не зря Название вымышленное. Чизкейк и ингредиенты в составе не из Дубая',
		quantity: 1,
		price: 219,
		image: 'https://media.dodostatic.net/image/r:584x584/019999d8979e720182482f757c95fb35.avif',
	},
]

export async function GET() {
	return NextResponse.json(New)
}
