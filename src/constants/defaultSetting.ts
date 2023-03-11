import { Setting } from '../interface';

export const DefaultSetting: Setting = {
  bg: true,
  bgColor: '#a9a9a94f',
  textColor: '#000000d9',
  borderRadius: 15,
  showIcon: true,
  iconColor: true,
  underline: false,
  link: {
    pathnameLengthLimit: 20,
  },
  atsign: {
    enable: true,
    path: '',
    bg: false,
    textColor: '#e31a1ad9',
    showIcon: true,
    underline: true,
  },
  hashTag: {
    enable: true,
    path: '',
    bg: false,
    textColor: '#0250ffd9',
    showIcon: true,
    underline: false,
  },
};
