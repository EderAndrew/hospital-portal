import { bootstrapAuth } from "@/services/bootstrapAuth";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  useEffect(() => {
    bootstrapAuth();
  }, []);
  
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(dashboard)" />
        </Stack>
    </SafeAreaProvider>
  );
}
