'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { QRCodeSVG } from 'qrcode.react'
import { handlePhoneInput, handlePhonePaste } from '@/utils/phoneInputHandler'
import { getAllTimeSlots, getDeliveryTime } from '@/utils/getDeliveryTime'
import { cn } from '@/utils/utils'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { handlePayment } from '@/lib/api'
import { useActions } from '@/hooks/useActions'
import { useCartSummary } from '@/hooks/useCartSummary'
import { OrderObserver } from '../OrderObserver'
import PaymentMethod from './PaymentMethod'
import PromoCode from './PromoCode'
import SelectTime from './SelectTime'
import { useUserSummary } from '@/hooks/useUserSummary'
import { useEffect, useState } from 'react'
import AddressDialog from './AddressDialog'
import { useRouter } from 'next/navigation'

export const formSchema = z.object({
	name: z
		.string()
		.min(3, {
			message: 'Имя должно содержать не менее 3 символов',
		})
		.max(20, {
			message: 'Имя не должно превышать 20 символов',
		}),
	phone: z
		.string()
		.length(12, {
			message: 'Номер телефона должен содержать ровно 12 символов',
		})
		.regex(/^\+7[0-9]{10}$/, {
			message: 'Номер телефона должен начинаться с +7 и содержать 10 цифр',
		}),
	address: z.string().min(1, {
		message: 'Выберите адрес пиццерии',
	}),
	time: z.enum(['Побыстрее', ...getAllTimeSlots()], {
		message: 'Выберите время самовывоза',
	}),
	deliveryMethod: z.enum(['delivery', 'pickUp'], {
		message: 'Выберите способ получения',
	}),
	paymentMethod: z.enum(['SberPay', 'СБП', 'Картой в пиццерии', 'Наличными', 'Картой на сайте']),
	selectedCardId: z.string().optional(),
})

const paymentData = {
	st: 'ST00012',
	name: 'ИП Иванов',
	personalAcc: '40802810901234567890',
	bankName: 'ПАО СБЕРБАНК',
	bic: '044525225',
	correspAcc: '30101810400000000225',
	sum: 1,
	purpose: `Оплата заказа №1`,
}

