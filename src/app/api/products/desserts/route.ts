import { NextResponse } from 'next/server'

const desserts = [
	{
		id: 300,
		title: 'Тарт лимонный',
		description: 'Песочная тарталетка с насыщенным цитрусовым вкусом и приятной кислинкой',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:584x584/019888711809770cbe00dbdf9ced5022.avif',
	},
	{
		id: 301,
		title: 'Шоколадный кукис',
		description:
			'Мягкое печенье с кусочками темного шоколада. Идеально сочетается с чаем, кофе или какао',
		quantity: 1,
		price: 115,
		image: 'https://media.dodostatic.net/image/r:584x584/01980cc17ab27929b37069e12dc66e6e.avif',
	},
	{
		id: 302,
		title: 'Черничный маффин',
		description: 'Воздушный кекс с ароматной начинкой из натуральной черники',
		quantity: 1,
		price: 119,
		image: 'https://media.dodostatic.net/image/r:584x584/01980cc513e77702a7d440f89b7fba9f.avif',
	},
	{
		id: 303,
		title: 'Маффин Соленая карамель',
		description:
			'ВыходКекс, раскрывающий необычное сочетание соленого арахиса и сладкой карамелиныеподъехали',
		quantity: 1,
		price: 119,
		image: 'https://media.dodostatic.net/image/r:584x584/01980cc4a4aa729e88828f8db0a48711.avif',
	},
	{
		id: 304,
		title: 'Маффин Три шоколада',
		description: 'Кекс из натурального какао с начинкой из кубиков белого и молочного шоколада',
		quantity: 1,
		price: 119,
		image: 'https://media.dodostatic.net/image/r:584x584/01980cc4cebb707a9b91ba24195fee1d.avif',
	},
	{
		id: 305,
		title: 'Яблочный крамбл',
		description: 'Горячий пирог из печи с рассыпчатой крошкой и кислинкой зеленого яблока',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:584x584/0198ae57be1772ec8b98e13c78b7f7ab.avif',
	},
	{
		id: 306,
		title: 'Чизкейк Дубайский',
		description:
			'Мягкий чизкейк с насыщенным фисташковым вкусом и глазурью. Вдохновлён десертом, о котором говорят все — и не зря Название вымышленное. Чизкейк и ингредиенты в составе не из Дубая',
		quantity: 1,
		price: 219,
		image: 'https://media.dodostatic.net/image/r:584x584/019999d8979e720182482f757c95fb35.avif',
	},
	{
		id: 307,
		title: 'Пирожное Муравьешки',
		description:
			'Сметанное печенье, вареная сгущенка и мед — просто и вкусно, как в детстве. В упаковке три шарика',
		quantity: 1,
		price: 149,
		image: 'https://media.dodostatic.net/image/r:584x584/01980d4299eb70c2ac5b0203c228851f.avif',
	},
]

export async function GET() {
	return NextResponse.json(desserts)
}
