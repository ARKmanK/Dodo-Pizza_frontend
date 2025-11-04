import { NextResponse } from 'next/server'

const cocktails = [
	{
		id: 150,
		title: 'Персиковый молочный коктейль',
		description: 'Сочный, спелый персик и приятная свежесть мороженого',
		quantity: 1,
		price: 230,
		image: 'https://media.dodostatic.net/image/r:584x584/0199864e07967186b27287dc88685579.avif',
	},
	{
		id: 151,
		title: 'Молочный коктейль Фисташка',
		description: 'Сочетание нежности, сливочной текстуры и тонкого вкуса фисташки',
		quantity: 1,
		price: 230,
		image: 'https://media.dodostatic.net/image/r:584x584/0199864a65a871ebade4be4d862a7c20.avif',
	},
	{
		id: 152,
		title: 'Молочный коктейль с печеньем Орео',
		description:
			'Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»',
		quantity: 1,
		price: 230,
		image: 'https://media.dodostatic.net/image/r:584x584/019986494294739e9e1edf44accf8dcc.avif',
	},
	{
		id: 153,
		title: 'Классический молочный коктейль',
		description: 'Это классика: молоко, мороженое и ничего лишнего',
		quantity: 1,
		price: 189,
		image: 'https://media.dodostatic.net/image/r:292x292/0198227af30a72b3b2614e9da1d277a3.avif',
	},
	{
		id: 154,
		title: 'Клубничный молочный коктейль',
		description:
			'Не важно, какое время года на улице, этот коктейль с клубничным сиропом вернет вас в лето с одного глотка',
		quantity: 1,
		price: 230,
		image: 'https://media.dodostatic.net/image/r:584x584/0199ae7135777528bca136648af27fb4.avif',
	},
	{
		id: 155,
		title: 'Шоколадный молочный коктейль',
		description: 'Это шок! Шоколадный молочный коктейль со сливочным мороженым и фирменным какао',
		quantity: 1,
		price: 230,
		image: 'https://media.dodostatic.net/image/r:584x584/0199864ca5fe77de868217896c71a63c.avif',
	},
]

export async function GET() {
	return NextResponse.json(cocktails)
}
