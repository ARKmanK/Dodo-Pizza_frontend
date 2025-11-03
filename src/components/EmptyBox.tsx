interface EmptyBoxProps {
	text: string
}

const EmptyBox = ({ text }: EmptyBoxProps) => {
	return (
		<>
			<article className='w-full min-[768px]:h-[800px] flex justify-center items-center'>
				<div className='rounded-[35px] border-6 border-orange-300 p-50 bg-amber-500/40'>
					<p className='opacity-65 text-gray-600'>{text}</p>
				</div>
			</article>
		</>
	)
}

export default EmptyBox
