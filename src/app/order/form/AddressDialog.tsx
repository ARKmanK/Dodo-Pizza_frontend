'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import z from 'zod'
import { formSchema } from './OrderForm'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { RESTAURANTS } from '@/data/restaraunts'
import { CircleOff, MapPin, Plus, Truck, Utensils, X } from 'lucide-react'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/utils/utils'
import { useMemo, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import { useUserSummary } from '@/hooks/useUserSummary'
import { Button } from '@/components/ui/button'
import { useActions } from '@/hooks/useActions'

interface IAddressDialogProps {
	form: UseFormReturn<z.infer<typeof formSchema>>
}

const AddressDialog = ({ form }: IAddressDialogProps) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [address, setAddress] = useState('')
	const [isAddAddressOpen, setIsAddAddressOpen] = useState(false)
	const [selectedAddress, setSelectedAddress] = useState('')
	const { deliveryAddress } = useUserSummary()
	const { updateDeliveryAddress, deleteDeliveryAddress } = useActions()
	const debouncedSearch = useDebounce(searchTerm, 200)

	const restaurants = useMemo(() => {
		return RESTAURANTS.filter(rest =>
			rest.address.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase())
		)
	}, [debouncedSearch])

	const handleClick = () => {
		if (address) {
			updateDeliveryAddress(address)
			setAddress('')
			setIsAddAddressOpen(false)
		}
	}

	const handleSelectAddress = (addr: string) => {
		setSelectedAddress(addr)
	}

	return (
		<>
			<FormField
				control={form.control}
				name='address'
				render={({ field }) => (
					<FormItem className='flex'>
						<FormLabel className='min-w-[15%] font-semibold'>Адрес пиццерии</FormLabel>
						<FormControl className='max-w-[20%]'>
							<Dialog>
								<DialogTrigger className='bg-gray-100  px-4 py-2 text-sm shadow-xl min-w-8 rounded-[10px] text-[#ff6900] hover:text-[#d15700] font-semibold'>
									Выбрать
								</DialogTrigger>
								<DialogContent
									className='h-[80vh] p-0 overflow-hidden border-none rounded-[40px] xl:max-w-[1525px] xl:max-h-[800px]'
									showCloseButton={false}
								>
									<DialogHeader className='hidden'>
										<DialogTitle></DialogTitle>
									</DialogHeader>
									<div className='relative h-full'>
										<Image
											src='/map-bg.jpg'
											alt='map-img'
											fill
											className='object-cover z-0'
											priority
										/>
										<div className='relative z-10 h-full flex flex-col'>
											<Tabs
												defaultValue='pickUp'
												value={form.watch('deliveryMethod')}
												onValueChange={value =>
													form.setValue('deliveryMethod', value as 'delivery' | 'pickUp')
												}
												className='z-10 flex-1 flex flex-col ml-6'
											>
												<div className='p-4'>
													<TabsList className='relative w-[419px] h-[54px] mt-10 bg-gray-200 rounded-full p-1'>
														<div
															className='absolute top-[3px] h-[48px] bg-[#ff6900] rounded-full transition-transform duration-300 ease-in-out'
															style={{
																width: 'calc(50% - 5px)',
																left: '3px',
																transform: `translateX(${
																	form.watch('deliveryMethod') === 'delivery'
																		? '0'
																		: 'calc(100% + 4px)'
																})`,
															}}
														/>
														<TabsTrigger
															value='delivery'
															className={cn(
																'relative z-10 flex-1 h-full flex items-center justify-center font-semibold text-black data-[state=active]:text-white transf-none',
																'!bg-transparent !border-none !shadow-none data-[state=active]:!bg-transparent'
															)}
														>
															<Truck className='w-4 h-4 mr-2' />
															Доставка
														</TabsTrigger>
														<TabsTrigger
															value='pickUp'
															className={cn(
																'relative z-10 flex-1 h-full flex items-center justify-center font-semibold text-black data-[state=active]:text-white transf-none',
																'!bg-transparent !border-none !shadow-none data-[state=active]:!bg-transparent'
															)}
														>
															<Utensils className='w-4 h-4 mr-2' />
															Самовывоз
														</TabsTrigger>
													</TabsList>
												</div>
												<TabsContent
													value='delivery'
													className='flex-1 p-4 xl:max-w-[450px] xl:max-h-[380px]'
												>
													<div className='bg-[#f1f3f6] backdrop-blur-sm rounded-[20px] h-full flex flex-col'>
														<div className='flex justify-between items-center p-4'>
															<p className='text-lg font-semibold'>Мои адреса</p>
															<Dialog open={isAddAddressOpen} onOpenChange={setIsAddAddressOpen}>
																<DialogTrigger className='font-semibold flex bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-[20px] text-sm transf-none'>
																	<Plus size={20} className='mr-2' />
																	Новый адрес
																</DialogTrigger>
																<DialogContent
																	className='mt-4 xl:max-w-[400px] xl:max-h-[300px]'
																	showCloseButton={false}
																>
																	<DialogHeader>
																		<DialogTitle className='text-xl font-bold'>
																			Новый адрес
																		</DialogTitle>
																		<DialogDescription>
																			Создайте адрес для доставки
																		</DialogDescription>
																	</DialogHeader>
																	<Input
																		placeholder='адрес...'
																		value={address}
																		onChange={e => setAddress(e.target.value)}
																	/>
																	<div className='flex space-x-2'>
																		<DialogClose asChild>
																			<Button className='flex-1 px-4 py-2 bg-gray-300 rounded-[20px] text-black hover:bg-gray-400 font-semibold text-sm transf-none'>
																				Отмена
																			</Button>
																		</DialogClose>
																		<Button
																			onClick={handleClick}
																			className='flex-1 px-4 py-2 bg-[#f8d6c0] rounded-[20px] text-[#d4712c] hover:bg-[#ff6900] hover:text-white font-semibold text-sm transf-none'
																		>
																			Добавить
																		</Button>
																	</div>
																</DialogContent>
															</Dialog>
														</div>
														<div className='flex-1 min-h-0 px-4 pb-4'>
															{deliveryAddress.length ? (
																<ScrollArea className='h-full max-h-[200px]'>
																	<div className='space-y-3'>
																		{deliveryAddress.map(add => (
																			<label
																				key={add.id}
																				htmlFor={`address-${add.id}`}
																				className='flex items-center space-x-3 p-3 bg-white rounded-lg relative cursor-pointer hover:bg-gray-50 transition-colors'
																			>
																				<input
																					id={`address-${add.id}`}
																					type='radio'
																					name='deliveryAddress'
																					checked={selectedAddress === add.deliveryAddress}
																					onChange={() => handleSelectAddress(add.deliveryAddress)}
																					className='form-radio h-4 w-4 appearance-none rounded-full bg-[#f1f3f6] border-2 border-gray-300 checked:border-[6px] checked:border-orange-500 checked:bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 mt-1'
																				/>
																				<p className='ml-2 flex items-center flex-1'>
																					<MapPin size={18} color='gray' className='mr-2' />
																					{add.deliveryAddress}
																				</p>
																				<button
																					onClick={e => {
																						e.preventDefault()
																						e.stopPropagation()
																						deleteDeliveryAddress(add.id)
																					}}
																					className='p-1 hover:bg-gray-200 rounded-full transition-colors'
																				>
																					<X size={18} />
																				</button>
																			</label>
																		))}
																	</div>
																</ScrollArea>
															) : (
																<div className='w-full h-full flex items-center justify-center'>
																	<p className='flex items-center text-gray-500'>
																		<CircleOff size={18} className='mr-2' />
																		Нет адресов, создайте новый
																	</p>
																</div>
															)}
														</div>
														<div className='p-4 mt-auto'>
															<DialogClose asChild>
																<Button
																	className='w-full bg-[#ff6900] text-white h-[50px] rounded-[25px] py-3 font-semibold hover:bg-[#d15700] transf-none'
																	onClick={() => {
																		form.setValue('address', selectedAddress)
																		form.trigger('address')
																	}}
																>
																	Заказать сюда
																</Button>
															</DialogClose>
														</div>
													</div>
												</TabsContent>
												<TabsContent
													value='pickUp'
													className='flex-1 p-4 m-0 xl:max-w-[450px] flex flex-col'
												>
													<div className='bg-[#f1f3f6] backdrop-blur-sm rounded-[20px] h-full flex flex-col'>
														<div className='p-4'>
															<Input
																placeholder='Район, улица или станция метро'
																className='bg-gray-300 rounded-[15px] h-[50px]'
																onChange={e => setSearchTerm(e.target.value)}
															/>
														</div>
														<ScrollArea className='flex-1 max-h-[480px]'>
															<div className='pr-4'>
																<Accordion type='single' collapsible className='space-y-2'>
																	{restaurants.map(rest => (
																		<div key={rest.id}>
																			<AccordionItem
																				value={rest.id.toString()}
																				className='border-none'
																			>
																				<AccordionTrigger
																					className='font-semibold text-lg hover:no-underline py-3 px-4 border-none outline-none transf-none'
																					hideIcon={true}
																					onClick={() => {
																						field.onChange(rest.address)
																					}}
																				>
																					<div className='flex items-start space-x-3 cursor-pointer w-full'>
																						<input
																							type='radio'
																							name='address'
																							value={rest.address}
																							checked={field.value === rest.address}
																							onChange={e => {
																								e.stopPropagation()
																							}}
																							className='form-radio h-5 w-5 appearance-none rounded-full bg-[#f1f3f6] border-2 border-gray-300 checked:border-[6px] checked:border-orange-500 checked:bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 mt-1'
																						/>
																						<div className='flex flex-col text-left'>
																							<span className='text-base'>{rest.address}</span>
																							<p className='text-green-600 text-[13px]'>
																								Открыто
																								<span className='text-gray-400 ml-1'>до 00:30</span>
																							</p>
																						</div>
																					</div>
																				</AccordionTrigger>
																				<AccordionContent className='text-sm pb-4 pl-7 pt-1'>
																					<div className='space-y-3 pl-[18px]'>
																						<div className='flex justify-between'>
																							<div className='font-medium'>Ресторан</div>
																							<div className='text-right'>
																								<p>{rest.restaurantTime.Mond_Thur}</p>
																								<p>{rest.restaurantTime.Fr_Sat}</p>
																								<p>{rest.restaurantTime.Sund}</p>
																							</div>
																						</div>
																						<div className='flex justify-between'>
																							<div className='font-medium'>Доставка</div>
																							<div className='text-right'>
																								<p>{rest.restaurantTime.Mond_Thur}</p>
																								<p>{rest.restaurantTime.Fr_Sat}</p>
																								<p>{rest.restaurantTime.Sund}</p>
																							</div>
																						</div>
																					</div>
																				</AccordionContent>
																			</AccordionItem>
																			<Separator />
																		</div>
																	))}
																</Accordion>
															</div>
															<div className='p-4'>
																<DialogClose asChild>
																	<Button
																		type='button'
																		className='w-full bg-[#ff6900] text-white py-3 h-[50px] rounded-[25px] font-semibold hover:bg-[#d15700] transf-none'
																		onClick={() => {
																			form.setValue('address', field.value)
																			form.trigger('address')
																		}}
																	>
																		Выбрать
																	</Button>
																</DialogClose>
															</div>
														</ScrollArea>
													</div>
												</TabsContent>
											</Tabs>
										</div>
									</div>
								</DialogContent>
							</Dialog>
						</FormControl>
						<FormMessage className='ml-4 flex items-center' />
					</FormItem>
				)}
			/>
		</>
	)
}

export default AddressDialog
