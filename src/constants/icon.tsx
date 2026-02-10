import { Icon } from "@/components/IconComponent";

interface IconProps {
  color?: string;
  size?: number;
  [key: string]: any;
}

const ICON_CONFIG = {
  home: {
    name: "House" as const,
    size: 24,
    label: "Home",
  },
  exams: {
    name: "ClipboardPlus" as const,
    size: 24,
    label: "Exames",
  },
  schedule: {
    name: "CalendarCheck" as const,
    size: 24,
    label: "Consultas",
  },
  profile: {
    name: "CircleUser" as const,
    size: 24,
    label: "Perfil",
  },
};

export const icon = {
  home: (props: IconProps) => (
    <Icon
      name={ICON_CONFIG.home.name}
      size={props.size || ICON_CONFIG.home.size}
      color={props.color}
    />
  ),
  exams: (props: IconProps) => (
    <Icon
      name={ICON_CONFIG.exams.name}
      size={props.size || ICON_CONFIG.exams.size}
      color={props.color}
    />
  ),
  schedule: (props: IconProps) => (
    <Icon
      name={ICON_CONFIG.schedule.name}
      size={props.size || ICON_CONFIG.schedule.size}
      color={props.color}
    />
  ),
  profile: (props: IconProps) => (
    <Icon
      name={ICON_CONFIG.profile.name}
      size={props.size || ICON_CONFIG.profile.size}
      color={props.color}
    />
  ),
};

export const iconlabels = {
  home: ICON_CONFIG.home.label,
  exams: ICON_CONFIG.exams.label,
  schedule: ICON_CONFIG.schedule.label,
  profile: ICON_CONFIG.profile.label,
};

export type IconName = keyof typeof icon;
export type IconConfig = typeof ICON_CONFIG;
