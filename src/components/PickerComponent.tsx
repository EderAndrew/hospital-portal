import { Picker } from "@react-native-picker/picker"

type Props = {
    selectedHealthCare: string;
    setSelectedHealthCare: (value: string) => void;
}

export const PickerComponent = ({ selectedHealthCare, setSelectedHealthCare }: Props) => {
    return (
        <Picker
            selectedValue={selectedHealthCare}
            onValueChange={(itemValue, itemIndex) => setSelectedHealthCare(itemValue)}
        >
            <Picker.Item label="Amil" value="amil" />
            <Picker.Item label="Bradesco" value="bradesco" />
        </Picker>
    )
}