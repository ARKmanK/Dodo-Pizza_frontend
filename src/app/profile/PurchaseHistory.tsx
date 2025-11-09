'use client'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { useUserSummary } from '@/hooks/useUserSummary'
import { useEffect, useState } from 'react'

const PurchaseHistory = () => {
	const [isMounted, setIsMounted] = useState(false)
	const { purchaseHistory, purchaseQuantity } = useUserSummary()

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<div className='mt-15'>
			<p className='text-xl font-semibold'>История заказов</p>
			{isMounted && (
				<p className='text-sm text-[#747d92]'>{purchaseQuantity} заказов за последние 90 дней</p>
			)}
			<Table className='mt-6 max-w-[650px]'>
				<TableHeader>
					<TableRow className='text-sm'>
						<TableHead className='text-[#747d92] font-semibold w-[40px] pl-0'>№</TableHead>
						<TableHead className='text-[#747d92] font-semibold w-[150px]'>Время заказа</TableHead>
						<TableHead className='text-[#747d92] font-semibold w-[120px]'>Сумма</TableHead>
						<TableHead className='text-[#747d92] font-semibold w-[190px]'>Способ оплаты</TableHead>
						<TableHead className='text-[#747d92] font-semibold'>Чек</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{isMounted ? (
						purchaseHistory.map(order => (
							<TableRow key={order.id} className='text-sm'>
								<TableCell className='pl-0'>{order.purchaseNumber}</TableCell>
								<TableCell>{order.purchaseTime}</TableCell>
								<TableCell>{order.purchasePrice} Руб.</TableCell>
								<TableCell>{order.purchasePaymentMethod}</TableCell>
								{/* <PurchaseTicket order={order}/> */}
								{/* <TableCell>{order.ticket}</TableCell> */}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell>Загрузка...</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}

export default PurchaseHistory
