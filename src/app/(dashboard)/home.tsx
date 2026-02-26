import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <SafeAreaView className="bg-white flex-1 flex items-center justify-between">
      <Text>Home Screen</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
