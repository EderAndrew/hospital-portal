import { Platform, Text, TextInput, View } from "react-native";
import { Icon } from "../IconComponent";

export const SearchExamComponent = () => {
  return (
    <View
      className={`flex flex-row items-center gap-2 border w-full rounded-md border-slate-200 bg-white ${Platform.OS === "ios" ? "p-3" : "px-2"}`}
    >
      <Icon name="Search" color={"#94a3b8"} />
      <TextInput placeholder="Procure por exames ou especialidade" />
    </View>
  );
};
