const theme = {
  palette: {
    primary: '#F6C61C',
    text: {
      primary: '#222',
      secondary: '#444',
      light: '#666',
      faded: '#BBB',
      dLight: '#DDD',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  status: {
    danger: '#F44336',
    warning: '#FF6E40',
    success: '#21CE99',
    info: '#F6C61C',
    infoBg: '#FFF8E1',
  },
  design: {
    bottomNav: {
      inactive: '#DCDCDC',
    },
    icon: {
      light: '#DCDCDC',
    },
    layoutHeader: {
      day: {
        dark: '#F6C61C',
        light: '#FFBFAC',
      },
      night: {
        dark: '#0F4C81',
        light: '#0F4C81',
      },
    },
    mainYellow: '#F6C61C',
    textHighlight: '#F47F26',
    background: {
      dark: '#E0E0E0',
      light: '#F5F5F5',
      // light: '#F6C61C',
      topMenuItem: '#AFAFAF',
      // topMenuItem: '#F6C61C',
      // bottomNav: '#F9F9F9',
      // light: '#FFFFFF',
      bottomNav: '#F5F5F5',
      modal: 'rgba(0,0,0,0.7)',
    },
    textLink: '#5f97ef',
    boxShadow: {
      // for IOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.16,
      shadowRadius: 2,
      // for Android
      elevation: 2,
      // Common
      borderWidth: 0.1,
      backgroundColor: '#FFF', // cannot be transparent
      borderColor: '#FFF',
    },
    reward: {
      // light: '#9BE15D',
      // dark: '#00D866',
      light: '#F6C61C',
      dark: '#F6C61C',
      text: '#08CEBF',
      fab: '#A4A4FF',
      bg: '#50E3C2',
      triangle:
        'linear-gradient(135deg, rgba(161, 221, 60, 1) 68px, transparent 0)',
      triangle225:
        'linear-gradient(225deg, rgba(161, 221, 60, 1) 68px, transparent 0)',
    },
    wealth: {
      // light: '#7CC8FE',
      // light: '#A4A4FF',
      // dark: '#A4A4FF',
      light: '#F6C61C',
      dark: '#F6C61C',
      text: '#A4A4FF',
      fab: '#A4A4FF',
      bg: '#A4A4FF',
      sliderLight: 'rgba(164, 164, 255, 0.3)',
      triangle:
        'linear-gradient(135deg, rgba(90, 179, 243, 1) 68px, transparent 0)',
      triangle225:
        'linear-gradient(225deg, rgba(90, 179, 243, 1) 68px, transparent 0)',
    },
    center: {
      // light: '#FFE168',
      // dark: '#FF952B',
      light: '#F6C61C',
      dark: '#F6C61C',
      text: '#FF952B',
      fab: '#A4A4FF',
      bg: '#FDA658',
      triangle:
        'linear-gradient(135deg, rgba(255, 159, 63, 1) 68px, transparent 0)',
      triangle225:
        'linear-gradient(225deg, rgba(255, 159, 63, 1) 68px, transparent 0)',
    },
    default: {
      // light: '#FDDE26',
      light: '#F6C61C',
      dark: '#F6C61C',
      text: '#A4A4FF',
      fab: '#A4A4FF',
      bg: '#F6C61C',
      triangle:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 59px, transparent 0)',
      triangle225: 'linear-gradient(225deg, #F6C61C 68px, transparent 0)',
    },
  },
};

export default theme;

export function transformColor(color: string): string {
  switch (color) {
    case 'primary':
      return theme.palette.primary;
    case 'textSecondary':
      return theme.palette.text.secondary;
    case 'error':
      return theme.status.danger;
    case 'textPrimary':
      return theme.palette.text.primary;
    case 'disabled':
      return theme.palette.text.disabled;
    default:
      return color;
  }
}

export function getTypographyVariant(variant: string) {
  switch (variant) {
    case 'h5':
      return { fontSize: 24, fontWeight: '400', letterSpacing: 0 };
    case 'h6':
      return { fontSize: 20, fontWeight: '400', letterSpacing: 0.15 };
    case 'subtitle1':
      return { fontSize: 18, fontWeight: '400', letterSpacing: 0.15 };
    case 'body2':
      return { fontSize: 14, fontWeight: '400', letterSpacing: 0.25 };
    case 'caption':
      return { fontSize: 12, fontWeight: '400', letterSpacing: 0.4 };
    case 'body1':
    default:
      return { fontSize: 16, fontWeight: '400', letterSpacing: 0.5 };
  }
}
