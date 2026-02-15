import * as icons from "lucide-react-native/icons";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "../IconComponent";
import { Exam } from "@/types/exam.type";
import { useDefaultRoute } from "@/hooks/useRoute";

type Props = {
  isSelected: string;
  exam: Exam[];
};

type IconProps = {
  name: keyof typeof icons;
  color: string;
  bgColor: string;
};

export const CardExam = ({ isSelected, exam }: Props) => {
  const { push } = useDefaultRoute();

  return (
    <>
      {exam.map((ex) => (
        <>
          {isSelected === ex.specialty.id && (
            <TouchableOpacity
              key={ex.id}
              onPress={() => push(`/createAppointment/${ex.id}`)}
              className="w-full flex flex-row justify-between items-center bg-white mb-2 p-3 rounded-lg"
            >
              <View className="flex flex-row gap-2">
                <View>
                  <Text className="text-lg font-semibold">{ex.name}</Text>
                  <Text className="text-slate-500">Tempo: {ex.duration}</Text>
                  <Text className="text-slate-500">{ex.description}</Text>
                </View>
              </View>
              <View>
                <Icon name="ChevronRight" color={"#64748b"} size={22} />
              </View>
            </TouchableOpacity>
          )}
        </>
      ))}
    </>
  );
};
