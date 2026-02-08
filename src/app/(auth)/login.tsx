import { StatusBar } from 'expo-status-bar';
import { Hospital } from 'lucide-react-native';
import { InputComponent } from '../../components/InputComponent';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonComponent } from '@/components/ButtonComponent';
import { AuthSignin } from '@/components/auth/AuthSignin';
import { useDefaultRoute } from '@/hooks/useRoute';
import { AuthFooter } from '@/components/auth/footer/AuthFooter';
import { LineFooter } from '@/components/auth/footer/LineFooter';
import { LoginSchema } from '@/schemas/login.schema';
import { useCallback, useState } from 'react';

export default function Login() {
    const { push } = useDefaultRoute();
    const [form, setForm] = useState<LoginSchema>({
        email: "",
        password: ""
    })
    const [message, setMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
        general?: string;
    }>({});

    const handleInputChange = useCallback((field: keyof LoginSchema, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        // Clear field error when user starts typing
        if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
        }
        // Clear general message when user types
        if (message) {
        setMessage("");
        }
    }, [errors, message]);
    
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
                    value={form.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                />
                <InputComponent
                    type="password"
                    label="Senha"
                    icon="EyeOff"
                    isIcon={true}
                    placeholder='Digite sua Senha'
                    value={form.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                />
                <View className='w-full flex items-end'>
                    <TouchableOpacity onPress={() => push('/forgetPassword')}>
                        <Text className='text-blue-500'>Esqueci a senha?</Text>
                    </TouchableOpacity>
                </View>
                <ButtonComponent isIcon={true} icon="LogIn" title="Entrar"/>
                <LineFooter />
            </View>
            <AuthSignin 
                handlerScreen={() => push('/signIn')}
                label="Não tem uma conta?"
                labelScreen="Registrar-se"
            />
            <AuthFooter />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}