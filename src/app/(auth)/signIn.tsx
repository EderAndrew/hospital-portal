
import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "../../components/IconComponent";
import { InputComponent } from '../../components/InputComponent';

export default function SignIn() {
    return (
        <SafeAreaView className='flex-1 px-4 bg-white'>
            <View className='flex flex-row justify-between'>
                <Icon name="ChevronLeft" size={24} color="black" />
                <Text className='text-xl'>Criar Conta</Text>
                <View className='w-6 h-6'></View>
            </View>
            <View className='mt-12'>
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
                    label="CPF (ID)"
                    placeholder='000.000.000-00'
                />
                <InputComponent 
                    type="numeric"
                    label="Numero de telefone"
                    placeholder='(00) 00000-0000'
                />
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}