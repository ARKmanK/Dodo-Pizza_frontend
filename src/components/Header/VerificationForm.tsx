'use client'

import { ArrowLeft } from 'lucide-react'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'
import { useState } from 'react'
import { Button } from '../ui/button'
import { IVerifyOTPResponse, verifyOTP } from '@/lib/mocks'
import { useMutation } from '@tanstack/react-query'
import { useCountdown } from '@/hooks/useCountDown'
import Cookies from 'js-cookie'

interface IVerificationFormProps {
	onClose: () => void
}

const VerificationForm = ({ onClose }: IVerificationFormProps) => {
	const [value, setValue] = useState('')
	const [apiError, setApiError] = useState<string | null>(null)
	const [isSuccess, setIsSuccess] = useState(false)
	const { timeLeft, isExpired, resetTimer } = useCountdown(30)

	const { mutate } = useMutation<IVerifyOTPResponse, Error, string>({
		mutationFn: otp => verifyOTP(otp),
		onSuccess: data => {
			if (data.success) {
				setIsSuccess(true)
				console.log('Успешная проверка OTP! Токен:', data.token)
				if (data.token) {
					localStorage.setItem('token', data.token)
					Cookies.set('token', data.token, { expires: 1 })
				}
			} else {
				setApiError(data.error || 'Произошла ошибка при проверке OTP.')
				resetTimer()
			}
		},
		onError: (err: Error) => {
			setApiError(err.message)
			resetTimer()
		},
	})

	const handleChange = (val: string) => {
		setValue(val)
		setApiError(null)
		if (val.length === 4) {
			mutate(val)
		}
	}

	const handleGetNewCode = () => {
		setValue('')
		setApiError(null)
		resetTimer()
	}

	const handleContinue = () => {
		window.location.reload()
	}

	return (
		<>
			<DialogHeader>
				<DialogTitle className='text-[22px] font-bold text-center'>Введите код</DialogTitle>
			</DialogHeader>
			<button
				className='absolute left-4 top-4 p-1 text-gray-500 hover:text-gray-700'
				onClick={onClose}
				aria-label='Назад'
			>
				<ArrowLeft />
			</button>
			<div className='text-center mb-4'>
				<p className='text-sm text-gray-600'>
					из <span className='text-[#4a93b8] font-semibold'>Telegram</span> или СМС
				</p>
				<div className='flex justify-center gap-1 mt-1'>
					<span className='text-sm text-gray-600'>на номер +7 950 148 01 07</span>
					<button onClick={onClose} className='text-[#ff7515] text-sm ml-2 font-semibold'>
						Изменить
					</button>
				</div>
			</div>
			<div className='space-y-4 flex flex-col items-center px-6'>
				<InputOTP maxLength={4} value={value} onChange={handleChange}>
					{[0, 1, 2, 3].map(index => (
						<InputOTPGroup key={index}>
							<InputOTPSlot
								index={index}
								className={`border-2 h-12 w-12 rounded-md ${
									apiError ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
						</InputOTPGroup>
					))}
				</InputOTP>
				{apiError && (
					<div className='p-3 bg-red-100 text-red-600 rounded-md text-center w-full'>
						{apiError}
					</div>
				)}
			</div>

			<div className='flex flex-col items-center gap-4 w-full'>
				{isSuccess ? (
					<div className='flex justify-center w-full'>
						<Button
							onClick={handleContinue}
							className='w-[85%] bg-[#ff7515] text-white rounded-[18px] h-11 hover:bg-[#e56713]'
						>
							Продолжить
						</Button>
					</div>
				) : (
					<div className='flex flex-col items-center w-full'>
						<div className='h-[40px]'>
							{!isExpired && timeLeft > 0 && (
								<p className='text-sm text-center w-full mt-3 mb-2 font-semibold'>
									Получить новый код через {timeLeft} сек.
								</p>
							)}
						</div>
						<Button
							onClick={handleGetNewCode}
							disabled={!isExpired}
							variant='outline'
							className='w-[85%] rounded-[18px] h-11 bg-[#e56713] hover:bg-[#d15b07] text-white border-none disabled:bg-[#e56713]disabled:cursor-not-allowed '
						>
							Получить новый код
						</Button>
						<div className='w-full mt-6 text-center'>
							<p className='text-[13px] text-gray-600'>
								Продолжая, вы соглашаетесь с условиями наших
							</p>
							<span className='text-[#ff7515] text-[12px]'>юридических документов</span>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default VerificationForm
