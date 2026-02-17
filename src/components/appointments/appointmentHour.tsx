import { TouchableOpacity, View, Text } from "react-native";

type Props = {
  availableTimes: any[];
  isTimeSelected: string;
  setIsTimeSelected: (value: string) => void;
};
export const AppointmentHour = ({
  availableTimes,
  isTimeSelected,
  setIsTimeSelected,
}: Props) => {
  return (
    <View className="flex flex-row items-center justify-center flex-wrap gap-2">
      {availableTimes.map((time: string) => (
        <TouchableOpacity
          key={time}
          className={`${isTimeSelected === time ? "bg-blue-200 border border-blue-400" : "bg-white border border-slate-400"} w-22 p-4 rounded-xl flex justify-center items-center `}
          onPress={() => setIsTimeSelected(time)}
        >
          <Text
            className={`${isTimeSelected === time ? "text-blue-400" : "text-black"} font-bold`}
          >
            {time}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
