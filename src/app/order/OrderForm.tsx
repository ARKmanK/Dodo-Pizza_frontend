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

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import SelectTime from './SelectTime'
import { handlePhoneInput, handlePhonePaste } from '@/utils/phoneInputHandler'
import { getDeliveryTime } from '@/utils/getDeliveryTime'
import OrderBox from './OrderBox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { cn } from '@/utils/utils'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import PromoCode from './PromoCode'
import { handlePayment } from '@/lib/api'
import { useActions } from '@/hooks/useActions'
import { useCartSummary } from '@/hooks/useCartSummary'

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
	address: z
		.enum(['ул. Ленина, 10', 'ул. Мира, 5', 'ул. Победы, 15'])
		.refine(val => val !== undefined, {
			message: 'Выберите адрес пиццерии',
		}),
	time: z.enum(['Побыстрее', ...getDeliveryTime()]).refine(val => val !== undefined, {
		message: 'Выберите время самовывоза',
	}),
	paymentMethod: z.enum(['SberPay', 'SFT']),
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
	const { clearCart } = useActions()
	const { cart, price, discountCode, discount, priceWithDiscount, quantity } = useCartSummary()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			phone: '+7',
			address: 'ул. Ленина, 10',
			time: 'Побыстрее',
			paymentMethod: 'SberPay',
		},
		mode: 'onChange',
	})

	const paymentMethod = form.watch('paymentMethod')
	const timeSlots = getDeliveryTime()
	const timeOptions = ['Побыстрее', timeSlots[0] || '', timeSlots[1] || '']

	const handleTimeSelect = (time: string) => {
		form.setValue('time', time)
	}

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		if (values.paymentMethod === 'SberPay') {
			handlePayment(values, priceWithDiscount, clearCart)
		}
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 mt-15 pl-6 relative'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='flex'>
								<FormLabel className='min-w-[15%]'>Имя</FormLabel>
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
								<FormLabel className='min-w-[15%]'>Номер телефона</FormLabel>
								<FormControl className='max-w-[20%]'>
									<Input
										type='tel'
										inputMode='numeric'
										placeholder='+79999999999'
										maxLength={12}
										onInput={e => handlePhoneInput(e, field)}
										onPaste={e => handlePhonePaste(e, field)}
										{...field}
									/>
								</FormControl>
								<FormMessage className='ml-4 flex items-center' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='address'
						render={({ field }) => (
							<FormItem className='flex'>
								<FormLabel className='min-w-[15%]'>Адрес пиццерии</FormLabel>
								<FormControl className='max-w-[20%]'>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button className='transf-none text-[#ff6900] p-0 hover:bg-inherit shadow-xl px-2 py-1 bg-gray-100'>
												Выбрать
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent className='w-56 ml-40'>
											<DropdownMenuLabel>Выберите пиццерию</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuRadioGroup value={field.value} onValueChange={field.onChange}>
												<DropdownMenuRadioItem value='ул. Ленина, 10'>
													ул. Ленина, 10
												</DropdownMenuRadioItem>
												<DropdownMenuRadioItem value='ул. Мира, 5'>
													ул. Мира, 5
												</DropdownMenuRadioItem>
												<DropdownMenuRadioItem value='ул. Победы, 15'>
													ул. Победы, 15
												</DropdownMenuRadioItem>
											</DropdownMenuRadioGroup>
										</DropdownMenuContent>
									</DropdownMenu>
								</FormControl>
								<FormMessage className='ml-4 flex items-center' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='time'
						render={({ field }) => (
							<FormItem className='flex relative'>
								<FormLabel className='min-w-[15%]'>Время самовывоза</FormLabel>
								<FormControl className='max-w-[20%]'>
									<div className='flex gap-2'>
										{timeOptions.map(time => (
											<Button
												key={time}
												type='button'
												className='text-black rounded-[10px] hover:bg-inherit transform-none shadow-xl bg-gray-100 min-w-32 box-border transition-all duration-100 ease-out focus:border-2 focus:border-[#ff6900]'
												onClick={() => field.onChange(time)}
											>
												{time}
											</Button>
										))}
										<SelectTime onSelect={handleTimeSelect} />
									</div>
								</FormControl>
								<FormMessage className='absolute top-15 ml-50 flex items-center' />
							</FormItem>
						)}
					/>
					<PromoCode />
					<FormField
						control={form.control}
						name='paymentMethod'
						render={({ field }) => (
							<FormItem className='flex relative'>
								<FormControl>
									<section className='p-6 bg-[#f3f3f7] min-h-[300px] w-[60%] rounded-[20px] mt-25'>
										<p className='font-bold text-2xl'>Способы оплаты</p>
										<RadioGroup onValueChange={field.onChange} value={field.value} className='mt-8'>
											<div className='flex items-center gap-3'>
												<RadioGroupItem value='SberPay' id='r1' className='border-black' />
												<Label htmlFor='r1' className='text-lg'>
													SberPay
												</Label>
											</div>
											<div className='flex items-center gap-3'>
												<RadioGroupItem value='SFT' id='r2' className='border-black' />
												<Label htmlFor='r2' className='text-lg'>
													Система быстрых переводов
												</Label>
											</div>
										</RadioGroup>
									</section>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='flex justify-between w-[60%]'>
						<Button className='text-lg py-6 rounded-[25px] transf-none'>
							<Link href='/pizza' className='flex items-center'>
								<ArrowLeft size={30} /> Назад в корзину
							</Link>
						</Button>

						{paymentMethod === 'SberPay' ? (
							<Button
								type='submit'
								className={cn(
									'text-lg px-15 py-6 rounded-[25px] transf-none bg-amber-400',
									!form.formState.isValid && 'opacity-50 cursor-not-allowed'
								)}
								disabled={!form.formState.isValid}
							>
								Оплатить через SberPay
							</Button>
						) : (
							<Dialog>
								<DialogTrigger asChild>
									<Button
										type='button'
										className={cn(
											'text-lg px-15 py-6 rounded-[25px] transf-none bg-green-400',
											!form.formState.isValid && 'opacity-50 cursor-not-allowed'
										)}
										disabled={!form.formState.isValid}
									>
										Оплатить сбп
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>QR код для оплаты</DialogTitle>
									</DialogHeader>
									<div className='flex flex-col items-center'>
										<QRCodeSVG value={JSON.stringify(paymentData)} size={256} />
										<p className='mt-4'>Сумма к оплате: {priceWithDiscount.toFixed(2)} руб.</p>
									</div>
								</DialogContent>
							</Dialog>
						)}
					</div>
				</form>
			</Form>
			<OrderBox />
		</>
	)
}

export default OrderForm
