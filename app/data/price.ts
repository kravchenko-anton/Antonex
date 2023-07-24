import { AiFillBug } from 'react-icons/ai'
import { BsHandThumbsUpFill } from 'react-icons/bs'
import { HiTrophy } from 'react-icons/hi2'
import { TbDeviceDesktopCode, TbDeviceMobileCode } from 'react-icons/tb'

export const price = [
	{
		id: 0,
		title: 'Hourly Rate',
		price: '$20',
		period: 'Hours',
		color: '#E0CBA8',
		icon: BsHandThumbsUpFill,
		description:
			'More suitable for companies that are interested in me as an employee or for minor edits.'
	},
	{
		id: 1,
		title: 'Complex Mobile App',
		price: '$1000-3000+',
		period: 'One Time',
		icon: HiTrophy,
		color: '#FA7921',
		hit: true,
		description:
			'If you need a complex mobile app, I can make it using the best technologies and bring it to the app store.'
	},
	{
		id: 2,
		title: 'Small Mobile App',
		price: '$1000+',
		period: 'One Time',
		icon: TbDeviceMobileCode,
		color: '#779FA1',
		description:
			'It is enough to give the idea that you want to realize and terms, if possible design'
	},
	{
		id: 4,
		title: 'Small Bug Fix',
		price: '$50-100+',
		period: 'One Time',

		color: '#E94F37',
		icon: AiFillBug,
		description:
			'If you have a bug that urgently needs to be fixed, I can do it quickly and without questions'
	}
]
