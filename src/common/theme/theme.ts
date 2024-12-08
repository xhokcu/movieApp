import { FlexAlignType, FlexStyle, TextStyle } from 'react-native';

export const theme = {
  display: {
    flex: 'flex' as FlexStyle['display'],
    none: 'none' as FlexStyle['display'],
    block: 'block' as FlexStyle['display'],
  },
  flexDirection: {
    row: 'row' as FlexStyle['flexDirection'],
    column: 'column' as FlexStyle['flexDirection'],
  },
  alignItems: {
    center: 'center' as FlexAlignType,
    start: 'flex-start' as FlexAlignType,
    end: 'flex-end' as FlexAlignType,
  },
  justifyContent: {
    center: 'center' as FlexStyle['justifyContent'],
    spaceBetween: 'space-between' as FlexStyle['justifyContent'],
    start: 'flex-start' as FlexStyle['justifyContent'],
  },
  position: {
    absolute: 'absolute' as FlexStyle['position'],
    relative: 'relative' as FlexStyle['position'],
  },
  colorScheme: {
    primary: {
      white: {
        10: '#fff',
      },
      green: {
        10: '#e6f6f4',
        20: '#d9f2ef',
        30: '#b0e4dd',
        40: '#00a991',
        50: '#009883',
        60: '#008774',
        70: '#007f6d',
        80: '#006557',
        90: '#004c41',
        100: '#003b33',
      },
      dark: {
        10: '#f5f6f7',
        20: '#f0f2f3',
        30: '#dfe4e6',
        40: '#98a7ae',
        50: '#89969d',
        60: '#7a868b',
        70: '#727d83',
        80: '#5b6468',
        90: '#444b4e',
        100: '#353a3d',
      },
    },
    secondary: {},
  },
  fonts: {},
  fontSize: {
    h1: 64,
    h2: 40,
    h3: 36,
    h4: 32,
    h5: 24,
    h6: 20,
    h7: 18,
    h8: 16,
    h9: 14,
    h10: 12,
  },
  fontWeights: {},
  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 48,
    11: 56,
    12: 64,
    13: 80,
    14: 120,
  },
  borderRadius: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 40,
    8: 48,
    9: 56,
    10: 64,
    11: 80,
    12: 100,
  },
  borderWidth: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
  },
  textDecorationLine: {
    underline: 'underline' as TextStyle['textDecorationLine'],
  },
};
