import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { getAllTimeSlots } from '@/utils/getDeliveryTime'
import { cn } from '@/utils/utils'
import { useState } from 'react'

interface ISelectTimeProps {
	onSelect: (time: string) => void
	isSelected?: boolean
	selectedTime?: string
}

const SelectTime = ({ onSelect, isSelected = false, selectedTime }: ISelectTimeProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const timeSlots = getAllTimeSlots()
	const buttonText = isSelected && selectedTime ? selectedTime : 'Другое время'

	const handleClick = (time: string) => {
		onSelect(time)
		setIsOpen(false)
	}

	return (
		<>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogTrigger asChild>
					<Button
						type='button'
						className={cn(
							'text-black bg-gray-100 rounded-[10px] hover:bg-gray-200 transform-none shadow-xl min-w-32 box-border transition-all duration-100 ease-out font-semibold text-sm',
							isSelected && 'border-2 border-[#ff6900]'
						)}
					>
						{buttonText}
					</Button>
				</DialogTrigger>
				<DialogContent className='overflow-y-auto max-h-[600px]'>
					<DialogHeader>
						<DialogTitle>Время самовывоза</DialogTitle>
					</DialogHeader>
					<div className='min-h-[100px] grid grid-cols-2 gap-4 p-4'>
						{timeSlots.map(time => (
							<Button
								key={time}
								type='button'
								className={cn(
									'bg-gray-100 text-black hover:bg-gray-200 focus:border-2 focus:border-[#ff6900] font-semibold',
									selectedTime === time && 'border-2 border-[#ff6900]'
								)}
								onClick={() => handleClick(time)}
							>
								{time}
							</Button>
						))}
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default SelectTime
