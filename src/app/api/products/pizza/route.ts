import { NextResponse } from 'next/server'

const pizza = [
	{
		id: 1,
		title: 'Пепперони фреш',
		description: 'Выходные подъехали вместе с горячей пиццей по очень приятной цене',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif',
	},
	{
		id: 2,
		title: 'Терияки',
		description:
			'Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла и фирменный соус альфредо',
		quantity: 1,
		price: 339,
		image: 'https://media.dodostatic.net/image/r:584x584/019a10a0c9ab792190a97768688bc6e9.avif',
	},
	{
		id: 3,
		title: 'Чесночный цыпленок',
		description: 'Цыпленок, чеснок, томаты, моцарелла, фирменный соус альфредо',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif',
	},
	{
		id: 4,
		title: 'Пикантные колбаски',
		description: 'Классические колбаски, лук красный, моцарелла, фирменный томатный соус',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:292x292/0198bf25089a74d08e08629b41ed39ee.avif',
	},
	{
		id: 5,
		title: 'Четыре сыра',
		description: 'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, фирменный соус альфредо',
		quantity: 1,
		price: 359,
		image: 'https://media.dodostatic.net/image/r:584x584/019a109fe01672189d029a725ba99705.avif',
	},
	{
		id: 6,
		title: 'Сырная',
		description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf40eb1171aabe90b1b3ce07c0c5.avif',
	},
	{
		id: 7,
		title: 'Чоризо фреш',
		description: 'Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус',
		quantity: 1,
		price: 259,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf4f806371f19d529f9e9e7dba36.avif',
	},
	{
		id: 8,
		title: 'Ветчина и сыр',
		description: 'Ветчина, моцарелла, фирменный соус альфредо',
		quantity: 1,
		price: 299,
		image: 'https://media.dodostatic.net/image/r:292x292/0198bf283b2372ea8e7cfc8adae9ea84.avif',
	},
	{
		id: 9,
		title: 'Двойной цыпленок',
		description: 'Двойная порция цыпленка, моцарелла, фирменный соус альфредо',
		quantity: 1,
		price: 309,
		image: 'https://media.dodostatic.net/image/r:292x292/0198bf3e424371b49f0b8d7dbe320a70.avif',
	},
	{
		id: 10,
		title: 'Охотничья',
		description:
			'Двойная порция классических колбасок, красный лук, томаты, соус барбекю, моцарелла, фирменный томатный соус',
		quantity: 1,
		price: 359,
		image: 'https://media.dodostatic.net/image/r:584x584/019a109ea75376fe9b51989f221bd92c.avif',
	},
	{
		id: 11,
		title: 'Креветка и песто',
		description:
			'Креветки, томаты, шампиньоны, соус песто, моцарелла, итальянские травы, фирменный томатный соус',
		quantity: 1,
		price: 459,
		image: 'https://media.dodostatic.net/image/r:292x292/0198bf4d218b75d4a3e667fc2f6d7643.avif',
	},
	{
		id: 12,
		title: 'Чилл Грилл',
		description:
			'Двойная порция цыпленка, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо',
		quantity: 1,
		price: 359,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf4624de7324966f2fc62c3ca673.avif',
	},
	{
		id: 13,
		title: 'Ветчина и грибы',
		description: 'Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус',
		quantity: 1,
		price: 329,
		image: 'https://media.dodostatic.net/image/r:292x292/0198c659b357718f9c77ad0dc392dadf.avif',
	},
	{
		id: 14,
		title: 'Аррива!',
		description:
			'Цыпленок, острые колбаски чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок',
		quantity: 1,
		price: 419,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf2e5d2973a4bf5ec61161496f91.avif',
	},
	{
		id: 15,
		title: 'Креветки со сладким чили',
		description:
			'Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо',
		quantity: 1,
		price: 449,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf5147f27780a3290a82692e7a36.avif',
	},
	{
		id: 16,
		title: 'Бефстроганов',
		description:
			'Пряная говядина, шампиньоны, ароматный грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо',
		quantity: 1,
		price: 499,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf5205fb78abb9ad479b6e47304c.avif',
	},
	{
		id: 17,
		title: 'Карбонара',
		description:
			'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы',
		quantity: 1,
		price: 429,
		image: 'https://media.dodostatic.net/image/r:292x292/0198bf2b03447079941f2d5ac6e986a9.avif',
	},
	{
		id: 18,
		title: 'Жюльен',
		description:
			'Цыпленок, шампиньоны, ароматный грибной соус, лук, сухой чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо',
		quantity: 1,
		price: 379,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf4e67f474f991f04a46a49af5e6.avif',
	},
	{
		id: 19,
		title: 'Песто',
		description:
			'Двойная порция цыпленка, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо',
		quantity: 1,
		price: 409,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf443ff778d0a9a9b3e628d39b95.avif',
	},
	{
		id: 20,
		title: 'Мясная',
		description:
			'Цыпленок, ветчина, пикантная пепперони, острые колбаски чоризо, моцарелла, фирменный томатный соус',
		quantity: 1,
		price: 429,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.avif',
	},
	{
		id: 21,
		title: 'Бургер-пицца',
		description:
			'Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус',
		quantity: 1,
		price: 349,
		image: 'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
	},
	{
		id: 22,
		title: 'Сырный цыпленок',
		description:
			'Двойная порция цыпленка, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок',
		quantity: 1,
		price: 429,
		image: 'https://media.dodostatic.net/image/r:292x292/0198bf44f21b753ab8d43dada31ecee1.avif',
	},
	{
		id: 23,
		title: 'Додо',
		description:
			'Бекон, пряная говядина, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, фирменный томатный соус',
		quantity: 1,
		price: 489,
		image: 'https://media.dodostatic.net/image/r:292x292/0198da9ffdfe782bb8d982b10c5e6b43.avif',
	},
	{
		id: 24,
		title: 'Пепперони',
		description: 'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус',
		quantity: 1,
		price: 319,
		image: 'https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif',
	},
]

export async function GET() {
	return NextResponse.json(pizza)
}
