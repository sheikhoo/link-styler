export interface Setting {
    bg: boolean;
    bgColor: string;
    textColor: string;
    borderRadius: number;
    showIcon: boolean;
    iconColor: boolean;
    underline: boolean;
    link: LinkSetting;
    atsign: AtsignSetting;
    hashTag: hashTagSetting;
}
interface LinkSetting {
    pathnameLengthLimit: number;
    bg?: boolean;
    bgColor?: string;
    textColor?: string;
    borderRadius?: number;
    showIcon?: boolean;
    iconColor?: boolean;
    underline?: boolean;
}
interface AtsignSetting {
    enable: boolean;
    path: string;
    bg?: boolean;
    bgColor?: string;
    textColor?: string;
    borderRadius?: number;
    showIcon?: boolean;
    underline?: boolean;
    removeAtsignChar?: boolean;
}
interface hashTagSetting {
    enable: boolean;
    path: string;
    bg?: boolean;
    bgColor?: string;
    textColor?: string;
    borderRadius?: number;
    showIcon?: boolean;
    underline?: boolean;
    removeHashTagChar?: boolean;
}
export {};
