import {moderateScale} from './Metrics';

const type = {
  primary: 'Lato-Medium',
  secondary: 'Lato-Regular',
  bold: 'Lato-Semibold',
};

const size = {
  xxLarge: moderateScale(26),
  large: moderateScale(22),
  medium: moderateScale(16),
  small: moderateScale(14),
};

export default {
  type,
  size,
};
