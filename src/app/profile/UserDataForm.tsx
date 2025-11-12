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
import { useUserSummary } from '@/hooks/useUserSummary'
import { formatDateToString } from '@/utils/formatDateToString'
import { formatStringToDate } from '@/utils/formatStringToDate'
import { handlePhoneInput, handlePhonePaste } from '@/utils/phoneInputHandler'
import { cn } from '@/utils/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit, X } from 'lucide-react'
import { useEffect, useState } from 'react'
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
	const [isMounted, setIsMounted] = useState(false)
	const [isDataSaved, setIsDataSaved] = useState(false)
	const [editableFields, setEditableFields] = useState<Set<string>>(new Set())
	const { user } = useUserSummary()
	const { updateUserData } = useActions()

	useEffect(() => {
		setIsMounted(true)
	}, [])

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

	useEffect(() => {
		if (user) {
			form.reset({
				name: user.name || '',
				phone: user.phone || '+7',
				birthday: user.birthday ? formatStringToDate(user.birthday) : undefined,
				email: user.email || '',
				adv: user.adv || false,
			})
		}
	}, [user, form])

	const isFieldEditable = (fieldName: string) => editableFields.has(fieldName)
	const hasUserData = Boolean(user && (user.name || user.phone || user.email))

	const toggleFieldEdit = (fieldName: string) => {
		setEditableFields(prev => {
			const newSet = new Set(prev)
			if (newSet.has(fieldName)) {
				newSet.delete(fieldName)
				if (user) {
					switch (fieldName) {
						case 'name':
							form.setValue('name', user.name || '')
							break
						case 'phone':
							form.setValue('phone', user.phone || '+7')
							break
						case 'birthday':
							form.setValue(
								'birthday',
								user.birthday ? formatStringToDate(user.birthday) : (null as any)
							)
							break
						case 'email':
							form.setValue('email', user.email || '')
							break
						case 'adv':
							form.setValue('adv', user.adv || false)
							break
					}
				}
			} else {
				newSet.add(fieldName)
			}
			return newSet
		})
	}

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		const date = formatDateToString(values.birthday)
		updateUserData({
			name: values.name,
			phone: values.phone,
			birthday: date,
			email: values.email,
			adv: values.adv,
			dodoCoins: 0,
		})
		setIsDataSaved(true)
		setEditableFields(new Set())
		setTimeout(() => setIsDataSaved(false), 3000)
	}

	const hasChanges = form.formState.isDirty

	const getFieldState = (fieldName: string) => {
		if (!isMounted) {
			return { disabled: false, readOnly: false }
		}
		return {
			disabled: hasUserData && !isFieldEditable(fieldName),
			readOnly: hasUserData && !isFieldEditable(fieldName),
		}
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
							render={({ field }) => {
								const { disabled, readOnly } = getFieldState('name')
								return (
									<FormItem>
										<FormLabel>Имя</FormLabel>
										<FormControl className='max-w-[24%]'>
											<div className='relative'>
												<Input
													placeholder='Имя'
													{...field}
													className='bg-[#f2f3f7] pr-10'
													disabled={disabled}
													readOnly={readOnly}
												/>
												{isMounted && hasUserData && (
													<Button
														type='button'
														variant='ghost'
														size='sm'
														onClick={() => toggleFieldEdit('name')}
														className='absolute right-8 top-1/2 transform -translate-y-1/2 p-1 h-6 w-6'
													>
														{isFieldEditable('name') ? (
															<span className='font-semibold bg-gray-400 rounded-[6px] p-1 text-xs'>
																Отменить
															</span>
														) : (
															<span className='text-[#ff6900] hover:text-[#d15700] font-semibold text-xs'>
																Изменить
															</span>
														)}
													</Button>
												)}
											</div>
										</FormControl>
										<FormMessage className='flex items-center' />
									</FormItem>
								)
							}}
						/>
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => {
								const { disabled, readOnly } = getFieldState('phone')
								return (
									<FormItem>
										<FormLabel>Номер телефона</FormLabel>
										<FormControl className='max-w-[24%]'>
											<div className='relative'>
												<Input
													type='tel'
													inputMode='numeric'
													placeholder='+79999999999'
													maxLength={12}
													onInput={e => handlePhoneInput(e, field)}
													onPaste={e => handlePhonePaste(e, field)}
													className='bg-[#f2f3f7] pr-10'
													disabled={disabled}
													readOnly={readOnly}
													{...field}
												/>
											</div>
										</FormControl>
										<FormMessage className='flex items-center' />
									</FormItem>
								)
							}}
						/>
						<FormField
							control={form.control}
							name='birthday'
							render={({ field }) => {
								const { disabled } = getFieldState('birthday')
								return (
									<FormItem>
										<FormLabel>День рождения</FormLabel>
										<FormControl className='max-w-[24%]'>
											<div className='relative'>
												<BirthdayCalendarInput
													value={field.value}
													onChange={field.onChange}
													placeholder='дд.мм.гггг'
													disabled={disabled}
													showIcon={false}
												/>
											</div>
										</FormControl>
										<FormMessage className='flex items-center' />
									</FormItem>
								)
							}}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => {
								const { disabled, readOnly } = getFieldState('email')
								return (
									<FormItem>
										<FormLabel>Почта</FormLabel>
										<FormControl className='max-w-[24%]'>
											<div className='relative'>
												<Input
													placeholder='example@gmail.com'
													{...field}
													className='bg-[#f2f3f7] pr-10'
													disabled={disabled}
													readOnly={readOnly}
												/>
												{isMounted && hasUserData && (
													<Button
														type='button'
														variant='ghost'
														size='sm'
														onClick={() => toggleFieldEdit('email')}
														className='absolute right-8 top-1/2 transform -translate-y-1/2 p-1 h-6 w-6'
													>
														{isFieldEditable('email') ? (
															<span className='font-semibold bg-gray-400 rounded-[6px] p-1 text-xs'>
																Отменить
															</span>
														) : (
															<span className='text-[#ff6900] hover:text-[#d15700] font-semibold text-xs'>
																Изменить
															</span>
														)}
													</Button>
												)}
											</div>
										</FormControl>
										<FormMessage className='flex items-center' />
									</FormItem>
								)
							}}
						/>
						<FormField
							control={form.control}
							name='adv'
							render={({ field }) => {
								const { disabled } = getFieldState('adv')
								return (
									<FormItem>
										<div className='flex items-center gap-4'>
											<FormLabel className='text-xl font-semibold'>Подписки</FormLabel>
											{isMounted && hasUserData && (
												<Button
													type='button'
													variant='ghost'
													size='sm'
													onClick={() => toggleFieldEdit('adv')}
													className='p-1 h-6'
												>
													{isFieldEditable('adv') ? (
														<X size={16} className='text-red-500' />
													) : (
														<Edit size={16} className='mt-1' />
													)}
												</Button>
											)}
										</div>
										<FormControl>
											<div className='flex items-center'>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
													disabled={disabled}
													className='border border-gray-500'
												/>
												<p className='ml-2 text-sm font-semibold text-gray-700'>
													Получать рекламные предложения в пушах, СМС, и письмах на почту
												</p>
											</div>
										</FormControl>
									</FormItem>
								)
							}}
						/>
						<Button
							type='submit'
							className={cn(
								'px-4 py-2 rounded-[25px] transf-none bg-[#f36b0a] hover:bg-[#d15b07] mb-0',
								(!form.formState.isValid || !hasChanges) && 'opacity-50 cursor-not-allowed'
							)}
							disabled={!form.formState.isValid || !hasChanges}
						>
							Сохранить изменения
						</Button>
						{isDataSaved && (
							<p className='mt-3 font-semibold text-green-600'>Данные успешно сохранены</p>
						)}
					</form>
				</Form>
			</div>
		</>
	)
}

export default UserDataForm
