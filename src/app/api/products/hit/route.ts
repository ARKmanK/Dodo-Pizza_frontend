import { NextResponse } from 'next/server'

const hits = [
	{
		id: 650,
		title: 'Аррива!',
		description:
			'Цыпленок, острые колбаски чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок',
		quantity: 1,
		price: 419,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf2e5d2973a4bf5ec61161496f91.avif',
	},
	{
		id: 651,
		title: 'Карбонара',
		description:
			'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы',
		quantity: 1,
		price: 429,
		image: 'https://media.dodostatic.net/image/r:292x292/0198bf2b03447079941f2d5ac6e986a9.avif',
	},
	{
		id: 652,
		title: 'Песто',
		description:
			'Двойная порция цыпленка, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо',
		quantity: 1,
		price: 409,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf443ff778d0a9a9b3e628d39b95.avif',
	},
	{
		id: 653,
		title: 'Додо',
		description:
			'Бекон, пряная говядина, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, фирменный томатный соус',
		quantity: 1,
		price: 489,
		image: 'https://media.dodostatic.net/image/r:292x292/0198da9ffdfe782bb8d982b10c5e6b43.avif',
	},
	{
		id: 654,
		title: 'Креветки со сладким чили',
		description:
			'Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо',
		quantity: 1,
		price: 449,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf5147f27780a3290a82692e7a36.avif',
	},
	{
		id: 655,
		title: 'Додстер Чилл Грилл',
		description:
			'Горячая закуска с цыпленком и соусом гриль с луком, маринованными огурчиками и моцареллой в тонкой пшеничной лепешке',
		quantity: 1,
		price: 239,
		image: 'https://media.dodostatic.net/image/r:584x584/01980cb84cfb7023b6eca978780d30c5.avif',
	},
	{
		id: 656,
		title: 'Сырный',
		description:
			'Фирменный соус со вкусом расплавленного сыра для бортиков пиццы и горячих закусок, 25 г',
		quantity: 1,
		price: 49,
		image: 'https://media.dodostatic.net/image/r:584x584/0197f86ac30a734eb384d710bb1789f3.avif',
	},
	{
		id: 657,
		title: 'Дэнвич чоризо барбекю',
		description:
			'Насыщенный вкус острых колбасок чоризо и пикантной пепперони с соусами бургер и барбекю, свежими томатами, маринованными огурчиками, моцареллой и луком в румяной чиабатте',
		quantity: 1,
		price: 269,
		image: 'https://media.dodostatic.net/image/r:292x292/01988873280c77f0b5df7d8272ab2e0d.avif',
	},
]

export async function GET() {
	return NextResponse.json(hits)
}
