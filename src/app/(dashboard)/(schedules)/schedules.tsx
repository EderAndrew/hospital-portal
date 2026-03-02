import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { CardScheduleComponent } from "@/components/CardScheduleComponent";
import { Appointments } from "@/types/schedule.type";
import { useEffect, useState } from "react";
import { myActiveSchedules } from "@/services/appointments.service";
import { useAuthStore } from "@/stores/useAuth.store";
import { FlatList, View } from "react-native";

export default function Schedules() {
  const [schedules, setSchedules] = useState<Appointments[]>([]);
  const { user } = useAuthStore((state) => state);

  useEffect(() => {
    (async () => {
      const resp = await myActiveSchedules(user?.id as string);
      setSchedules(resp);
    })();
  }, [schedules]);

  return (
    <View>
      <FlatList
        data={schedules}
        keyExtractor={(item) => item.id as string}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CardScheduleComponent schedule={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}
