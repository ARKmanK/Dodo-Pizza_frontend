'use client'

import { useEffect, useRef, useState } from 'react'
import { Paperclip, SendHorizontal, SmilePlus } from 'lucide-react'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import Image from 'next/image'
import { getCurrentTime } from '@/utils/getCurrentTime'
import { cn } from '@/utils/utils'

interface ChatMessage {
	type: 'message'
	value: string
	role: 'user' | 'admin'
	timestamp: string
}

const Messager = () => {
	const [text, setText] = useState('')
	const [messages, setMessages] = useState<ChatMessage[]>([])
	const ws = useRef<WebSocket | null>(null)
	const messagesEndRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		ws.current = new WebSocket('ws://localhost:4200/chat')

		ws.current.onopen = () => {
			console.log('WebSocket /chat connected')
		}

		ws.current.onmessage = e => {
			const data: ChatMessage = JSON.parse(e.data)
			if (data.type === 'message') {
				setMessages(prev => [...prev, data])
			}
		}

		return () => {
			if (ws.current) ws.current.close()
		}
	}, [])

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	const handleSubmit = () => {
		if (!text.trim()) return
		const message: ChatMessage = {
			type: 'message',
			value: text,
			role: 'user',
			timestamp: getCurrentTime(),
		}
		try {
			ws.current?.send(JSON.stringify(message))
			setText('')
		} catch (error) {
			console.error('Failed to send message:', error)
		}
	}

	return (
		<>
			<Popover>
				<PopoverTrigger className='fixed bottom-10 right-10 w-15 h-15 rounded-full transition-all ease-out duration-300'>
					<div className='flex items-center justify-center'>
						<Image height={60} width={60} src='/messagerIcon.png' alt='messager-logo' />
					</div>
				</PopoverTrigger>
				<PopoverContent className=' w-[380px] rounded-[25px] mr-17 overflow-y-auto px-0'>
					<p className='p-3 text-sm text-gray-600'>Добро пожаловать в чат!</p>
					<Separator />
					<ScrollArea className='h-[450px] p-2'>
						{messages.map((msg, index) => (
							<div
								key={index}
								className={`mb-2 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
							>
								<div
									className={cn(
										'relative max-w-[70%] py-2 px-3 rounded-2xl flex flex-col',
										msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-blue-800 text-white'
									)}
								>
									<p className='whitespace-pre-wrap wrap-break-word'>{msg.value}</p>
									<span className='self-end text-[11px] text-gray-200'>{msg.timestamp}</span>
								</div>
							</div>
						))}
						<div ref={messagesEndRef} />
					</ScrollArea>
					<Separator />
					<div className='flex items-center pt-3.5 justify-around'>
						<Input
							placeholder='Ваше сообщение..'
							value={text}
							onChange={e => setText(e.target.value)}
							onKeyDown={e => e.key === 'Enter' && handleSubmit()}
							className='w-[230px] ml-2'
						/>
						<button className='p-1'>
							<SmilePlus color='gray' />
						</button>
						<button className='p-1'>
							<Paperclip color='gray' />
						</button>
						<button onClick={handleSubmit} className='p-1'>
							<SendHorizontal color='gray' />
						</button>
					</div>
				</PopoverContent>
			</Popover>
		</>
	)
}

export default Messager
