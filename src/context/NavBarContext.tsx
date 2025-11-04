'use client'

import { usePathname } from 'next/navigation'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface NavBarContextType {
	isFixed: boolean
	setIsFixed: (isFixed: boolean) => void
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined)

export function NavBarProvider({ children }: { children: ReactNode }) {
	const [isFixed, setIsFixed] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		setIsFixed(false)
	}, [pathname])

	return <NavBarContext.Provider value={{ isFixed, setIsFixed }}>{children}</NavBarContext.Provider>
}

export function useNavBar() {
	const context = useContext(NavBarContext)
	if (!context) {
		throw new Error('useNavBar must be used within a NavBarProvider')
	}
	return context
}
