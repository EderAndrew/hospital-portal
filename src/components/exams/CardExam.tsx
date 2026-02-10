import * as icons from "lucide-react-native/icons";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "../IconComponent";
import { Exam } from "@/types/exam.type";

type Props = {
  exam: Exam;
};

type IconProps = {
  name: keyof typeof icons;
  color: string;
  bgColor: string;
};

export const CardExam = ({ exam }: Props) => {
  const specialtyIconMap: Record<string, IconProps> = {
    Hematologia: {
      name: "Droplet",
      color: "#f87171",
      bgColor: "#fee2e2",
    },
    Radiologia: {
      name: "Scan",
      color: "#60a5fa",
      bgColor: "#dbeafe",
    },
    Cardiologia: {
      name: "HeartPulse",
      color: "#dc2626",
      bgColor: "#fecaca",
    },
  };

  const specialty = specialtyIconMap[exam.specialty] || {
    name: "Activity",
    color: "#94a3b8",
    bgColor: "#f1f5f9",
  };

  const { name: iconName, color, bgColor } = specialty;

  return (
    <View className="w-full flex flex-row justify-between items-center bg-white mb-2 p-3 rounded-lg">
      <View className="flex flex-row gap-2">
        <View
          className="p-4 rounded-xl h-18 w-18 flex justify-center items-center"
          style={{ backgroundColor: bgColor }}
        >
          <Icon name={iconName} color={color} />
        </View>
        <View>
          <Text className="text-lg font-semibold">{exam.name}</Text>
          <Text className="text-slate-500">{exam.specialty}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon name="ChevronRight" color={"#64748b"} size={22} />
      </TouchableOpacity>
    </View>
  );
};
