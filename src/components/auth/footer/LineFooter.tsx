import { View, Text } from "react-native"

export const LineFooter = () => {
    return (
        <View className='w-full flex items-center mt-4 flex-row justify-center gap-4'>
            <View className='w-1/3 h-0.5 bg-gray-300'></View>
            <Text className='text-gray-500 text-lg'>ou</Text>
            <View className='w-1/3 h-0.5 bg-gray-300'></View>
        </View>
    )
}