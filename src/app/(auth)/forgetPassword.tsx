import { View, Text, TouchableOpacity } from "react-native";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@/components/IconComponent";
import { InputComponent } from "@/components/InputComponent";
import { ButtonComponent } from "@/components/ButtonComponent";
import { LineFooter } from "@/components/auth/footer/LineFooter";
import { ChevronLeft } from "lucide-react-native";
import { useDefaultRoute } from "@/hooks/useRoute";
import { AuthFooter } from "@/components/auth/footer/AuthFooter";

export default function ForgetPassword() {
    const { back } = useDefaultRoute();
    
    return (
        <SafeAreaView className='flex-1 px-4 bg-white items-center justify-between'>
            <AuthHeader label='Segurança'/>
            <View className='flex-1 items-center justify-center px-4'>
                <View className='w-20 h-20 bg-blue-200 rounded-full flex justify-center items-center mb-6'>
                    <Icon name="RotateCcwKey" size={32} color="#3b82f6" />
                </View>
                <Text className='text-4xl'>Resetar a Senha</Text>
                <Text className='text-center mt-4 text-slate-600'>Digite o endereço de email associado a sua conta de usuário que nós vamos enviar um link para que você resete a sua senha.</Text>
            </View>
            <View className='w-full'>
                <InputComponent
                    type="email-address"
                    label="Endereço de Email"
                    isIcon={true}
                    icon="Mail"
                    placeholder="e.g: nome@gmail.com"
                />
                <ButtonComponent title='Enviar Link de Reset'/>
            </View>
            <View className='w-full mt-28 items-center'>
                <LineFooter />
                <View className='w-full flex items-center mt-4 mb-6'>
                    <TouchableOpacity className='flex flex-row gap-2 items-center mt-4' onPress={() => back()}>
                        <ChevronLeft color="#3b82f6" size={20} />
                        <Text className='text-blue-500'>Voltar para o Login</Text>
                    </TouchableOpacity>
                </View>
                <AuthFooter />
            </View>
        </SafeAreaView>
       
    )
}