import { Exam } from "@/types/exam.type";
import { View, Text } from "react-native";
import { Icon } from "../IconComponent";

type Props = {
  exam: Exam | null;
};

export const AppointmentCard = ({ exam }: Props) => {
  return (
    <View className="w-full rounded-lg bg-blue-400 p-2">
      <View className="flex flex-row justify-between">
        <Text className="font-semibold text-2xl text-white">{exam?.name}</Text>
        <View className="flex flex-row items-center gap-2">
          <Icon name="Clock" size={18} color={"#fff"} />
          <Text className="text-lg font-semibold text-white">
            {exam?.duration}
          </Text>
        </View>
      </View>
      <Text className="text-lg font-semibold text-white mt-3">
        Preparação: {exam?.preparetion}
      </Text>
      <Text className="text-lg font-semibold text-white">
        {exam?.description}
      </Text>
    </View>
  );
};
