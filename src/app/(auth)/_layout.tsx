import { useAuthStore } from "@/stores/useAuth.store";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
    const { user } = useAuthStore()

    if(user){
        return <Redirect href="/(dashboard)" />
    }
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" />
            <Stack.Screen name="signIn" />
            <Stack.Screen name="forgetPassword" />
        </Stack>
    )
}