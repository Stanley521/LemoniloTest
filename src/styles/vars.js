import { Platform } from 'react-native'
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const stanleyPixelRatio = 1.75;
// var ratio = stanleyPixelRatio / PixelRatio.get();
// need more time to implement

// var ratio = 0.22;
var ratio = Platform.OS == 'android' ? 0.12 : 0.13;
const hp = (px) => {
    return px
}
const style_vars = {
    blue_1: '#53D0CC',
    blue_2: '#6AE3E0',
    blue_3: '#DCF2F0',
    blue_hover: '#ACE4E3',
    darkblue: 'rgb(0,0,213)',
    red: '#FC4F6E',
    pink: '#FBDDE5',
    black: '#1A1A1A',
    darkgrey: '#808080',
    grey: '#b3b3b3',
    grey50: 'rgba(181,179,180,0.5)',
    green: '#00B14F',
    lightgrey: '#F7F5F6',
    goldbrown: '#996515',
    font_07: hp(9.1 * ratio),
    font_08: hp(10.4 * ratio),
    font_1: hp(13 * ratio),
    font_2: hp(14 * ratio),
    font_3: hp(16 * ratio),
    font_header: hp(18 * ratio),
    font_bold: 'Roboto-Bold',
    font_italic: 'Roboto-Italic'
}
export default style_vars;
