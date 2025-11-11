interface IRestaurants {
	id: number
	address: string
	restaurantTime: {
		Mond_Thur: string
		Fr_Sat: string
		Sund: string
	}
	delivery: {
		Mond_Thur: string
		Fr_Sat: string
		Sund: string
	}
}

export const RESTAURANTS: IRestaurants[] = [
	{
		id: 1,
		address: 'ул. Карамзина, 20А',
		restaurantTime: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
		delivery: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
	},
	{
		id: 2,
		address: 'пр-т Мира, 60',
		restaurantTime: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
		delivery: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
	},
	{
		id: 3,
		address: 'ул. Ладо Кецховели, 28',
		restaurantTime: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
		delivery: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
	},
	{
		id: 4,
		address: 'ул. Дмитрия Мартынова, 18',
		restaurantTime: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
		delivery: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
	},
	{
		id: 5,
		address: 'ул. 78-й Добровольчесой Бригады, 23',
		restaurantTime: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
		delivery: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
	},
	{
		id: 6,
		address: 'пр-т 60 лет Образования СССР, жилой...',
		restaurantTime: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
		delivery: {
			Mond_Thur: 'Пн-Чт: 08:00 - 00:30',
			Fr_Sat: 'Пт-Сб: 08:00 - 01:00',
			Sund: 'Вс: 08:00 - 00:30',
		},
	},
]
