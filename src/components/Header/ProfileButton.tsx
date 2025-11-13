'use client'

import { ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { handlePhoneInput, handlePhonePaste } from '@/utils/phoneInputHandler'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import VerificationForm from './VerificationForm'
import { ILoginResponse, loginUser } from '@/lib/mocks'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'

const formSchema = z.object({
	phone: z.string().length(12, {
		message: 'Phone number must have 11 digits',
	}),
})

const ProfileButton = () => {
	const [isLogged, setIsLogged] = useState(false)
	const [apiError, setApiError] = useState<string | null>(null)
	const [showOTPForm, setShowOTPForm] = useState(false)
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phone: '+7',
		},
		mode: 'onChange',
	})

	const { mutate, isPending } = useMutation<ILoginResponse, Error, z.infer<typeof formSchema>>({
		mutationFn: ({ phone }) => loginUser(phone),
		onSuccess: data => {
			if (data.success) {
				if (data.requiresOTP) {
					setShowOTPForm(true)
				} else {
					console.log('Успешная авторизация!')
					setIsDialogOpen(false)
				}
				setApiError(null)
			} else {
				setApiError(data.error || 'Произошла ошибка при авторизации.')
			}
		},
		onError: (err: Error) => {
			setApiError(err.message)
		},
	})

	useEffect(() => {
		const token = Cookies.get('token')
		if (token) setIsLogged(true)
	}, [])

	const handleDialogOpenChange = (open: boolean) => {
		setIsDialogOpen(open)
		if (!open) {
			setShowOTPForm(false)
			setApiError(null)
			form.reset()
		}
	}

	const handleCloseOTP = () => {
		setShowOTPForm(false)
		setApiError(null)
	}

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		mutate(values)
	}

	return (
		<>
			{isLogged ? (
				<>
					<Link href='/profile' className='flex flex-col items-center hover:text-[#ff7515] group'>
						<ShoppingBag
							strokeWidth={2}
							className='group-hover:-translate-y-1.5 transition-transform duration-300'
						/>
						<p className='text-sm font-semibold'>Мои акции</p>
					</Link>
					<Link href='/profile' className='flex flex-col items-center hover:text-[#ff7515] group'>
						<User
							strokeWidth={2}
							className='group-hover:-translate-y-1.5 transition-transform duration-300'
						/>
						<p className='text-sm font-semibold'>Профиль</p>
					</Link>
				</>
			) : (
				<Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
					<DialogTrigger asChild>
						<Button
							variant='outline'
							className='bg-[#efeff4] hover:bg-[#e2e2e9] rounded-[15px] font-semibold transf-none'
						>
							Войти
						</Button>
					</DialogTrigger>
					<DialogContent
						onOpenAutoFocus={e => {
							e.preventDefault()
						}}
						className='w-[425px] rounded-[25px]'
					>
						{!showOTPForm ? (
							<>
								<DialogHeader className='items-center'>
									<DialogTitle className='text-[22px] font-bold'>Укажите телефон</DialogTitle>
									<DialogDescription className='text-sm text-[#707070]'>
										Чтобы войти в профиль
									</DialogDescription>
								</DialogHeader>

								<Form {...form}>
									<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 mt-4'>
										<FormField
											control={form.control}
											name='phone'
											render={({ field }) => (
												<FormItem>
													<Label htmlFor='phone' className='text-[#535353] font-semibold'>
														Номер телефона
													</Label>
													<FormControl>
														<Input
															type='tel'
															inputMode='numeric'
															maxLength={12}
															/* placeholder='+7' */
															onInput={e => handlePhoneInput(e, field)}
															onPaste={e => handlePhonePaste(e, field)}
															className='border border-[#ff7515] rounded-[14px] h-11 focus:border-0'
															{...field}
														/>
													</FormControl>
													<FormMessage className='text-red-500 text-sm' />
												</FormItem>
											)}
										/>
										{apiError && (
											<div className='p-3 bg-red-100 text-red-600 rounded-md text-center'>
												{apiError}
											</div>
										)}
										<Button
											type='submit'
											variant='destructive'
											className='w-full bg-[#ff7515] font-semibold rounded-[18px] h-11 hover:bg-[#e56713] transf-none'
											disabled={!form.formState.isValid || isPending}
										>
											{isPending ? 'Отправка...' : 'Выслать код'}
										</Button>
									</form>
								</Form>
								<DialogFooter className='mt-6'>
									<div className='w-full flex flex-col justify-center items-center text-center'>
										<p className='text-[13px] text-gray-600'>
											Продолжая, вы соглашаетесь с условиями наших{' '}
											<a href='#' className='text-[#ff7515] text-[12px]'>
												юридических документов
											</a>
										</p>
									</div>
								</DialogFooter>
							</>
						) : (
							<VerificationForm onClose={handleCloseOTP} />
						)}
					</DialogContent>
				</Dialog>
			)}
		</>
	)
}

export default ProfileButton
