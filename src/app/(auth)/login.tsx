import { StatusBar } from 'expo-status-bar';
import { Hospital } from 'lucide-react-native';
import { Icon } from '../../components/IconComponent';
import { InputComponent } from '../../components/InputComponent';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { ButtonComponent } from '@/components/ButtonComponent';
import { AuthSignin } from '@/components/auth/AuthSignin';
import { AuthFooter } from '@/components/auth/AuthFooter';

export default function Login() {
    const router = useRouter();

    const handleForgotPassword = useCallback(() => {
        router.push('/(auth)/signIn')
    }, [router])
    
    return (
        <SafeAreaView className='bg-white flex-1 flex items-center justify-between'>
            <Text className={`text-xl font-semibold mb-6 ${Platform.OS === 'ios' ? '': ''}`}>Hospital portal</Text>
            <View className='flex items-center gap-2'>
                <View className='w-28 h-28 bg-blue-200 rounded-xl flex justify-center items-center mb-6'>
                <Hospital color="#3b82f6" size={64} className='bg-blue-300'/>
                </View>
                <Text className='text-3xl font-bold'>👋 Bem vindo(a)!</Text>
                <Text className='text-lg text-blue-500'>Faça Login para agendar seus exames médicos</Text>
            </View>
            <View className='flex items-center w-full mt-4 px-8'>
                <InputComponent 
                    type="email-address"
                    label="Email"
                    placeholder='Digite o seu Email'
                />
                <InputComponent
                    type="password"
                    label="Senha"
                    icon="EyeOff"
                    isIcon={true}
                    placeholder='Digite sua Senha'
                />
                <Text className='w-full text-right text-blue-500'>Esqueceu a senha?</Text>
                <ButtonComponent isIcon={true} icon="LogIn" title="Entrar"/>
                <View className='w-full flex items-center mt-4 flex-row justify-center gap-4'>
                <View className='w-1/3 h-0.5 bg-gray-300'></View>
                <Text className='text-gray-500 text-lg'>ou</Text>
                <View className='w-1/3 h-0.5 bg-gray-300'></View>
                </View>
            </View>
            <AuthSignin 
                handlerScreen={handleForgotPassword}
                label="Não tem uma conta?"
                labelScreen="Registrar-se"
            />
            <AuthFooter />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}