import CartTable from './CartTable'

const CartPage = () => {
	return (
		<>
			<main className='px-4 pt-4 flex justify-center'>
				<div className='md:w-[90%] lg:w-[80%] xl:w-[70%]'>
					<h2 className='pb-3 pl-6 text-xl font-bold lg:text-3xl'>
						<CartTable />
					</h2>
					<div className='grid md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-30'></div>
				</div>
			</main>
		</>
	)
}

export default CartPage
