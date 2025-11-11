import { NextResponse } from 'next/server'
const breakfast = [
	{
		id: 500,
		title: 'Хашбрауны',
		description:
			'Картофельные оладушки из печи. Отличная закуска для завтрака или перекуса в любое время дня',
		quantity: 1,
		price: 119,
		image: 'https://media.dodostatic.net/image/r:584x584/01981875ae8e75239a409d63775530d8.avif',
	},
	{
		id: 501,
		title: 'Соберите свой омлет',
		description:
			'Ваш фирменный рецепт на основе горячего омлета из печи с томатами и моцареллой, Добавляйте начинку по вкусу, но в меру: больше 4-5 ингредиентов уже не поместятся.',
		quantity: 1,
		price: 145,
		image: 'https://media.dodostatic.net/image/r:584x584/019860575a3175329bf1d7ca6facf8f5.avif',
	},
	{
		id: 502,
		title: 'Омлет с томатами в пите',
		description:
			'Легкий и питательный завтрак: омлет из печи с томатами и моцареллой в пшеничной пите. Удобно брать с собой',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:584x584/019860554d1474818d8cd5982dae2144.avif',
	},
	{
		id: 503,
		title: 'Сырники со сгущенным молоком',
		description: 'Нежные сырники, приготовленные в печи, с порционным сгущенным молоком',
		quantity: 1,
		price: 199,
		image: 'https://media.dodostatic.net/image/r:584x584/01980d419be874a5abd2ce54dcac236f.avif',
	},
	{
		id: 504,
		title: 'Сырники с малиновым вареньем',
		description:
			'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство',
		quantity: 1,
		price: 199,
		image: 'https://media.dodostatic.net/image/r:584x584/01980d410d667733968cd0731f058f97.avif',
	},
	{
		id: 505,
		title: 'Сырники',
		description:
			'Любимый десерт многих гостей — румяные сырники из печи. Нежные, в меру сладкие и напоминающие детство',
		quantity: 1,
		price: 170,
		image: 'https://media.dodostatic.net/image/r:584x584/01980d4050e8787b9f4a8c22c2d45cb5.avif',
	},
	{
		id: 506,
		title: 'Завтрак на двоих',
		description: 'Горячий завтрак для двоих. 2 закуски из подборки и 2 напитка на выбор',
		quantity: 1,
		price: 449,
		image: 'https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.jpg',
	},
	{
		id: 507,
		title: 'Кофе Латте',
		description:
			'Идеально сбалансированное сочетание кофе, увеличенной порции молока и нежнейшей пенки',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:584x584/01982280dc9a778c941ba53768d94882.avif',
	},
]

export async function GET() {
	return NextResponse.json(breakfast)
}