const OrderForm = () => {
	const [isMounted, setIsMounted] = useState(false)
	const { clearCart, updatePurchaseHistory } = useActions()
	const { priceWithDiscount } = useCartSummary()
	const { user } = useUserSummary()
	const router = useRouter()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			phone: '+7',
			address: '',
			time: 'Побыстрее',
			deliveryMethod: 'pickUp',
			paymentMethod: 'SberPay',
			selectedCardId: '',
		},
		mode: 'onChange',
	})

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		if (user && isMounted) {
			console.log('User loaded, updating form...')
			form.setValue('name', user.name || '')
			form.setValue('phone', user.phone || '+7')
		}
	}, [user, isMounted, form])

	const paymentMethod = form.watch('paymentMethod')
	const selectedCardId = form.watch('selectedCardId') // Сейчас не используется, но можно в теории передавать в систему оплаты для автоматической вставки
	const selectedTime = form.watch('time')
	const timeOptions = getDeliveryTime()
	const isCustomTimeSelected: boolean =
		!!selectedTime && selectedTime !== 'Побыстрее' && !timeOptions.includes(selectedTime)

	const handleTimeSelect = (time: string) => {
		console.log('Selected time from dialog:', time)
		form.setValue('time', time)
		form.trigger('time')
	}

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			if (values.paymentMethod === 'SberPay' || values.paymentMethod === 'Картой на сайте') {
				await handlePayment(values, priceWithDiscount)
			} else {
				alert(`Ожидаем вас по адресу ${values.address}`)
			}

			const token = localStorage.getItem('token')
			if (token) {
				updatePurchaseHistory({
					purchaseTime: values.time,
					purchasePrice: priceWithDiscount,
					purchasePaymentMethod: values.paymentMethod,
				})
			}
			router.push('/')
			clearCart()
			form.reset({
				name: user?.name || '',
				phone: user?.phone || '+7',
				address: '',
				time: 'Побыстрее',
				deliveryMethod: 'pickUp',
				paymentMethod: 'SberPay',
			})
		} catch (error) {
			console.error('Ошибка при оплате:', error)
		}
	}

	if (!isMounted) return <div>Загрузка...</div>

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 mt-15 pl-6 relative'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='flex'>
								<FormLabel className='min-w-[15%] font-semibold'>Имя</FormLabel>
								<FormControl className='max-w-[20%]'>
									<Input placeholder='Имя' {...field} />
								</FormControl>
								<FormMessage className='ml-4 flex items-center' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem className='flex'>
								<FormLabel className='min-w-[15%] font-semibold'>Номер телефона</FormLabel>
								<FormControl className='max-w-[20%]'>
									<Input
										type='tel'
										inputMode='numeric'
										placeholder='+79999999999'
										maxLength={12}
										onInput={e => handlePhoneInput(e, field)}
										onPaste={e => handlePhonePaste(e, field)}
										disabled={Boolean(user?.phone)}
										{...field}
									/>
								</FormControl>
								<FormMessage className='ml-4 flex items-center' />
							</FormItem>
						)}
					/>
					<AddressDialog form={form} />
					<FormField
						control={form.control}
						name='time'
						render={({ field }) => (
							<FormItem className='flex relative'>
								<FormLabel className='min-w-[15%]  font-semibold'>Время самовывоза</FormLabel>
								<FormControl className='max-w-[20%]'>
									<div className='flex gap-2'>
										{timeOptions.map(time => (
											<Button
												key={time}
												type='button'
												className={cn(
													'text-black rounded-[10px] hover:bg-gray-100 transform-none shadow-xl bg-gray-100 min-w-32 box-border transition-all duration-100 ease-out focus:border-2 focus:border-[#ff6900] font-semibold',
													selectedTime === time && 'border-2 border-[#ff6900]'
												)}
												onClick={() => field.onChange(time)}
											>
												{time}
											</Button>
										))}
										<SelectTime
											onSelect={handleTimeSelect}
											isSelected={isCustomTimeSelected}
											selectedTime={isCustomTimeSelected ? selectedTime : undefined}
										/>
									</div>
								</FormControl>
								<FormMessage className='absolute top-15 ml-50 flex items-center' />
							</FormItem>
						)}
					/>
					<PromoCode />
					<PaymentMethod form={form} paymentMethod={paymentMethod} />
					<div className='flex justify-between w-[60%] px-8'>
						<Button className='text-lg py-6 rounded-[25px] transf-none bg-[#c5c5d1] hover:bg-[#a5a5b3] text-black'>
							<Link href='/pizza' className='flex items-center justify-between space-x-10'>
								<ChevronLeft color='black' size={30} />
								<p className='mr-6'>Назад в корзину</p>
							</Link>
						</Button>
						{paymentMethod === 'SberPay' ? (
							<Button
								type='submit'
								className={cn(
									'text-lg px-15 py-6 rounded-[25px] transf-none bg-[#349946] hover:bg-[#42ae56]',
									!form.formState.isValid && 'opacity-50 cursor-not-allowed'
								)}
								disabled={!form.formState.isValid}
							>
								Оплатить через SberPay
							</Button>
						) : paymentMethod === 'Картой на сайте' ? (
							<Button
								type='submit'
								className={cn(
									'text-lg px-15 py-6 rounded-[25px] transf-none bg-[#f36b0a] hover:bg-[#d15b07]',
									!form.formState.isValid && 'opacity-50 cursor-not-allowed'
								)}
								disabled={!form.formState.isValid}
							>
								Оформить заказ на {priceWithDiscount} Руб.
							</Button>
						) : paymentMethod === 'Картой в пиццерии' ? (
							<Button
								type='submit'
								className={cn(
									'text-lg px-15 py-6 rounded-[25px] transf-none bg-[#f36b0a] hover:bg-[#d15b07]',
									!form.formState.isValid && 'opacity-50 cursor-not-allowed'
								)}
								disabled={!form.formState.isValid}
							>
								Оформить самовывоз
							</Button>
						) : paymentMethod === 'Наличными' ? (
							<Button
								type='submit'
								className={cn(
									'text-lg px-15 py-6 rounded-[25px] transf-none bg-[#f36b0a] hover:bg-[#d15b07]',
									!form.formState.isValid && 'opacity-50 cursor-not-allowed'
								)}
								disabled={!form.formState.isValid}
							>
								Оформить самовывоз
							</Button>
						) : (
							<Dialog>
								<DialogTrigger asChild>
									<Button
										type='button'
										className={cn(
											'text-lg px-15 py-6 rounded-[25px] transf-none bg-[#1c1241] hover:bg-[#3f3662]',
											!form.formState.isValid && 'opacity-50 cursor-not-allowed'
										)}
										disabled={!form.formState.isValid}
									>
										Оплатить <img src='/sbp.png' className='w-[30px] h-[30px]' /> сбп
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>QR код для оплаты</DialogTitle>
									</DialogHeader>
									<div className='flex flex-col items-center'>
										<QRCodeSVG value={JSON.stringify(paymentData)} size={256} />
										<p className='mt-4'>Сумма к оплате: {priceWithDiscount} руб.</p>
									</div>
								</DialogContent>
							</Dialog>
						)}
					</div>
				</form>
			</Form>
			<OrderObserver />
		</>
	)
}

export default OrderForm
