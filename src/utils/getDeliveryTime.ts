type TimeSlot = string

// Функция для получения массива временных меток с шагом 15 минут
export const getDeliveryTime = (): TimeSlot[] => {
	// Получаем текущее время
	const now = new Date()
	const currentHour = now.getHours()
	const currentMinute = now.getMinutes()

	// Если текущее время между 23:45 и 08:00, показываем первые слоты с 8:00
	if ((currentHour >= 23 && currentMinute >= 45) || currentHour < 8) {
		return ['Побыстрее', '08:00', '08:15']
	}

	// Если текущее время в рабочее время
	let startMinute = Math.ceil(currentMinute / 15) * 15
	let startHour = currentHour
	if (startMinute >= 60) {
		startMinute = 0
		startHour += 1
	}

	const timeSlots: TimeSlot[] = []

	// Генерируем временные метки до 23:45
	for (let hour = startHour; hour <= 23; hour++) {
		const minutes =
			hour === startHour
				? [startMinute, startMinute + 15, startMinute + 30, startMinute + 45].filter(m => m < 60)
				: [0, 15, 30, 45]
		for (let minute of minutes) {
			if (hour === 23 && minute > 45) break

			const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
			timeSlots.push(timeStr)
			if (hour === 23 && minute === 45) break
		}
		if (hour === 23) break
	}

	// Формируем итоговый массив опций
	const options: TimeSlot[] = ['Побыстрее']

	// Добавляем первые 2 доступных слота
	if (timeSlots.length > 0) {
		options.push(timeSlots[0])
	}
	if (timeSlots.length > 1) {
		options.push(timeSlots[1])
	}

	// Если слотов меньше 2, добавляем утренние слоты на следующий день
	if (timeSlots.length < 2) {
		const morningSlots = ['08:00', '08:15', '08:30', '08:45']
		for (let i = options.length; i < 3; i++) {
			if (morningSlots[i - 1]) {
				options.push(morningSlots[i - 1])
			}
		}
	}

	return options
}

// Функция для получения всех слотов (только с 8:00 до 23:45)
export const getAllTimeSlots = (): TimeSlot[] => {
	// Получаем текущее время
	const now = new Date()
	const currentHour = now.getHours()
	const currentMinute = now.getMinutes()

	const timeSlots: TimeSlot[] = []

	// Если текущее время между 23:45 и 08:00, показываем все слоты с 8:00 до 23:45
	if ((currentHour >= 23 && currentMinute >= 45) || currentHour < 8) {
		for (let hour = 8; hour <= 23; hour++) {
			const minutes = hour === 23 ? [0, 15, 30, 45].filter(m => m <= 45) : [0, 15, 30, 45]
			for (let minute of minutes) {
				const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
				timeSlots.push(timeStr)
				if (hour === 23 && minute === 45) break
			}
			if (hour === 23) break
		}
		return timeSlots
	}

	// Если текущее время в рабочее время (08:00 - 23:44)
	// Начинаем с ближайшего 15-минутного интервала после текущего времени
	let startMinute = Math.ceil(currentMinute / 15) * 15
	let startHour = currentHour
	if (startMinute >= 60) {
		startMinute = 0
		startHour += 1
	}

	// Генерируем временные метки до 23:45
	for (let hour = startHour; hour <= 23; hour++) {
		const minutes =
			hour === startHour
				? [startMinute, startMinute + 15, startMinute + 30, startMinute + 45].filter(m => m < 60)
				: [0, 15, 30, 45]
		for (let minute of minutes) {
			// Проверяем, что время не позже 23:45
			if (hour === 23 && minute > 45) break

			const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
			timeSlots.push(timeStr)
			if (hour === 23 && minute === 45) break
		}
		if (hour === 23) break
	}

	return timeSlots
}
