type TimeSlot = string

// Функция для получения массива временных меток с шагом 15 минут
export const getDeliveryTime = (): TimeSlot[] => {
	// Получаем текущее время
	const now = new Date()
	const currentHour = now.getHours()
	const currentMinute = now.getMinutes()

	// Начинаем с ближайшего 15-минутного интервала после текущего времени
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
			const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
			timeSlots.push(timeStr)
			if (hour === 23 && minute === 45) break
		}
		if (hour === 23) break
	}

	return timeSlots
}
