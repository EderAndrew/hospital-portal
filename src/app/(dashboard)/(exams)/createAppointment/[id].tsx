import { AppointmentCalendar } from "@/components/appointments/appointmentCalendar";
import { AppointmentCard } from "@/components/appointments/appointmentCard";
import { AppointmentHour } from "@/components/appointments/appointmentHour";
import { Header } from "@/components/Header";
import { findExamsById } from "@/services/exams.service";
import { Exam } from "@/types/exam.type";
import { AvailableTimes } from "@/utils/availableTimes";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateAppointment() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const availableTimes = AvailableTimes();

  const [exam, setExam] = useState<Exam | null>(null);
  const [isTimeSelected, setIsTimeSelected] = useState<string>("");
  const [anotation, setAnotation] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    (async () => {
      const data = await findExamsById(id);
      setExam(data);
      setIsTimeSelected(availableTimes[0]);
    })();
  }, [id]);

  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <Header label="Novo Agendamento" />
      <ScrollView className="flex-1 w-full px-4">
        {exam && <AppointmentCard key={exam.id} exam={exam} />}
        <Text className="text-xl font-semibold mt-5 mb-3">
          Selecione a data
        </Text>
        <AppointmentCalendar />
        <Text className="text-xl font-semibold mt-5 mb-3">
          Selecione a hora:
        </Text>
        <AppointmentHour
          availableTimes={availableTimes}
          isTimeSelected={isTimeSelected}
          setIsTimeSelected={setIsTimeSelected}
        />
        <Text className="text-xl font-semibold mt-5 mb-3">
          Anotação adicional
        </Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          value={anotation}
          onChangeText={setAnotation}
          placeholder="Algum requerimento especial ou observação..."
          className="border h-28 rounded-lg border-slate-400 p-2 mb-6"
        />
        <TouchableOpacity className="bg-blue-400 border border-blue-500 rounded-lg p-4 justify-center items-center">
          <Text className="font-semibold text-white">
            Confirmar Agendamento
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
