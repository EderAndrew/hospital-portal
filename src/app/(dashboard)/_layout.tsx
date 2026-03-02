import { icon, iconlabels } from "@/constants/icon";
import { useAuthStore } from "@/stores/useAuth.store";
import { Redirect, Tabs } from "expo-router";

export default function DashboardLayout() {
  const { user, isLoading } = useAuthStore();

  if (isLoading) return null;

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: iconlabels.home,
          tabBarLabel: iconlabels.home,
          tabBarIcon: icon.home,
        }}
      />
      <Tabs.Screen
        name="(exams)"
        options={{
          title: "Exames Disponíveis",
          tabBarLabel: iconlabels.exams,
          tabBarIcon: icon.exams,
        }}
      />
      <Tabs.Screen
        name="(schedules)"
        options={{
          title: iconlabels.schedule,
          tabBarLabel: iconlabels.schedule,
          tabBarIcon: icon.schedule,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: iconlabels.profile,
          tabBarLabel: iconlabels.profile,
          tabBarIcon: icon.profile,
        }}
      />
    </Tabs>
  );
}
