import { NextResponse } from 'next/server'

const snacks = [
	{
		id: 100,
		title: 'Картофель по-деревенски',
		description: 'Дольки картофеля, запеченные в печи до хрустящей корочки',
		quantity: 1,
		price: 129,
		image: 'https://media.dodostatic.net/image/r:584x584/01980e91c07075d9be384b7b94e75a8f.avif',
	},
	{
		id: 101,
		title: 'Соберите свой омлет',
		description:
			'Ваш фирменный рецепт на основе горячего омлета из печи с томатами и моцареллой, Добавляйте начинку по вкусу, но в меру: больше 4-5 ингредиентов уже не поместятся.',
		quantity: 1,
		price: 145,
		image: 'https://media.dodostatic.net/image/r:584x584/019860575a3175329bf1d7ca6facf8f5.avif',
	},
	{
		id: 102,
		title: 'Креветки терияки',
		description: 'Цельные креветки в хрустящей панировке с соусом терияки',
		quantity: 1,
		price: 369,
		image: 'https://media.dodostatic.net/image/r:584x584/0198556badcf772484ba8ef325c9f09f.avif',
	},
	{
		id: 103,
		title: 'Ланчбокс Охотничий',
		description:
			'Горячий сытный обед с картофелем из печи, классическими колбасками, огурчиками маринованными и соусом барбекю',
		quantity: 1,
		price: 349,
		image: 'https://media.dodostatic.net/image/r:584x584/019873d7f4c6750a8e15193b71d64dac.avif',
	},
	{
		id: 104,
		title: 'Хашбрауны',
		description:
			'Картофельные оладушки из печи. Отличная закуска для завтрака или перекуса в любое время дня',
		quantity: 1,
		price: 119,
		image: 'https://media.dodostatic.net/image/r:584x584/01981875ae8e75239a409d63775530d8.avif',
	},
	{
		id: 105,
		title: 'Холодный чикен ролл',
		description:
			'Холодная закуска для легкого перекуса: ролл с цыпленком, свежим салатом, томатами, чеддером и пармезаном с соусом ранч',
		quantity: 1,
		price: 199,
		image: 'https://media.dodostatic.net/image/r:584x584/01980e8a432071ca863e03212730c399.avif',
	},
	{
		id: 106,
		title: 'Паста Креветка и песто',
		description:
			'Паста из печи с соусом песто, креветками, томатами, моцареллой и фирменным соусом альфредо',
		quantity: 1,
		price: 409,
		image: 'https://media.dodostatic.net/image/r:584x584/0198e2f708ea73ed9b0f96052ddbbcca.avif',
	},
	{
		id: 107,
		title: 'Салат Овощной микс',
		description:
			'Хрустящий салат айсберг, сочные томаты черри, перец, кубики брынзы, соус бальзамик и итальянские травы',
		quantity: 1,
		price: 280,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bebb115a7714b22c48a4acb9e12c.avif',
	},
	{
		id: 108,
		title: 'Додстер Чилл Грилл',
		description:
			'Горячая закуска с цыпленком и соусом гриль с луком, маринованными огурчиками и моцареллой в тонкой пшеничной лепешке',
		quantity: 1,
		price: 239,
		image: 'https://media.dodostatic.net/image/r:584x584/01980cb84cfb7023b6eca978780d30c5.avif',
	},
	{
		id: 109,
		title: 'Креветки',
		description: 'Цельные креветки в хрустящей панировке',
		quantity: 1,
		price: 209,
		image: 'https://media.dodostatic.net/image/r:584x584/01980e9159aa74ca93e7daaa7db3e9fd.avif',
	},
	{
		id: 110,
		title: 'Омлет с томатами в пите',
		description:
			'Легкий и питательный завтрак: омлет из печи с томатами и моцареллой в пшеничной пите. Удобно брать с собой',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:584x584/019860554d1474818d8cd5982dae2144.avif',
	},
	{
		id: 111,
		title: 'Омлет с ветчиной и грибами в пите',
		description:
			'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла в пшеничной пите. Удобно взять с собой',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:584x584/019860510daa726fa023e04a1ae06a87.avif',
	},
]

export async function GET() {
	return NextResponse.json(snacks)
}
