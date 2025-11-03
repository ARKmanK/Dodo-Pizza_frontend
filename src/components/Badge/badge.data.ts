import { Apple, FolderKanban, MemoryStick, Play, Package2 } from 'lucide-react'

export const BADGE_DATA = [
	{
		icon: Apple,
		size: 22,
		color: 'white',
		fill: 'white',
		titleTop: 'Загрузите в',
		titleBottom: 'App Store',
		href: '/',
	},
	{
		icon: FolderKanban,
		size: 26,
		color: 'black',
		fill: 'white',
		titleTop: 'Скачайте из',
		titleBottom: 'RuStore',
		href: '/',
	},
	{
		icon: MemoryStick,
		size: 26,
		titleTop: 'GET IT ON',
		titleBottom: 'Mi App Mail',
		href: '/',
	},
	{
		icon: Play,
		size: 26,
		titleTop: 'ДОСТУПНО В',
		titleBottom: 'Google Play',
		href: '/',
	},
	{
		icon: Package2,
		size: 26,
		titleTop: 'ОТКРОЙТЕ В',
		titleBottom: 'AppGallery',
		href: '/',
	},
]
