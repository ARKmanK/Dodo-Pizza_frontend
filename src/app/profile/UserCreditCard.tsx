'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useActions } from '@/hooks/useActions'
import { useUserSummary } from '@/hooks/useUserSummary'
import {
	formatCardNumber,
	formatCVV,
	formatExpiryDate,
	validateExpiryDate,
} from '@/utils/cardInputHandler'
import { hideCardNumber } from '@/utils/hideCardNumber'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const formSchema = z.object({
	number: z.string().length(19, {
		message: 'Неверный номер карты',
	}),
	date: z
		.string()
		.length(5, { message: 'Неверный формат даты' })
		.refine(value => validateExpiryDate(value), {
			message: 'Неверная дата истечения срока действия',
		}),
	cvv: z.string().length(3, {
		message: 'Неверные данные',
	}),
})

const UserCreditCard = () => {
	const [isMounted, setIsMounted] = useState(false)
	const [activeDialog, setActiveDialog] = useState<null | 'add' | number>(null)
	const prevDateValue = useRef('')
	const { addCard, removeCard } = useActions()
	const { cards } = useUserSummary()
	const cardToDelete = cards.find(card => card.id === activeDialog)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			number: '',
			date: '',
			cvv: '',
		},
		mode: 'onChange',
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		addCard({
			cardNumber: values.number,
			cardDate: values.date,
			cardCVV: values.cvv,
		})
		setActiveDialog(null)
		form.reset()
	}

	return (
		<div className='mt-15'>
			<p className='text-xl font-semibold'>Привязанные карты</p>
			{isMounted ? (
				<>
					{cards.length ? (
						<div className='space-y-4 mt-4'>
							{cards.map(card => (
								<div
									key={card.id}
									className='flex items-center justify-between bg-gray-50 p-4 rounded-lg w-[600px]'
								>
									<div className='flex items-center space-x-4'>
										<Image width={65} height={35} src='/mir-card.png' alt='mir-card-img' />
										<div>
											<p className='font-semibold'>{hideCardNumber(card.cardNumber)}</p>
											<p className='text-sm text-gray-500'>Срок: {card.cardDate}</p>
										</div>
									</div>
									<Button
										className='px-4 py-2 bg-[#f8d6c0] rounded-[20px] text-[#d4712c] hover:bg-[#ff6900] hover:text-white font-semibold text-sm'
										onClick={() => setActiveDialog(card.id)}
									>
										Удалить
									</Button>
								</div>
							))}
							<Button
								className='mt-5 px-4 py-2 bg-[#ff6900] hover:bg-[#db5e04] transf-none rounded-[20px] text-white font-semibold'
								onClick={() => setActiveDialog('add')}
							>
								Добавить карту
							</Button>
						</div>
					) : (
						<Button
							className='mt-5 px-4 py-2 bg-[#ff6900] hover:bg-[#db5e04] transf-none rounded-[20px] text-white font-semibold'
							onClick={() => setActiveDialog('add')}
						>
							Добавить карту
						</Button>
					)}
					<Dialog open={!!cardToDelete} onOpenChange={open => !open && setActiveDialog(null)}>
						<DialogContent className='w-[400px]'>
							<DialogHeader>
								<DialogTitle className='text-xl font-bold'>
									Удалить карту {cardToDelete?.cardNumber.slice(-4)}?
								</DialogTitle>
								<DialogDescription>Вы уверены в этом действии?</DialogDescription>
							</DialogHeader>
							<div className='flex space-x-2'>
								<Button
									onClick={() => {
										if (cardToDelete) {
											removeCard(cardToDelete.id)
											setActiveDialog(null)
										}
									}}
									className='flex-1 px-4 py-2 bg-[#f8d6c0] rounded-[20px] text-[#d4712c] hover:bg-[#ff6900] hover:text-white font-semibold text-sm'
								>
									Удалить
								</Button>
							</div>
						</DialogContent>
					</Dialog>
					<Dialog
						open={activeDialog === 'add'}
						onOpenChange={open => !open && setActiveDialog(null)}
					>
						<DialogContent className='w-[400px]'>
							<DialogHeader>
								<DialogTitle className='text-xl font-bold'>Добавление карты</DialogTitle>
								<DialogDescription>Введите данные карты</DialogDescription>
							</DialogHeader>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
									<FormField
										control={form.control}
										name='number'
										render={({ field }) => (
											<FormItem className='flex flex-col'>
												<div className='flex'>
													<FormControl className='max-w-[51%]'>
														<Input
															placeholder='0000 0000 0000 0000'
															maxLength={19}
															{...field}
															onChange={e => {
																const formatted = formatCardNumber(e.target.value)
																field.onChange(formatted)
															}}
														/>
													</FormControl>
													<FormLabel className='ml-4 min-w-[15%] font-semibold'>
														Номер карты
													</FormLabel>
												</div>
												<FormMessage className='flex items-center' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='date'
										render={({ field }) => (
											<FormItem className='flex flex-col'>
												<div className='flex'>
													<FormControl className='max-w-[22%]'>
														<Input
															placeholder='MM/YY'
															maxLength={5}
															{...field}
															onChange={e => {
																const formatted = formatExpiryDate(
																	e.target.value,
																	prevDateValue.current
																)
																prevDateValue.current = e.target.value
																field.onChange(formatted)
															}}
														/>
													</FormControl>
													<FormLabel className='ml-4 min-w-[15%] font-semibold'>Дата</FormLabel>
												</div>
												<FormMessage className='flex items-center' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='cvv'
										render={({ field }) => (
											<FormItem className='flex flex-col'>
												<div className='flex'>
													<FormControl className='max-w-[22%]'>
														<Input
															placeholder='999'
															maxLength={3}
															{...field}
															onChange={e => {
																const formatted = formatCVV(e.target.value)
																field.onChange(formatted)
															}}
														/>
													</FormControl>
													<FormLabel className='ml-4 min-w-[15%] font-semibold'>CVV</FormLabel>
												</div>
												<FormMessage className='flex items-center' />
											</FormItem>
										)}
									/>
									<Button
										type='submit'
										className='mt-3 px-4 py-2 bg-[#ff6900] rounded-[20px] text-white font-semibold'
									>
										Добавить
									</Button>
								</form>
							</Form>
						</DialogContent>
					</Dialog>
				</>
			) : (
				<div className='mt-4 text-gray-500'>Загрузка...</div>
			)}
		</div>
	)
}

export default UserCreditCard
