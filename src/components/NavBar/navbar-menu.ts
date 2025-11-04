import { PAGES } from '@/config/pages.config'

export interface IMenu {
	href: string
	name: string
}

export const MENU = [
	{
		href: PAGES.PIZZA,
		name: 'Пицца',
	},
	{
		href: PAGES.COMBO,
		name: 'Комбо',
	},

	{
		href: PAGES.SNACKS,
		name: 'Закуски',
	},

	{
		href: PAGES.COCKTAILS,
		name: 'Коктейли',
	},
	{
		href: PAGES.COFFEE,
		name: 'Кофе',
	},
	{
		href: PAGES.DRINKS,
		name: 'Напитки',
	},
	{
		href: PAGES.DESSERTS,
		name: 'Десерты',
	},
	{
		href: PAGES.SAUSE,
		name: 'Соусы',
	},
	{
		href: PAGES.OTHERSTUFF,
		name: 'Другие товары',
	},
	{
		href: PAGES.NEW,
		name: 'Новинки',
	},
	{
		href: PAGES.BREAKFAST,
		name: 'Завтрак',
	},
	{
		href: PAGES.OTHER,
		name: 'Ещё',
	},
	{
		href: PAGES.STOCKS,
		name: 'Акции',
	},
]
