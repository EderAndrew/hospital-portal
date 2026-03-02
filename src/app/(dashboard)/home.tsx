import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View className="bg-white flex-1 flex items-center justify-between">
      <Text>Home Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}
