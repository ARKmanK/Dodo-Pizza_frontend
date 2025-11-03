// utils/phoneInputHandler.ts
import { FormEvent } from 'react'

interface PhoneInputHandlerProps {
	value: string
	onChange: (value: string) => void
}

export const handlePhoneInput = (
	e: FormEvent<HTMLInputElement>,
	{ onChange }: PhoneInputHandlerProps
) => {
	const input = e.currentTarget
	let value = input.value.replace(/[^+0-9]/g, '')

	// Разрешаем + только в начале
	if (value.includes('+') && !value.startsWith('+')) {
		value = value.replace('+', '')
	}

	// Восстанавливаем +7, если некорректный ввод
	if (!value || !/^\+?[0-9]*$/.test(value)) {
		value = '+7'
	}

	// Если начинается с +, но не +7, восстанавливаем +7
	if (value.startsWith('+') && !value.startsWith('+7')) {
		value = '+7'
	}

	// Ограничиваем длину до 12 символов (+7 и 10 цифр)
	if (value.length > 12) {
		value = value.slice(0, 12)
	}

	input.value = value
	onChange(value)
}

export const handlePhonePaste = (
	e: React.ClipboardEvent<HTMLInputElement>,
	{ onChange }: PhoneInputHandlerProps
) => {
	const pasted = e.clipboardData.getData('text')
	if (!/^\+?[0-9]+$/.test(pasted)) {
		e.preventDefault()
		onChange('+7')
	}
}
