import { View, Text } from "react-native"
import { Icon } from "../IconComponent"

export const AuthFooter = () => {
    return (
        <View className='mt-4 flex flex-row items-center gap-2'>
            <Icon name="Shield" size={20} color="#d1d5db" />
            <Text className='text-gray-400 text-sm'>SECURE SSL ENCRYPTION</Text>
        </View>
    )
}