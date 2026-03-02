import { StatusBar } from "expo-status-bar";
import { Hospital } from "lucide-react-native";
import { InputComponent } from "../../components/InputComponent";
import { Alert, Platform, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonComponent } from "@/components/ButtonComponent";
import { useDefaultRoute } from "@/hooks/useRoute";
import { AuthFooter } from "@/components/auth/footer/AuthFooter";
import { LoginSchema } from "@/schemas/login.schema";
import {
  useForm,
  Controller,
  type ControllerRenderProps,
} from "react-hook-form";
import { signIn } from "@/services/auth.service";
import { useState } from "react";

export default function Login() {
  const { push, replace } = useDefaultRoute();
  const [isloading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      setLoading(true);
      await signIn(data);
      replace("(dashboard)");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Login", error.message);
        return;
      }
      
      Alert.alert("Login", "Ocorreu um erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1 flex items-center justify-between">
      <View className="flex items-center justify-center gap-4 mt-8 w-full">
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
            render={({
              field,
            }: {
              field: ControllerRenderProps<LoginSchema, "email">;
            }) => (
              <InputComponent
                type="email-address"
                label="Email"
                onBlur={field.onBlur}
                placeholder="Digite o seu Email"
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text className="text-red-500">Campo Email é obrigatório.</Text>
          )}

          <Controller
            control={control}
            rules={{ required: true }}
            render={({
              field,
            }: {
              field: ControllerRenderProps<LoginSchema, "password">;
            }) => (
              <InputComponent
                type={isVisible ? "default" : "password"}
                label="Senha"
                icon={isVisible ? "Eye" : "EyeOff"}
                isIcon={true}
                onBlur={field.onBlur}
                placeholder="Digite sua Senha"
                onChangeText={field.onChange}
                value={field.value}
                onIconPress={()=>setIsVisible(!isVisible)}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text className="text-red-500">Campo Senha é obrigatório.</Text>
          )}
          <View className="w-full flex items-end">
            <TouchableOpacity onPress={() => push("/forgetPassword")}>
              <Text className="text-blue-500">Esqueci a senha?</Text>
            </TouchableOpacity>
          </View>
          <ButtonComponent
            isIcon={true}
            icon="LogIn"
            title={!isloading ? "Entrar" : "Entrando..."}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
      <AuthFooter />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
