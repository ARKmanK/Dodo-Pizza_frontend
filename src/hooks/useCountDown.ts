import { useState, useEffect, useRef } from 'react'

export const useCountdown = (initialTime: number) => {
	const [timeLeft, setTimeLeft] = useState(initialTime)
	const [isExpired, setIsExpired] = useState(false)
	const timerRef = useRef<NodeJS.Timeout | null>(null)

	// Очистка таймера
	const clearTimer = () => {
		if (timerRef.current) {
			clearTimeout(timerRef.current)
			timerRef.current = null
		}
	}

	useEffect(() => {
		setIsExpired(false)
		setTimeLeft(initialTime)
		clearTimer()

		const startTime = Date.now()
		const endTime = startTime + initialTime * 1000

		const updateTimer = () => {
			const now = Date.now()
			const remaining = Math.max(0, Math.ceil((endTime - now) / 1000))

			setTimeLeft(remaining)

			if (remaining > 0) {
				timerRef.current = setTimeout(updateTimer, 1000)
			} else {
				setIsExpired(true)
				setTimeLeft(0)
			}
		}

		timerRef.current = setTimeout(updateTimer, 1000)

		return () => {
			clearTimer()
		}
	}, [initialTime])

	const resetTimer = () => {
		clearTimer()
		setIsExpired(false)
		setTimeLeft(initialTime)

		const startTime = Date.now()
		const endTime = startTime + initialTime * 1000

		const updateTimer = () => {
			const now = Date.now()
			const remaining = Math.max(0, Math.ceil((endTime - now) / 1000))

			setTimeLeft(remaining)

			if (remaining > 0) {
				timerRef.current = setTimeout(updateTimer, 1000)
			} else {
				setIsExpired(true)
				setTimeLeft(0)
			}
		}

		timerRef.current = setTimeout(updateTimer, 1000)
	}

	return { timeLeft, isExpired, resetTimer }
}
