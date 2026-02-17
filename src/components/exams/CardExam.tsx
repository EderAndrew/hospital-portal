import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "../IconComponent";
import { Exam } from "@/types/exam.type";
import { useDefaultRoute } from "@/hooks/useRoute";

type Props = {
  exam: Exam;
};

export const CardExam = ({ exam }: Props) => {
  const { push } = useDefaultRoute();

  return (
    <TouchableOpacity
      key={exam.id}
      onPress={() => push("/createAppointment/[id]", { id: exam.id })}
      className="w-full flex flex-row justify-between items-center bg-white mb-2 p-3 rounded-lg"
    >
      <View className="flex flex-row gap-2">
        <View>
          <Text className="text-lg font-semibold">{exam.name}</Text>
          <Text className="text-slate-500">Tempo: {exam.duration}</Text>
          <Text className="text-slate-500">{exam.description}</Text>
        </View>
      </View>
      <View>
        <Icon name="ChevronRight" color={"#64748b"} size={22} />
      </View>
    </TouchableOpacity>
  );
};
