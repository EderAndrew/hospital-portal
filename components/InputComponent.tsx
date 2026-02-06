import { View, Text, TextInput } from "react-native"
import { Icon } from "./IconComponent"

type Props = {
    type: "email-address" | "password";
    label: string;
    icon: keyof typeof import('lucide-react-native/icons');
    placeholder: string;
}

export const InputComponent = ({type, label, icon, placeholder}: Props) => {
    return (
        <View className='w-full px-8 flex gap-2'>
            <Text className='text-lg'>{label}</Text>
            <View className='border border-gray-300 rounded-lg p-2 w-full mb-4 flex flex-row items-center gap-2'>
            <Icon name={icon} size={20} color="#9ca3af" />
            <TextInput
                placeholder={placeholder}
                className='flex-1'
                keyboardType={type === "email-address" ? "email-address" : "default"}
                secureTextEntry={type === "password"}
            />
            {type === "password" && <Icon name='EyeOff' size={20} color="#9ca3af" />}
            </View>
        </View>
    )
}