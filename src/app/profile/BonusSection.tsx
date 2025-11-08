import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

const BonusSection = () => {
	return (
		<>
			<section className='w-full flex justify-center bg-[#f3f3f7] pl-6'>
				<div className='md:w-[90%] lg:w-[80%] xl:w-[73%] py-2'>
					<p className='text-lg font-semibold py-4'>Бонусы</p>
					<Card className='w-[230px] h-[280px] flex flex-col shadow-lg'>
						<CardHeader className='flex justify-center'>
							<Image width={150} height={150} src='/bonus.jpg' alt='bonus-img' />
						</CardHeader>
						<CardFooter className='mt-auto'>
							<p className='text-sm text-gray-500'>Здесь будут выши акции</p>
						</CardFooter>
					</Card>
					<button className='text-[#ff7515] pt-5 pb-7 text-sm'>Все наши акции</button>
				</div>
			</section>
			{/* 			</div> */}
		</>
	)
}

export default BonusSection
