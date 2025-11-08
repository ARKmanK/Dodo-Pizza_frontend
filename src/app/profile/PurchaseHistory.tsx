'use client'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

const PurchaseHistory = () => {
	/* const { getCard, deleteCard, getPurchaseHistory } = useActions() */
	/* const {card, history, ordersNumber} = useUserSummary() */

	return (
		<div className='mt-15'>
			<p className='text-xl font-semibold'>История заказов</p>
			<p className='text-sm text-[#747d92]'>20 заказов за последние 90 дней</p>
			<Table className='mt-6 max-w-[650px]'>
				<TableHeader>
					<TableRow className='text-sm'>
						<TableHead className='text-[#747d92] font-semibold w-[40px]'>№</TableHead>
						<TableHead className='text-[#747d92] font-semibold w-[200px]'>Время заказа</TableHead>
						<TableHead className='text-[#747d92] font-semibold w-[100px]'>Сумма</TableHead>
						<TableHead className='text-[#747d92] font-semibold w-[160px]'>Способ оплаты</TableHead>
						<TableHead className='text-[#747d92] font-semibold'>Чек</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						{/* {PAGES.map((item) => {
                <>
									<TableCell>{item.number}</TableCell>
									<TableCell>{item.time}</TableCell>
									<TableCell>{item.price}</TableCell>
									<TableCell>{item.paymentMethod}</TableCell>
									<TableCell>{item.ticket}</TableCell>
								</>
              })} */}
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}

export default PurchaseHistory
