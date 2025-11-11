'use client'

import z from 'zod'
import { formSchema } from './OrderForm'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { CreditCard } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { useUserSummary } from '@/hooks/useUserSummary'
import { useEffect, useState } from 'react'

interface IPaymentMethodProps {
	form: UseFormReturn<z.infer<typeof formSchema>>
	paymentMethod: string
}

const PaymentMethod = ({ form, paymentMethod }: IPaymentMethodProps) => {
	const [isLogged, setIsLogged] = useState(false)
	const { cards } = useUserSummary()

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) setIsLogged(true)
	}, [])

	return (
		<FormField
			control={form.control}
			name='paymentMethod'
			render={({ field }) => (
				<FormItem className='flex relative'>
					<FormControl>
						<section className='p-6 bg-[#f3f3f7] min-h-[300px] w-[60%] rounded-[20px] mt-15'>
							<p className='font-bold text-2xl'>Способы оплаты</p>
							<RadioGroup onValueChange={field.onChange} value={field.value} className='mt-8'>
								<div className='flex items-center gap-3'>
									<RadioGroupItem
										value='SberPay'
										id='r1'
										className='border-gray-300 bg-white data-[state=checked]:border-[#ff6900] data-[state=checked]:border-4 data-[state=checked]:bg-white'
									/>
									<Label htmlFor='r1' className='text-lg'>
										<img src='/sberPay.png' className='w-[50px] h-[28px]' />
										SberPay
									</Label>
								</div>
								<div className='flex items-center gap-3'>
									<RadioGroupItem
										value='Картой на сайте'
										id='r2'
										className='border-gray-300 bg-white data-[state=checked]:border-[#ff6900] data-[state=checked]:border-4 data-[state=checked]:bg-white'
									/>
									<Label htmlFor='r2' className='text-lg'>
										<CreditCard />
										Картой на сайте
									</Label>
								</div>
								<div className='flex items-center gap-3'>
									<RadioGroupItem
										value='Картой в пиццерии'
										id='r3'
										className='border-gray-300 bg-white data-[state=checked]:border-[#ff6900] data-[state=checked]:border-4 data-[state=checked]:bg-white'
									/>
									<Label htmlFor='r3' className='text-lg'>
										Картой в пиццерии
									</Label>
								</div>
								<div className='flex items-center gap-3'>
									<RadioGroupItem
										value='Наличными'
										id='r4'
										className='border-gray-300 bg-white data-[state=checked]:border-[#ff6900] data-[state=checked]:border-4 data-[state=checked]:bg-white'
									/>
									<Label htmlFor='r4' className='text-lg'>
										Наличными
									</Label>
								</div>
								<div className='flex items-center gap-3'>
									<RadioGroupItem
										value='СБП'
										id='r5'
										className='border-gray-300 bg-white data-[state=checked]:border-[#ff6900] data-[state=checked]:border-4 data-[state=checked]:bg-white'
									/>
									<Label htmlFor='r5' className='text-lg'>
										<img src='/sbp.png' className='w-[28px] h-[28px]' />
										Через СБП
									</Label>
								</div>
							</RadioGroup>
							{(paymentMethod === 'SberPay' || paymentMethod === 'Картой на сайте') && (
								<FormField
									control={form.control}
									name='selectedCardId'
									render={({ field }) => (
										<div className='mt-6 p-4 border border-gray-300 rounded-lg bg-white'>
											<FormItem>
												<FormLabel className='font-semibold'>Выберите карту</FormLabel>
												<FormControl>
													<RadioGroup
														onValueChange={field.onChange}
														value={field.value}
														className='mt-2 space-y-2'
													>
														{cards.length > 0 ? (
															cards.map(card => (
																<div key={card.id} className='flex items-center space-x-3'>
																	<RadioGroupItem
																		value={card.id.toString()}
																		id={`card-${card.id}`}
																		className='border-gray-400'
																	/>
																	<Label
																		htmlFor={`card-${card.id}`}
																		className='flex items-center space-x-2 cursor-pointer'
																	>
																		<CreditCard size={20} />
																		<span className='font-medium'>
																			**** {card.cardNumber.slice(-4)}
																		</span>
																		<span className='text-sm text-gray-500'>
																			(до {card.cardDate})
																		</span>
																	</Label>
																</div>
															))
														) : isLogged ? (
															<div className='text-gray-500'>
																Нет привязанных карт. Добавьте карту в профиле.
															</div>
														) : (
															<div className='text-gray-500'> Войдите в профиль</div>
														)}
													</RadioGroup>
												</FormControl>
												<FormMessage />
											</FormItem>
										</div>
									)}
								/>
							)}
						</section>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

export default PaymentMethod
