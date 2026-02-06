import { TouchableOpacity, Text } from "react-native"
import { Icon } from "./IconComponent"

type Props = {
    title: string;
    icon?: keyof typeof import('lucide-react-native/icons');
    isIcon?: boolean;
}

export const ButtonComponent = ({title, isIcon = false, icon}: Props) => {
    return (
        <TouchableOpacity 
            className='flex flex-row justify-center items-center w-full py-3 bg-blue-500 rounded-lg mt-8'
            onPress={()=>{}}
        >
            <Text className='text-white text-center text-lg font-semibold'>{title}</Text>
            {isIcon && icon && <Icon name={icon} size={20} color="white" style={{marginLeft: 8}} />}
        </TouchableOpacity>
    )
}