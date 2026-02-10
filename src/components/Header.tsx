import { TouchableOpacity, View, Text } from "react-native";
import { Icon } from "@/components/IconComponent";
import { useDefaultRoute } from "@/hooks/useRoute";

type Props = {
  label: string;
  isBack?: boolean;
};

export const Header = ({ label, isBack = true }: Props) => {
  const { back } = useDefaultRoute();

  return (
    <View
      className={`flex w-full h-16 flex-row items-center border-b-2 border-slate-200 px-4 mb-6 ${isBack ? "justify-between" : "justify-center"}`}
    >
      <TouchableOpacity
        onPress={() => back()}
        className="flex flex-row items-center gap-2"
      >
        {isBack && <Icon name="ChevronLeft" size={28} color="black" />}
      </TouchableOpacity>
      <Text className="text-2xl">{label}</Text>
      {isBack && <View className="w-6 h-6"></View>}
    </View>
  );
};
