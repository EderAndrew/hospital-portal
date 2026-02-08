import { StatusBar } from "expo-status-bar";
import { Hospital } from "lucide-react-native";
import { InputComponent } from "../../components/InputComponent";
import { Alert, Platform, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonComponent } from "@/components/ButtonComponent";
import { AuthSignin } from "@/components/auth/AuthSignin";
import { useDefaultRoute } from "@/hooks/useRoute";
import { AuthFooter } from "@/components/auth/footer/AuthFooter";
import { LineFooter } from "@/components/auth/footer/LineFooter";
import { LoginSchema } from "@/schemas/login.schema";
import { useForm, Controller } from "react-hook-form";
import { signIn } from "@/services/auth.service";
import { useState } from "react";

export default function Login() {
  const { push, replace } = useDefaultRoute();
  const [isloading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const user = await signIn(data);
      console.log(user);
    } catch (error: any) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1 flex items-center justify-between">
      <Text
        className={`text-xl font-semibold mb-6 ${Platform.OS === "ios" ? "" : ""}`}
      >
        Hospital portal
      </Text>
      <View className="flex items-center gap-2">
        <View className="w-28 h-28 bg-blue-200 rounded-xl flex justify-center items-center mb-6">
          <Hospital color="#3b82f6" size={64} className="bg-blue-300" />
        </View>
        <Text className="text-3xl font-bold">👋 Bem vindo(a)!</Text>
        <Text className="text-lg text-blue-500">
          Faça Login para agendar seus exames médicos
        </Text>
      </View>
      <View className="flex items-center w-full mt-4 px-8">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent
              type="email-address"
              label="Email"
              onBlur={onBlur}
              placeholder="Digite o seu Email"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text>Campo Email é obrigatório.</Text>}

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent
              type="password"
              label="Senha"
              icon="EyeOff"
              isIcon={true}
              onBlur={onBlur}
              placeholder="Digite sua Senha"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />

        <View className="w-full flex items-end">
          <TouchableOpacity onPress={() => push("/forgetPassword")}>
            <Text className="text-blue-500">Esqueci a senha?</Text>
          </TouchableOpacity>
        </View>
        <ButtonComponent
          isIcon={true}
          icon="LogIn"
          title="Entrar"
          onPress={handleSubmit(onSubmit)}
        />
        <LineFooter />
      </View>
      <AuthSignin
        handlerScreen={() => push("/signIn")}
        label="Não tem uma conta?"
        labelScreen="Registrar-se"
      />
      <AuthFooter />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
