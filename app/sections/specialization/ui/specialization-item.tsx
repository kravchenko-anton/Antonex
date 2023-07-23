import Button from "@/app/components/ui/button/button";
import Description from "@/app/components/ui/description/description";
import Heading from "@/app/components/ui/heading/heading";
import Icon, {IconProps} from "@/app/components/ui/icon/icon";
import {Color} from "@/app/utils/colors";
import {FC} from "react";

interface SpecializationItemProps extends Omit<IconProps, 'href'>{
	title: string
	description: string
}
const SpecializationItem:FC<SpecializationItemProps> = (props) => {
	return <Button type={'twilight'} className='w-[80%] flex justify-between p-4 rounded-xl mt-4
		'>
		<div>
			<Heading size={24} bold className='mt-1'>
				{props.title}
			</Heading>
			<Description className='w-[70%]' color={Color.charcoal} size={16}>
				{props.description}
			</Description>
		
		</div>
		<Icon icon={props.icon} size={props.size} color={props.color} />
	</Button>
}

export default SpecializationItem