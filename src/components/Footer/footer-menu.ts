import { FOOTERPAGES } from '@/config/footerPages.config'

export interface IFooterMenu {
	href: string
	name: string
}

export const FooterMenu = [
	{
		href: FOOTERPAGES.partners.Franchise,
		name: 'Франшиза',
	},
	{
		href: FOOTERPAGES.partners.Investment,
		name: 'Инвестиции',
	},
	{
		href: FOOTERPAGES.partners.Suppliers,
		name: 'Поставщикам',
	},
	{
		href: FOOTERPAGES.partners.SuggestRoom,
		name: 'Предложить помещение',
	},
	{
		href: FOOTERPAGES.interesting.masterClasses,
		name: 'Экскурсии и мастер-классы',
	},
	{
		href: FOOTERPAGES.interesting.questions,
		name: 'Почему мы готовим без перчаток?',
	},
	{
		href: FOOTERPAGES.contacts.phone,
		name: '8 800 302-00-60',
	},
	{
		href: FOOTERPAGES.contacts.email,
		name: 'feedback@dodopizza.com',
	},
]
