import {
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "./IconComponent";
import { Noop } from "react-hook-form";

type Props = {
  type: "email-address" | "password" | "default" | "numeric";
  label: string;
  icon?: keyof typeof import("lucide-react-native/icons");
  placeholder: string;
  isIcon?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: Noop;
  onIconPress?: () => void;
};

export const InputComponent = ({
  type,
  label,
  icon,
  placeholder,
  isIcon = false,
  value,
  onChangeText,
  onBlur,
  onIconPress
}: Props) => {
  return (
    <KeyboardAvoidingView className="w-full flex gap-2">
      <Text className="text-lg">{label}</Text>
      <View
        className={`border border-gray-300 rounded-lg w-full mb-4 flex flex-row items-center gap-2
                ${Platform.OS === "ios" ? "p-4" : "p-2 "} bg-gray-50`}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#9ca3af"}
          className="flex-1 text-black"
          onBlur={onBlur}
          keyboardType={type === "email-address" ? "email-address" : "default"}
          secureTextEntry={type === "password"}
          value={value}
          onChangeText={onChangeText}
        />
        {isIcon && icon && (
          <TouchableOpacity onPress={onIconPress}>
             <Icon name={icon} size={20} color="#9ca3af" />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
