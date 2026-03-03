import { bootstrapAuth } from "@/services/bootstrapAuth";
import { useAuthStore } from "@/stores/useAuth.store";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const { isLoading } = useAuthStore();

  useEffect(() => {
    bootstrapAuth();
  }, []);

  if (isLoading) {
    return null;
  }
  
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(dashboard)" />
        </Stack>
    </SafeAreaProvider>
  );
}
