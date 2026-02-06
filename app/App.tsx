import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import "../global.css"
import { Hospital } from 'lucide-react-native';
import { InputComponent } from '../components/InputComponent';

export default function App() {
  return (
    <SafeAreaView className='bg-white flex-1 flex items-center justify-center'>
      <Text className='text-xl font-semibold mb-6'>Hospital portal</Text>
      <View className='w-28 h-28 bg-blue-200 rounded-xl flex justify-center items-center mb-6'>
        <Hospital color="#3b82f6" size={64} className='bg-blue-300'/>
      </View>
      <Text className='text-3xl font-bold'>👋 Bem vindo(a)!</Text>
      <Text className='text-lg text-blue-500'>Faça Login para gerenciar seus exames médicos</Text>
        <InputComponent 
          type="email-address"
          label="Email"
          icon="Mail"
          placeholder='Digite o seu Email'
        />
        <InputComponent
          type="password"
          label="Senha"
          icon="Lock"
          placeholder='Digite sua Senha'
        />
        <Text className='text-blue-500'>Esqueceu a senha?</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
