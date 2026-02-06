import * as icons from 'lucide-react-native/icons';

interface IconProps {
    name: keyof typeof icons;
    size?: number;
    color?: string;
}

export const Icon = ({name, color, size}: IconProps) => {
    const LucideIcon = icons[name];


    return <LucideIcon size={size} color={color} />
}