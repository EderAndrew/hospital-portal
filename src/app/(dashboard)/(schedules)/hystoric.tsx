import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Hystoric() {
  return (
    <SafeAreaView>
      <Text> agendamentos antigos</Text>
      <StatusBar style="auto" hidden/>
    </SafeAreaView>
  );
}
