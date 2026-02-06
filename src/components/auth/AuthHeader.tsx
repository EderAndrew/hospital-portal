import { TouchableOpacity, View, Text } from "react-native"
import { Icon } from "../IconComponent"
import { useDefaultRoute } from "@/hooks/useRoute";

type Props = {
    label: string;
}
export const AuthHeader = ({label}:Props) => {
    const { back } = useDefaultRoute();

    return (
        <View className='flex flex-row justify-between'>
            <TouchableOpacity 
                onPress={() => back()}
                className='flex flex-row items-center gap-2'>
                    <Icon name="ChevronLeft" size={24} color="black" />
            </TouchableOpacity>
            <Text className='text-xl'>{label}</Text>
            <View className='w-6 h-6'></View>
        </View>
    )
}