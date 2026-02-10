import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Schedules from "./schedules";
import Hystoric from "./hystoric";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import { View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function SchedulesLayout() {
  return (
    <SafeAreaView className="flex-1">
      <Header label="Meus agendamentos" isBack={false} />
      <View className="flex-1 w-full px-6 flex">
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: "#f3f4f6",
            },
          }}
        >
          <Tab.Screen name="Agendados" component={Schedules} />
          <Tab.Screen name="Historico" component={Hystoric} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}
