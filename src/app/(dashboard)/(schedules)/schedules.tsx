import { SafeAreaView } from "react-native-safe-area-context";
import { myActiveSchedules } from "@/features/appointments/appointments.service";
import { CardScheduleComponent } from "@/components/CardScheduleComponent";
import { Appointment } from "@/features/appointments/appointments.type";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useAuthStore } from "@/stores/useAuth.store";
import { FlatList, View, Text } from "react-native";

export default function Schedules() {
  const [schedules, setSchedules] = useState<Appointment[]>([]);
  const { user } = useAuthStore((state) => state);

  useEffect(() => {
    (async () => {
      const resp = await myActiveSchedules(user?.patient.id as string);
      setSchedules(resp);
    })();
  }, [schedules]);

  if (schedules.length === 0) {
    return (
      <View>
        <Text>Nenhum exame agendado.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={schedules}
        keyExtractor={(item) => item.id as string}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CardScheduleComponent schedule={item} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
