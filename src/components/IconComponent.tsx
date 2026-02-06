import * as icons from 'lucide-react-native/icons';
import { StyleProp, ViewStyle } from 'react-native';

interface IconProps {
    name: keyof typeof icons;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>
}

export const Icon = ({name, color, size, style}: IconProps) => {
    const LucideIcon = icons[name];


    return <LucideIcon size={size} color={color} style={style} />
}