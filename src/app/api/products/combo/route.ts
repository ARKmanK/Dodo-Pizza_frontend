import { NextResponse } from 'next/server'

const combo = [
	{
		id: 51,
		title: '2 пиццы',
		description:
			'Парочка что надо. 2 пиццы. Цена комбо зависит от выбранных пицц и может быть увеличена',
		quantity: 1,
		price: 1129,
		image: 'https://media.dodostatic.net/image/r:292x292/0195d407b8a8718dbb9572f2848da623.avif',
	},
	{
		id: 52,
		title: '3 пиццы',
		description:
			'Любые вкусы. Любые размеры. Соберите свою тройку, как вы любите. Цена зависит от выбора.',
		quantity: 1,
		price: 869,
		image: 'https://media.dodostatic.net/image/r:292x292/0195960cdb9079b38dd908001994d5dc.avif',
	},
	{
		id: 53,
		title: 'Пицца и напиток',
		description: 'Отличная идея для обеда на одного: пицца и напиток на выбор',
		quantity: 1,
		price: 369,
		image: 'https://media.dodostatic.net/image/r:292x292/0197c001ff39748ea72e0da6db8b13f0.avif',
	},
	{
		id: 54,
		title: 'Чикен бокс',
		description:
			'Картошка без курицы, как курица без картошки — лучше вместе. Выбирайте куриные наггетсы, кусочки или крылья барбекю и заказывайте сразу в комбо с пряной картошечкой и соусом',
		quantity: 1,
		price: 270,
		image: 'https://media.dodostatic.net/image/r:292x292/019570d1cf4972f59b57ab333237e745.avif',
	},
	{
		id: 55,
		title: '3 пиццы 30 см',
		description:
			'Три удовольствия в нашем меню — это 3 средние пиццы на ваш выбор. Цена комбо зависит от выбранных пицц и может быть увеличена',
		quantity: 1,
		price: 1239,
		image: 'https://media.dodostatic.net/image/r:292x292/0195f0ff3ee0726a8389bda7e4d9062a.avif',
	},
	{
		id: 56,
		title: 'Четыре в одном',
		description:
			'Если хочется всего понемногу. Маленькая пицца, закуска, напиток и соус. Цена комбо зависит от выбранных продуктов и может быть увеличена',
		quantity: 1,
		price: 739,
		image: 'https://media.dodostatic.net/image/r:292x292/01980e870b7775b890ea97fcd9f3f853.avif',
	},
	{
		id: 57,
		title: 'Комбо Пеппероби',
		description:
			'Квадратная пицца, чтобы в игре подкрепиться. С пикантной пепперони и моцареллой. В комплекте яркий брелок, такой же как UGC в Мире Додо Пиццы!',
		quantity: 1,
		price: 539,
		image: 'https://media.dodostatic.net/image/r:292x292/0196a9ad810f70ea93151a8281a68058.avif',
	},
	{
		id: 58,
		title: 'Салат и закуска',
		description: 'Отличный выбор для теплых сезонов: салат и закуска на выбор',
		quantity: 1,
		price: 449,
		image: 'https://media.dodostatic.net/image/r:292x292/01978c553929716fb342d41f33c3942a.jpg',
	},
	{
		id: 59,
		title: '2 напитка',
		description:
			'Одним словом — литр. Выберите две бутылочки на свой вкус: газировку Добрый или холодный чай Rich',
		quantity: 1,
		price: 239,
		image: 'https://media.dodostatic.net/image/r:292x292/01980e8dad62703bb169ba6f96c60eb3.avif',
	},
	{
		id: 60,
		title: 'Додо Бокс',
		description:
			'Классный набор для детей: две закуски с напитком на выбор и коллекционный брелок из Мира Додо Пиццы',
		quantity: 1,
		price: 429,
		image: 'https://media.dodostatic.net/image/r:292x292/019a28423bb6733e96128af1941e44fb.jpg',
	},
	{
		id: 61,
		title: 'Додо Бокс',
		description:
			'Весёлый набор для маленьких создателей: две закуски и напиток на выбор, а самое интересное — игрушка-конструктор из новой коллекции',
		quantity: 1,
		price: 429,
		image: 'https://media.dodostatic.net/image/r:292x292/0195d407347c7105b2de4a33d00bcdd7.avif',
	},
	{
		id: 62,
		title: 'Завтрак на двоих',
		description: 'Горячий завтрак для двоих. 2 закуски из подборки и 2 напитка на выбор',
		quantity: 1,
		price: 449,
		image: 'https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.jpg',
	},
]

export async function GET() {
	return NextResponse.json(combo)
}
