import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const {width, height} = Dimensions.get('window');

export const WINDOW = Dimensions.get('window');
export const hasNotch = DeviceInfo.hasNotch();

export const isPhoneX = hasNotch;

export const isPhone12 =
  Platform.OS === 'ios' && (height === 844 || height === 926);

export const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet';

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = isPhone12 ? 844 : 812;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number) => {
  const moderateHeight =
    Platform.OS === 'ios'
      ? isPhoneX
        ? WINDOW.height - 78
        : isPhone12
        ? WINDOW.height - 122
        : WINDOW.height
      : WINDOW.height - 24;
  return ((size - 1) * moderateHeight) / 667;
};

// Used via Metrics.baseMargin
const Metrics = {
  zero: 0,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  textFieldRadius: 6,
  borderLineWidth: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? verticalScale(64) : verticalScale(54),
  buttonRadius: 4,
  icons: {
    tiny: 16,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  headerShadow: {
    shadowColor: 'grey',
    shadowOffset: {width: 1, height: 2.5},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  size: {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 25,
    xxxl: 30,
  },
};
export {scale, verticalScale, moderateScale, Metrics};
