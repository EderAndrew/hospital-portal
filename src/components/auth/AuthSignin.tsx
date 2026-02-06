import { View, Text, TouchableOpacity } from "react-native"

type Props = {
    handlerScreen: () => void;
    label: string;
    labelScreen: string;
}

export const AuthSignin = ({handlerScreen, label, labelScreen}: Props) => {
    return (
        <View className='flex flex-row items-center gap-2 mt-4'>
            <Text>{label}</Text>
            <TouchableOpacity onPress={handlerScreen}>
            <Text className='text-blue-500'>{labelScreen}</Text>
            </TouchableOpacity>
        </View>
    )
}