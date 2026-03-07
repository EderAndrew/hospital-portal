import { AppointmentCalendar } from "@/components/appointments/appointmentCalendar";
import { AppointmentCard } from "@/components/appointments/appointmentCard";
import { AppointmentHour } from "@/components/appointments/appointmentHour";
import { Header } from "@/components/Header";
import { findExamsById } from "@/services/exams.service";
import { Exam } from "@/types/exam.type";
import { AvailableTimes } from "@/utils/availableTimes";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@/stores/useAuth.store";
import { createAppointments } from "@/services/appointments.service";
import { Schedule } from "@/types/schedule.type";

export default function CreateAppointment() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useAuthStore();
  const availableTimes = AvailableTimes();
  const router = useRouter();

  const [exam, setExam] = useState<Exam | null>(null);
  const [date, setDate] = useState<string>("");
  const [isTimeSelected, setIsTimeSelected] = useState<string>("");
  const [anotation, setAnotation] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    (async () => {
      const data = await findExamsById(id);
      setExam(data);
      setIsTimeSelected(availableTimes[0]);
    })();
  }, [id]);

  const handlerSchedulesAppointment = async () => {
    setIsLoading(true);
    const dateWithSelectedHour = `${date}T${isTimeSelected}:00`;
    const schedule = {
      patient_id: user?.patient.id,
      exam_id: id,
      doctor_id: "2b7a1bb6-6aee-4d4f-aa52-f9783a981079",
      room_id: "d1a4b980-f6a9-46f5-90e5-ad7300ec44e4",
      start_time: dateWithSelectedHour,
      notes: anotation,
      scheduled_by: user?.id,
    } as Schedule;
    try {
      const info = await createAppointments(schedule);

      if (!info) {
        Alert.alert(
          "Erro ao Agendar",
          "Ocorreu algum erro ao agendar. Tente novamente.",
        );
        return;
      }

      router.back();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <Header label="Novo Agendamento" />
      <ScrollView className="flex-1 w-full px-4">
        {exam && <AppointmentCard key={exam.id} exam={exam} />}
        <Text className="text-xl font-semibold mt-5 mb-3">
          Selecione a data
        </Text>
        <AppointmentCalendar setDate={setDate} dateSelected={date} />
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
        <TouchableOpacity
          className="bg-blue-400 border border-blue-500 rounded-lg p-4 justify-center items-center"
          onPress={handlerSchedulesAppointment}
          disabled={isLoading}
        >
          <Text className="font-semibold text-white">
            {isLoading ? "Agendando..." : "Confirmar Agendamento"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" hidden />
    </SafeAreaView>
  );
}
