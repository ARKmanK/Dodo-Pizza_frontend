'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface NavBarContextType {
	isNavFixed: boolean
	setIsNavFixed: (isFixed: boolean) => void
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined)

export function NavBarProvider({ children }: { children: ReactNode }) {
	const [isNavFixed, setIsNavFixed] = useState(false)

	return (
		<NavBarContext.Provider value={{ isNavFixed, setIsNavFixed }}>
			{children}
		</NavBarContext.Provider>
	)
}

export function useNavBar() {
	const context = useContext(NavBarContext)
	if (!context) {
		throw new Error('useNavBar must be used within a NavBarProvider')
	}
	return context
}
