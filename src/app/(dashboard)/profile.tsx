import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Profile() {
  return (
    <SafeAreaView>
      <Text>profile Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
