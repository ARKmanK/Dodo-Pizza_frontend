import { NextResponse } from 'next/server'

const coffee = [
	{
		id: 200,
		title: 'Кофе Американо',
		description: 'Горячий кофе для ценителей чистого вкуса',
		quantity: 1,
		price: 129,
		image: 'https://media.dodostatic.net/image/r:584x584/0198227e7648741ead340c4c96da45a4.avif',
	},
	{
		id: 201,
		title: 'Латте Темный лес',
		description: 'Вишня, шоколад и мягкий кофе — вкус, как у знаменитого пирожного',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:292x292/01995c21fa247222a0e435d8924a73f6.avif',
	},
	{
		id: 202,
		title: 'Кофе Капучино',
		description: 'Легендарный рецепт кофе: эспрессо, горячее молоко и плотная молочная пенка',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:584x584/019840b6488170018dd640026aea9961.avif',
	},
	{
		id: 203,
		title: 'Кофе Латте',
		description:
			'Идеально сбалансированное сочетание кофе, увеличенной порции молока и нежнейшей пенки',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:584x584/01982280dc9a778c941ba53768d94882.avif',
	},
	{
		id: 204,
		title: 'Кофе Кокосовый латте',
		description: 'Горячий латте с кокосовым сиропом',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:584x584/0199864186a476df9937a053d065344b.avif',
	},
	{
		id: 205,
		title: 'Кофе Ореховый латте',
		description: 'Горячий латте с сиропом со вкусом фундука',
		quantity: 1,
		price: 179,
		image: 'https://media.dodostatic.net/image/r:584x584/01998642911c798ca1235e655ad191d0.avif',
	},
	{
		id: 206,
		title: 'Айс капучино',
		description: 'Освежающий холодный кофе с порцией эспрессо и пломбиром',
		quantity: 1,
		price: 229,
		image: 'https://media.dodostatic.net/image/r:584x584/0199864654447319847e41eb6b656ec9.avif',
	},
	{
		id: 207,
		title: 'Кофе в зернах — фирменная смесь',
		description:
			'Фирменная смесь кофейных зерен из 100% арабики. Кофейные зерна из Бразилии и Эфиопии обжаренные по специальному рецепту Додо. Идеально подходят для заваривания в домашних условиях',
		quantity: 1,
		price: 955,
		image: 'https://media.dodostatic.net/image/r:584x584/0197f86c4d2b7822b715fa60da7731ac.avif',
	},
]

export async function GET() {
	return NextResponse.json(coffee)
}
