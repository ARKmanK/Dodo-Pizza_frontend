import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { getDeliveryTime } from '@/utils/getDeliveryTime'
import { useState } from 'react'

const SelectTime = ({ onSelect }: { onSelect: (time: string) => void }) => {
	const [isOpen, setIsOpen] = useState(false)
	const timeSlots = getDeliveryTime()

	const handleClick = (time: string) => {
		onSelect(time)
		setIsOpen(false)
	}

	return (
		<>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogTrigger className='text-black bg-gray-100 rounded-[10px] hover:bg-inherit transform-none shadow-xl min-w-32 box-border transition-all duration-100 ease-out font-semibold text-sm'>
					Другое время
				</DialogTrigger>
				<DialogContent className='overflow-y-auto max-h-[600px]'>
					<DialogHeader>
						<DialogTitle>Время самовывоза</DialogTitle>
					</DialogHeader>
					<div className='min-h-[100px] grid grid-cols-2 gap-4 p-4'>
						{timeSlots.map(time => (
							<Button
								key={time}
								className='bg-gray-100 text-black hover:bg-gray-100 focus:border-2 focus:border-[#ff6900] font-semibold'
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
