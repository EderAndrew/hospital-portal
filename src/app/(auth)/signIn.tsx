
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputComponent } from '@/components/InputComponent';
import { ButtonComponent } from '@/components/ButtonComponent';
import { AuthSignin } from '@/components/auth/AuthSignin';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { useDefaultRoute } from '@/hooks/useRoute';
import { AuthFooter } from '@/components/auth/footer/AuthFooter';

export default function SignIn() {
    const { back } = useDefaultRoute();

    return (
        <SafeAreaView className='flex-1 px-4 bg-white items-center'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AuthHeader label='Criar Conta'/>
                <View className='mt-12 flex-1 items-center'>
                    <Text className='text-4xl'>Crie a sua Conta no Hospital Portal</Text>
                    <Text className='mt-4 mb-6 text-slate-600'>Gerencie seus exames médicos e agendamentos em um único lugar com total segurança.</Text>
                    <InputComponent 
                        type='default'
                        label="Nome Completo"
                        placeholder='John Doe'
                    />
                    <InputComponent 
                        type="email-address"
                        label="Endereço de Email"
                        isIcon={true}
                        icon="Mail"
                        placeholder='john.doe@example.com'
                    />
                    <InputComponent 
                        type="numeric"
                        label="CPF"
                        placeholder='000.000.000-00'
                    />
                    <InputComponent 
                        type="numeric"
                        label="Numero de telefone"
                        placeholder='(00) 00000-0000'
                    />
                    <ButtonComponent title='Criar Conta' icon='UserRoundCheck' isIcon={true}/>
                    <AuthSignin 
                        handlerScreen={() => back()}
                        label="Já tem uma conta?"
                        labelScreen="Entrar"
                    />
                </View>
            </ScrollView>
            <AuthFooter />
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}