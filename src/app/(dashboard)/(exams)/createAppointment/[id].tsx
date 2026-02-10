import { Header } from "@/components/Header";
import { findExamsById } from "@/services/exams.service";
import { Exam } from "@/types/exam.type";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateAppointment() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [exam, setExam] = useState<Exam | null>(null);

  useEffect(() => {
    (async () => {
      const data = await findExamsById(id);
      setExam(data);
    })();
  }, []);
  return (
    <SafeAreaView className="bg-gray-100 flex-1 flex items-center">
      <Header label="Agendar" />
      <Text>{exam?.name}</Text>
    </SafeAreaView>
  );
}
function usestate<T>(arg0: null) {
  throw new Error("Function not implemented.");
}
