import {createTheme} from '@shopify/restyle';

const palette = {
  blueLight: '#1267CD',
  bluePrimary: '#14458E',
  blueDark: '#102959',

  redLight: '#DF3D3F',
  redPrimary: '#A9070A',
  redDark: '#780002',

  yellowLight: '#FCD24A',
  yellowPrimary: '#FACD00',
  yellowDark: '#EE9A01',

  greyLight: '#F1F1F1',
  greyPrimary: '#A8A8A8',

  grey: '#D3D3D3',
  black: '#000000',
  white: '#FFFFFF',
};

const theme = createTheme({
  /*================================================ DESIGN PALETTE ============================================= */
  colors: {
    mainBackground: palette.white,

    inputBackground: palette.greyLight,
    inputFocus: palette.blueLight,
    inputBlur: palette.greyPrimary,
    inputPlaceholder: palette.greyPrimary,

    mainText: palette.black,
    subtitleText: palette.greyPrimary,

    headerBorder: palette.greyLight,

    iconDefaultColor: palette.greyPrimary,
    iconContrastColor: palette.white,

    registerHeader: palette.bluePrimary,

    linkDefault: palette.blueLight,

    primaryButton: palette.bluePrimary,
    secondaryButton: palette.redLight,

    comingSoonPlaceholderText: palette.redLight,

    authenticationLink: palette.blueLight,
    authenticationHeaderTint: palette.bluePrimary,

    scheduleItemDate: palette.bluePrimary,

    horizontalRule: palette.greyPrimary,

    ticketDateHighlight: palette.yellowPrimary,
    ticketBottomBackground: palette.white,
    ticketBackground: palette.bluePrimary,
    ticketTextColor: palette.white,
    ticketSubtext: palette.grey,

    viewTicketBackground: palette.blueDark,
    viewTicketHeaderTint: palette.white,

    black: palette.black,
    white: palette.white,

    placeholder: palette.greyLight,
    testBackground: palette.blueLight,
  },
  spacing: {
    none: 0,
    s: 8,
    m: 12,
    l: 16,
    xl: 24,
    xxl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  /* ================================================= VARIANTS ================================================= */
  buttonVariants: {
    default: {
      alignItems: 'center',
      borderRadius: 12,
      backgroundColor: 'secondaryButton',
      justifyContent: 'center',
      height: 48,
    },
    authentication: {
      alignItems: 'center',
      borderRadius: 12,
      backgroundColor: 'primaryButton',
      justifyContent: 'center',
      height: 48, // todo change this height
    },
  },
  inputVariants: {
    default: {},
    authentication: {
      height: 46, // todo change this height
      flexGrow: 1,
    },
  },
  textVariants: {
    default: {},
    heading1: {
      color: 'mainText',
      fontFamily: 'NunitoSans-ExtraBold',
      fontSize: 28,
      lineHeight: 42,
    },
    heading2: {
      color: 'mainText',
      fontFamily: 'NunitoSans-Bold',
      fontSize: 20,
      lineHeight: 30,
    },
    body: {
      color: 'mainText',
      fontFamily: 'NunitoSans-Regular',
      fontSize: 16,
      lineHeight: 24,
    },
    subtitle1: {
      color: 'subtitleText',
      fontFamily: 'NunitoSans-Regular',
      fontSize: 14,
      lineHeight: 21,
    },
    subtitle2: {
      color: 'subtitleText',
      fontFamily: 'NunitoSans-Regular',
      fontSize: 12,
      lineHeight: 18,
    },
  },
});

export type Theme = typeof theme;
export default theme;
