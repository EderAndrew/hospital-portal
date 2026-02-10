import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "./IconComponent";
import { Schedule } from "@/types/schedule.type";

type Props = {
  schedule: Schedule;
};

export const CardScheduleComponent = ({ schedule }: Props) => {
  const dateCorrect = new Date(schedule.date).toLocaleString().split(",")[0];
  return (
    <View className="w-full bg-white p-2 rounded-lg">
      <Text className="font-semibold text-blue-500">
        {schedule.exam.name.toUpperCase()}
      </Text>
      <Text className="font-semibold">{schedule.exam.specialty}</Text>
      <Text className="text-sm text-slate-400">
        {dateCorrect} * {schedule.time}
      </Text>
      <View className="flex flex-row items-center gap-2">
        <Icon name="File" size={14} color={"#94a3b8"} />
        <Text className="italic text-slate-400">
          {schedule.exam.preparetion}
        </Text>
      </View>
      <View className="flex w-full mt-2 items-end">
        <TouchableOpacity className="flex flex-row items-center gap-2 bg-red-200 w-32 p-2 justify-center rounded-lg">
          <Text className="font-semibold text-red-500">Cancelar</Text>
          <Icon name="Trash2" size={14} color={"#ef4444"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
