'use client'

import BirthdayCalendarInput from '@/components/BirthdayCalendarInput'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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
import { formatDateToString } from '@/utils/formatDateToString'
import { handlePhoneInput, handlePhonePaste } from '@/utils/phoneInputHandler'
import { cn } from '@/utils/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

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
	/* birthday: z
		.union([
			z
				.date()
				.min(new Date(1900, 0, 1), {
					message: 'Дата рождения не может быть раньше 1900 года',
				})
				.max(new Date(2015, 11, 31), {
					message: 'Пользователь должен быть старше 10 лет',
				}),
			z.undefined(),
		]) */
	birthday: z
		.date()
		.min(new Date(1900, 0, 1), {
			message: 'Дата рождения не может быть раньше 1900 года',
		})
		.max(new Date(2015, 11, 31), {
			message: 'Пользователь должен быть старше 10 лет',
		}),
	email: z
		.string()
		.min(5, {
			message: 'Почта должна содержать минимум 5 символов',
		})
		.email({
			message: 'Введите корректный email адрес',
		})
		.refine(email => email.endsWith('.com') || email.endsWith('.ru') || email.endsWith('.net'), {
			message: 'Email должен содержать допустимый домен (.com, .ru, .net)',
		})
		.refine(email => !email.toLowerCase().startsWith('example@'), {
			message: 'Использование example@mail... запрещено',
		}),
	adv: z.boolean(),
})

const UserDataForm = () => {
	const { updateUserData } = useActions()
	const [isDataSaved, setIsDataSaved] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			phone: '+7',
			birthday: undefined,
			email: '',
			adv: false,
		},
		mode: 'onChange',
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		const date = formatDateToString(values.birthday)
		updateUserData({
			name: values.name,
			phone: values.phone,
			birthday: date,
			email: values.email,
			adv: values.adv,
		})
		setIsDataSaved(true)
	}

	return (
		<>
			<div className='pt-10'>
				<p className='text-2xl font-semibold'>Личные данные</p>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 mt-15'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Имя</FormLabel>
									<FormControl className='max-w-[20%]'>
										<Input placeholder='Имя' {...field} className='bg-[#f2f3f7]' />
									</FormControl>
									<FormMessage className='flex items-center' />
								</FormItem>
							)}
						></FormField>
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Номер телефона</FormLabel>
									<FormControl className='max-w-[20%]'>
										<Input
											type='tel'
											inputMode='numeric'
											placeholder='+79999999999'
											maxLength={12}
											onInput={e => handlePhoneInput(e, field)}
											onPaste={e => handlePhonePaste(e, field)}
											className='bg-[#f2f3f7]'
											{...field}
										/>
									</FormControl>
									<FormMessage className='flex items-center' />
								</FormItem>
							)}
						></FormField>
						<FormField
							control={form.control}
							name='birthday'
							render={({ field }) => (
								<FormItem>
									<FormLabel>День рождения</FormLabel>
									<FormControl className='max-w-[20%]'>
										<BirthdayCalendarInput
											value={field.value}
											onChange={field.onChange}
											placeholder='дд.мм.гггг'
										/>
									</FormControl>
									<FormMessage className='flex items-center' />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Почта</FormLabel>
									<FormControl className='max-w-[20%]'>
										<Input placeholder='example@gmail.com' {...field} className='bg-[#f2f3f7]' />
									</FormControl>
									<FormMessage className='flex items-center' />
								</FormItem>
							)}
						></FormField>
						<FormField
							control={form.control}
							name='adv'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-xl font-semibold'>Подписки</FormLabel>
									<FormControl>
										<div className='flex items-center'>
											<Checkbox checked={field.value} onCheckedChange={field.onChange} />
											<p className='ml-2 text-sm font-semibold text-gray-700'>
												Получать рекламные предложения в пушах, СМС, и письмах на почту
											</p>
										</div>
									</FormControl>
								</FormItem>
							)}
						></FormField>
						<Button
							type='submit'
							className={cn(
								'px-4 py-2 rounded-[25px] transf-none bg-[#f36b0a] hover:bg-[#d15b07] mb-0',
								!form.formState.isValid && 'opacity-50 cursor-not-allowed'
							)}
							disabled={!form.formState.isValid}
						>
							Сохранить данные
						</Button>
						{isDataSaved && (
							<p className='mt-3 text-lg font-semibold text-green-600'>Данные успешно сохранены</p>
						)}
					</form>
				</Form>
			</div>
		</>
	)
}

export default UserDataForm
