import { View, Text } from "react-native";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgetPassword() {
    return (
        <SafeAreaView>
            <AuthHeader label='Segurança'/>
             <View className='flex-1 items-center justify-center'>
                <Text>Esqueci minha senha</Text>
            </View>
        </SafeAreaView>
       
    )
}