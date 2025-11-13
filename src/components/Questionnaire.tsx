import { HatGlasses } from 'lucide-react'
import { Button } from './ui/button'

const Questionnaire = () => {
	return (
		<>
			<div className='w-full h-[60px] bg-[#ff6900] z-10 flex justify-center'>
				<div className='w-[70%] flex items-center justify-between'>
					<div className=' flex items-center'>
						<HatGlasses size={45} color='#ffffff' className='mr-5' />
						<p className='text-[18px] flex text-white'>
							Проверьте нашу кухню и получите додокоины — хватит на две пиццы
						</p>
					</div>
					<Button className='text-[16px] text-[#d15700] bg-[#fff0e6] rounded-[20px]'>
						Заполнить анкету
					</Button>
				</div>
			</div>
		</>
	)
}

export default Questionnaire
