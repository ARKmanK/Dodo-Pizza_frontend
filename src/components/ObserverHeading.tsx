'use client'
import { useNavBar } from '@/context/NavBarContext'
import { ReactNode, useEffect, useRef } from 'react'

export const ObserverHeading = ({ children, margin }: { children: ReactNode; margin: string }) => {
	const elementRef = useRef<HTMLDivElement>(null)
	const { setIsFixed } = useNavBar()

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsFixed(!entry.isIntersecting)
			},
			{
				root: null,
				threshold: 0,
				rootMargin: margin,
			}
		)

		const currentElement = elementRef.current
		if (currentElement) {
			observer.observe(currentElement)
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement)
			}
		}
	}, [setIsFixed])

	return <div ref={elementRef}>{children}</div>
}
