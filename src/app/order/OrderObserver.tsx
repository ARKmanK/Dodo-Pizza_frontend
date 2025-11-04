'use client'

import { useNavBar } from '@/context/NavBarContext'
import { useEffect, useRef } from 'react'
import OrderBox from './OrderBox'

export const OrderObserver = () => {
	const h2Ref = useRef<HTMLHeadingElement>(null)
	const { setIsFixed } = useNavBar()

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Если h2 не в зоне видимости (прокрутка ниже), фиксируем NavBar
				setIsFixed(!entry.isIntersecting)
			},
			{
				root: null, // Используем viewport
				threshold: 0, // Срабатывает, когда h2 полностью выходит из видимости
				rootMargin: '-60px', // Можно настроить отступ, если нужно
			}
		)

		if (h2Ref.current) {
			observer.observe(h2Ref.current)
		}

		return () => {
			if (h2Ref.current) {
				observer.unobserve(h2Ref.current)
			}
		}
	}, [setIsFixed])

	return <OrderBox />
}
