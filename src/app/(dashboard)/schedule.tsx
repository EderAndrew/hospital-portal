import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Schedule() {
  return (
    <SafeAreaView>
      <Text>Schedule Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
