import { NextResponse } from 'next/server'

const drinks = [
	{
		id: 250,
		title: 'Добрый Кола',
		description: '0,5 л',
		quantity: 1,
		price: 135,
		image: 'https://media.dodostatic.net/image/r:584x584/019a108bcba075db9f0dd7f304bf918d.avif',
	},
	{
		id: 251,
		title: 'Добрый Кола без сахара',
		description: '0,5 л',
		quantity: 1,
		price: 135,
		image: 'https://media.dodostatic.net/image/r:292x292/019a108c96277706af47ee96b31feeba.avif',
	},
	{
		id: 252,
		title: 'Добрый Кола Ледяной Лимон',
		description: '0,5 л',
		quantity: 1,
		price: 135,
		image: 'https://media.dodostatic.net/image/r:584x584/019a108d526478988f5467e1812a9959.avif',
	},
	{
		id: 253,
		title: 'Добрый Киви-Виноград',
		description: '0,5 л',
		quantity: 1,
		price: 135,
		image: 'https://media.dodostatic.net/image/r:292x292/019a108b601a742eb22316c8e488d338.jpg',
	},
	{
		id: 254,
		title: 'Добрый Апельсин',
		description: '0,5 л',
		quantity: 1,
		price: 135,
		image: 'https://media.dodostatic.net/image/r:292x292/019a108ae3b271c9a11f871088824138.jpg',
	},
	{
		id: 255,
		title: 'Добрый Лимон-Лайм',
		description: '0,5 л',
		quantity: 1,
		price: 135,
		image: 'https://media.dodostatic.net/image/r:292x292/0197f86321497340b0a98da0a428d7ce.jpg',
	},
	{
		id: 256,
		title: 'Лимонад Арбузный лайм',
		description: 'Cладость арбуза с освежающим лаймом и листьями мяты по фирменному рецепту',
		quantity: 1,
		price: 159,
		image: 'https://media.dodostatic.net/image/r:584x584/0197f865f0a872f0874fb8caa5cb293a.avif',
	},
	{
		id: 257,
		title: 'Rich Tea Черный с лимоном',
		description: '0,5 л',
		quantity: 1,
		price: 139,
		image: 'https://media.dodostatic.net/image/r:292x292/019a1089d33a7943a2c2c89e518c1341.jpg',
	},
]

export async function GET() {
	return NextResponse.json(drinks)
}
