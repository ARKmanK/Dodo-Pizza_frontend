'use client'

import * as React from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/utils/utils'

interface DateInputProps {
	value?: Date
	onChange?: (date: Date | undefined) => void
	className?: string
	placeholder?: string
}

function BirthdayCalendarInput({
	value,
	onChange,
	className,
	placeholder = 'дд.мм.гггг',
}: DateInputProps) {
	const [inputValue, setInputValue] = React.useState(value ? formatDate(value) : '')

	// Форматируем дату в строку дд.мм.гггг
	function formatDate(date: Date): string {
		if (!date || isNaN(date.getTime())) return ''
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}

	// Проверяем валидность даты (35 день, 13 месяц и т.д.)
	function isValidDate(day: number, month: number, year: number): boolean {
		// Проверяем базовые диапазоны
		if (day < 1 || day > 31) return false
		if (month < 1 || month > 12) return false
		if (year < 1000 || year > 9999) return false

		// Проверяем конкретные месяцы
		const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

		// Учитываем високосный год для февраля
		if (month === 2) {
			const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
			const maxDays = isLeapYear ? 29 : 28
			if (day > maxDays) return false
		} else {
			if (day > daysInMonth[month - 1]) return false
		}

		return true
	}

	// Парсим строку в Date
	function parseDate(dateString: string): Date | undefined {
		const parts = dateString.split('.')
		if (parts.length !== 3) return undefined

		const [day, month, year] = parts.map(part => parseInt(part, 10))

		// Проверяем базовую валидность чисел
		if (isNaN(day) || isNaN(month) || isNaN(year)) return undefined

		// Проверяем валидность даты
		if (!isValidDate(day, month, year)) return undefined

		const date = new Date(year, month - 1, day)

		// Дополнительная проверка
		if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
			return undefined
		}

		return date
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value

		// Удаляем все нецифровые символы
		value = value.replace(/[^\d]/g, '')

		// Форматируем в дд.мм.гггг по мере ввода
		if (value.length > 0) {
			if (value.length <= 2) {
				value = value
			} else if (value.length <= 4) {
				value = `${value.slice(0, 2)}.${value.slice(2)}`
			} else {
				value = `${value.slice(0, 2)}.${value.slice(2, 4)}.${value.slice(4, 8)}`
			}
		}

		setInputValue(value)

		// Вызываем onChange при полной дате
		if (value.length === 10) {
			const date = parseDate(value)
			if (date) {
				onChange?.(date) // Передаем валидную дату
			} else {
				// Если дата не существует - сразу очищаем поле
				setInputValue('')
				onChange?.(undefined)
			}
		} else if (value.length === 0) {
			onChange?.(undefined) // Очищаем поле
		}
		// Для неполных дат не вызываем onChange
	}

	const handleBlur = () => {
		// При потере фокуса очищаем неполные даты
		if (inputValue && inputValue.length < 10) {
			setInputValue('')
			onChange?.(undefined)
		}
	}

	// Синхронизируем с внешним value
	React.useEffect(() => {
		if (value && !isNaN(value.getTime())) {
			setInputValue(formatDate(value))
		} else {
			setInputValue('')
		}
	}, [value])

	return (
		<div className={cn('relative', className)}>
			<input
				type='text'
				value={inputValue}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder={placeholder}
				className={cn(
					'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
					'placeholder:text-muted-foreground',
					'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
					'disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f3f7]'
				)}
				maxLength={10}
			/>
			<CalendarIcon className='absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none' />
		</div>
	)
}

export default BirthdayCalendarInput
