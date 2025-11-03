'use client'
import { useEffect, useState } from 'react'

const Revenue = () => {
	const [revenue, setRevenue] = useState(0)

	useEffect(() => {
		const ws = new WebSocket('ws://localhost:4200')

		ws.onopen = () => {}

		ws.onmessage = e => {
			const data = JSON.parse(e.data)
			if (data.type === 'revenue') {
				setRevenue(data.value)
			}
		}

		return () => {
			ws.close()
		}
	}, [])

	return (
		<p className='text-lg font-semibold text-[#8e9296] lg:text-[16px]'>
			В прошлом - {revenue.toLocaleString()} Руб.
		</p>
	)
}

export default Revenue
