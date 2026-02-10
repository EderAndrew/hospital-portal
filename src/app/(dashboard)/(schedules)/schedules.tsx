import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { CardScheduleComponent } from "@/components/CardScheduleComponent";
import { Schedule } from "@/types/schedule.type";
import { useEffect, useState } from "react";
import { myActiveSchedules } from "@/services/schedule.service";
import { useAuthStore } from "@/stores/useAuth.store";
import { FlatList } from "react-native";

export default function Schedules() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const { user } = useAuthStore((state) => state);

  useEffect(() => {
    (async () => {
      const resp = await myActiveSchedules(user?.id as string);
      setSchedules(resp);
    })();
  }, [schedules]);

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
