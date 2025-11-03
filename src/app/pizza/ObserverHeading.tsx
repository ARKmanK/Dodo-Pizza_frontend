'use client'

import { useNavBar } from '@/context/NavBarContext'
import { useEffect, useRef } from 'react'

interface IObserverHeadingProps {
	title: string
}

export const ObserverHeading = ({ title }: IObserverHeadingProps) => {
	const h2Ref = useRef<HTMLHeadingElement>(null)
	const { setIsNavFixed } = useNavBar()

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Если h2 не в зоне видимости (прокрутка ниже), фиксируем NavBar
				setIsNavFixed(!entry.isIntersecting)
			},
			{
				root: null, // Используем viewport
				threshold: 0, // Срабатывает, когда h2 полностью выходит из видимости
				rootMargin: '-50px', // Можно настроить отступ, если нужно
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
	}, [setIsNavFixed])

	return (
		<h2 ref={h2Ref} className='pb-3 pl-6 mt-20 text-xl font-bold lg:text-2xl'>
			{title}
		</h2>
	)
}
