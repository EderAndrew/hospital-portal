import { StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

export const AppointmentCalendar = () => {
  return <Calendar style={styles.card} />;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 360,
  },
});
