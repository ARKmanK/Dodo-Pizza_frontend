import Header from '@/components/Header/Header'
import { Accordion, AccordionContent, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FAQ } from '@/data/FAQ'
import { AccordionItem } from '@radix-ui/react-accordion'
import { DecorativeElement } from '../../components/DecorativeLine'

const Page = () => {
	return (
		<>
			<main className='md:w-[90%] lg:w-[80%] xl:w-[73%]'>
				<div className='px-4 pt-4 flex-col items-center'>
					<Header showNews={false} />
				</div>
			</main>
			<section className='w-full flex justify-center items-center bg-radial from-[#8c6be9] from-5% to-[#572bcf] to-60% relative h-[700px]'>
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-[72px] font-bold text-white text-center leading-20'>
						ВКУСНЫЙ
						<br />
						КЕШБЭК
					</h2>
					<p className='text-[24px] text-white font-bold w-[350px] text-center mt-5 leading-8'>
						Копите додокоины,
						<br />
						меняйте на еду и напитки
						<br />в приложении
					</p>
					<Button className='bg-[#ff6900] text-white rounded-[30px] lg:text-[16px] mt-15 p-6 font-semibold min-w-[150px] flex'>
						Скачать приложение по QR-коду
					</Button>
				</div>
				<img
					src='https://cdn.dodostatic.net/pizza-site/dist/assets/fff780a139988eb606cb..png'
					alt='coin-img'
					className='absolute top-0'
				/>
				<img
					src='https://cdn.dodostatic.net/pizza-site/dist/assets/015e8c5266e2a4543fab..png'
					alt='coin-img'
					className='absolute top-0'
				/>
			</section>
			<section className='w-full flex flex-col items-center bg-[#181818]'>
				<p className='text-[40px] font-bold text-white mt-30'>ОГО, А ЭТО КАК?</p>
				<div className='flex mt-10 items-center mr-15 relative'>
					<img
						src='https://cdn.dodostatic.net/pizza-site/dist/assets/bdd1b4f711da594de675..png'
						alt='pizza-img'
						className='h-[512px] w-[512px]'
					/>
					<DecorativeElement />
					<div className='flex flex-col mb-25 ml-5'>
						<p className='text-[40px] font-bold text-white'>Сделайте заказ</p>
						<p className='text-[#dcdcdc] font-semibold text-[24px] mt-3'>
							На доставку, в ресторане
							<br />
							или заберите с собой
						</p>
					</div>
				</div>
				<div className='flex mt-40 items-center'>
					<div className='flex flex-col mr-5'>
						<p className='text-[40px] font-bold text-white leading-11'>
							ПОЛУЧИТЕ КЕШБЭК
							<br />
							5%
						</p>
						<p className='text-[#dcdcdc] font-semibold text-[24px] w-[450px] mt-5'>
							Додокоины начисляются сами с каждым заказом. Баланс можно посмотреть в приложении
						</p>
					</div>
					<video
						src='https://cdn.dodostatic.net/pizza-site/dist/assets/a3137148223bfb2e59f7..mp4'
						className='h-[368px] w-[368px] rotate-20'
						loop
						autoPlay
						muted
						playsInline
					/>
				</div>
				<div className='flex mt-40 items-center mr-15'>
					<img
						src='https://cdn.dodostatic.net/pizza-site/dist/assets/eb589fda0e14e11a588a..png'
						alt='pizza-img'
						className='h-[512px] w-[512px]'
					/>
					<div className='flex flex-col ml-5'>
						<p className='text-[40px] font-bold text-white leading-12'>
							ОБМЕНЯЙТЕ
							<br />
							НА ПРОДУКТЫ
						</p>
						<p className='text-[#dcdcdc] font-semibold text-[24px] mt-3 w-[450px]'>
							Переходите на вкладку «Профиль» в приложении и выбирайте еду и&nbsp;напитки
						</p>
					</div>
				</div>
				<div className='flex mt-20 items-center mr-15'>
					<div className='flex flex-col ml-5'>
						<p className='text-[40px] font-bold text-white leading-12'>
							СКАНИРУЙТЕ QR-
							<br />
							КОД
						</p>
						<p className='text-[#dcdcdc] font-semibold text-[24px] mt-3 w-[450px]'>
							Наведите камеру, чтобы скачать
							<br />
							приложение
						</p>
					</div>
					<img src='/qr-code.png' alt='pizza-img' className='h-[400px] w-[400px]' />
				</div>
				<div className='mt-25 flex flex-col items-center md-30 relative'>
					<p className='text-white font-bold text-[40px] relative z-1'>БОЛЬШЕ ДОДОКОИНОВ</p>
					<img
						src='https://cdn.dodostatic.net/pizza-site/dist/assets/82ba8ca7e82c0a3e217e..png'
						alt='coin-img'
						className='z-0 absolute left-50 -top-23 w-[203px] h-[177px]'
					/>
					<p className='text-[24px] text-[#dcdcdc] w-[400px] text-center mt-8 z-1'>
						Проходите миссии в мобильном приложении, чтобы получить дополнительные додокоины
					</p>
					<div className='mt-30 flex relative'>
						<div className='relative z-1'>
							<Card className='rounded-[30px] pt-0 -rotate-5'>
								<CardHeader className='bg-[#eeddd3] rounded-tl-[30px] rounded-tr-[30px] p-3'>
									<img src='/card-img-1.png' alt='card-img' className='w-[300px] h-[160px] mt-8' />
								</CardHeader>

								<CardContent className='px-6 pb-2 max-w-[300px]'>
									<p className='text-[#333333] font-semibold'>
										Вспомни 10 фильмов, в которых присутствовала пицца. Напиши их названия в
										приложении
									</p>
								</CardContent>
							</Card>
							<div className='text-[20px] bg-[#ff6900] px-8 py-4 rounded-[18px] text-white text-nowrap font-semibold absolute -top-8 left-13 -rotate-13 transform'>
								Для одного
							</div>
						</div>
						<div className='relative z-1'>
							<Card className='rounded-[30px] pt-0 rotate-5 mt-11'>
								<CardHeader className='bg-[#eeddd3] rounded-tl-[30px] rounded-tr-[30px] p-3 flex justify-center'>
									<img
										src='/card-img-2.png'
										alt='card-img'
										className='w-[214px] h-[206px] center mt-3'
									/>
								</CardHeader>
								<CardContent className='px-6 pb-2 max-w-[300px]'>
									<p className='text-[#333333] font-semibold'>
										Сыграйте с другом/подругой в игру: по очереди называйте виды пиццы. Кто назовет
										последним, победил.
									</p>
								</CardContent>
							</Card>
							<div className='text-[20px] bg-[#6031d5] px-8 py-4 rounded-[18px] text-white text-nowrap font-semibold absolute top-4 left-22 rotate-13 transform'>
								Для двоих
							</div>
						</div>
						<div className='relative z-1'>
							<Card className='rounded-[30px] pt-0 -rotate-5 ml-2'>
								<CardHeader className='bg-[#eeddd3] rounded-tl-[30px] rounded-tr-[30px] p-3 flex justify-center'>
									<img src='/card-img-3.png' alt='card-img' className='w-[210px] h-[200px] mt-7' />
								</CardHeader>

								<CardContent className='px-6 pb-2  max-w-[300px]'>
									<p className='text-[#333333]font-semibold'>
										Собери друзей и попробуй пантомимой за 1 минуту объяснить им слово «Бруслетики»
									</p>
								</CardContent>
							</Card>
							<div className='text-[20px] bg-[#1bc262] px-8 py-4 rounded-[18px] text-white text-nowrap font-semibold absolute -top-8 left-10 -rotate-13 transform'>
								Для Компании
							</div>
						</div>
						<img
							src='https://cdn.dodostatic.net/pizza-site/dist/assets/ee4485abed7f4bb71543..png'
							alt='coin-img'
							className='absolute -bottom-15 -left-8 h-[150px] w-[150px] z-0'
						/>
					</div>
					<div className='relative mt-20'>
						<p className='text-[#dcdcdc] text-[24px] font-semibold w-[450px] text-center'>
							Участвуйте в миссиях в одиночку или приглашайте друзей – начислим додокоины всем!
						</p>
						<img
							src='https://cdn.dodostatic.net/pizza-site/dist/assets/7dff9569a4ce65261fdb..png'
							alt='coin-img'
							className='w-[167px] h-[133px] absolute -right-70 -bottom-30'
						/>
					</div>
				</div>
				<div className='mt-40 flex flex-col items-center w-full px-4'>
					<p className='text-[40px] font-bold text-white text-center'>ПОПУЛЯРНЫЕ ВОПРОСЫ</p>
					<Accordion
						type='single'
						collapsible
						className='text-white w-full max-w-[1000px] mx-auto space-y-4 mt-10'
					>
						{FAQ.map((item, index) => (
							<AccordionItem
								value={`item-${index}`}
								key={index}
								className='w-full rounded-[15px] overflow-hidden data-[state=open]:rounded-[15px] data-[state=closed]:rounded-t-[15px] data-[state=closed]:rounded-[15px] bg-[#303030] hover:bg-[#3a3a3a] p-2'
							>
								<AccordionTrigger className='text-[24px] w-full text-left px-4 hover:no-underline focus:outline-none transf-none'>
									{item.title}
								</AccordionTrigger>
								<AccordionContent className='w-full px-4'>
									<p className='text-[20px] text-[#d8d8d8]'>{item.description}</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
				<div className='flex mt-40 justify-center relative w-full mb-60'>
					<img
						src='https://cdn.dodostatic.net/pizza-site/dist/assets/6dc4dced130c33e868a9..png'
						alt='qr-code-img'
						className='w-[1168px] h-[473px] absolute z-0 top-0'
					/>
					<div className='flex flex-col items-start mr-110 mt-17 z-1'>
						<p className='text-[40px] font-bold text-white leading-11'>
							УРА, ВЫ ВСЁ
							<br />
							ПРОЧИТАЛИ!
						</p>
						<p className='text-[#dcdcdc] font-semibold text-[24px] w-[450px] mt-5'>
							Осталось скачать приложение
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default Page
