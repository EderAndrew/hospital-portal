import { useScheduleStore } from "@/stores/useSchedule.store";
import { StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales['pt-BR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
  today: "hoje"
};

LocaleConfig.defaultLocale = 'pt-BR';

export const AppointmentCalendar = () => {
  const { updateSchedule, schedule } = useScheduleStore();
  
  return <Calendar 
          onDayPress={day => {
            updateSchedule({ start_time: day.dateString });
          }}
          markedDates={{
            [schedule?.start_time || ""]: {selected: true, disableTouchEvent: true, selectedColor: '#3b82f6'}
          }}
          style={styles.card} />;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 360,
  },
});
