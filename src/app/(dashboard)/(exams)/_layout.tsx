import { Stack } from "expo-router";

export default function ExamsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="exams" />
      <Stack.Screen name="createAppointment/[id]" />
    </Stack>
  );
}
