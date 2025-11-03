import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { Badge } from '../ui/badge'

interface IBadgeProps {
	icon: LucideIcon
	size: number
	color?: string
	fill?: string
	titleTop: string
	titleBottom: string
	href: string
}

const BadgeBlock = ({
	icon: Icon,
	size,
	color,
	fill,
	titleTop,
	titleBottom,
	href,
}: IBadgeProps) => {
	return (
		<Badge
			className='bg-black text-white outline-1 outline-[#7f7f7f] px-4 py-6 flex items-center justify-center mr-2'
			variant='secondary'
		>
			<Link className='flex items-center' href={href}>
				<Icon className='mt-1.5' size={size} color={color} fill={fill} />
				<div className='ml-2'>
					<p className='text-[#7f7f7f] text-[12px]'>{titleTop}</p>
					<p className='text-base'>{titleBottom}</p>
				</div>
			</Link>
		</Badge>
	)
}

export default BadgeBlock
