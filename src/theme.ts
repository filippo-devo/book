/** Brand colours — identical in both colour schemes (accents, fills, text on accents). */
export const C = {
  ink: '#14171F',
  night: '#14171F',
  blue: '#2557E8',
  sky: '#8FB0FF',
  red: '#EF4444',
  mint: '#16A34A',
  gold: '#F5A524',
  goldDark: '#C98512',
  amberSoft: '#FDEFD3',
  white: '#FFFFFF',
};

export const whiteA = (a: number) => `rgba(255,255,255,${a})`;

/** One sans family everywhere; "display" is the heavy weight used for screen titles and big numbers. */
export const F = {
  display: 'PlusJakartaSans_800ExtraBold',
  displayItalic: 'PlusJakartaSans_800ExtraBold',
  400: 'PlusJakartaSans_400Regular',
  500: 'PlusJakartaSans_500Medium',
  600: 'PlusJakartaSans_600SemiBold',
  700: 'PlusJakartaSans_700Bold',
  800: 'PlusJakartaSans_800ExtraBold',
} as const;

export type Scheme = 'light' | 'dark';
export type ThemeMode = 'system' | Scheme;

type Pair = readonly [string, string];

/** Semantic colours that change between light and dark mode. */
export type Theme = {
  scheme: Scheme;
  bg: string;
  /** Page background with alpha, for fades over content. */
  bgA: (a: number) => string;
  surface: string;
  /** Hairline around cards and bars. */
  surfaceEdge: string;
  text: string;
  /** Text colour with alpha, e.g. textA(0.5) for secondary text and hairlines. */
  textA: (a: number) => string;
  muted: string;
  /** High-contrast fill for selected chips, highlighted tiles etc. */
  inverse: string;
  onInverse: string;
  /** The one accent: buttons, selected slots and dates, links. */
  primary: string;
  onPrimary: string;
  /** Accent for links and icons on the page background. */
  primaryInk: string;
  primaryTint: string;
  /** Dark block for the few feature cards (assistant, wallet, ranking banner, podium). */
  deep: Pair;
  /** Light grey secondary surface (pills, date tiles, info boxes). */
  soft: string;
  softInk: string;
  /** Positive states: confirmed, verified, available. */
  mintInk: string;
  mintTint: string;
  redTint: string;
  segment: string;
  segmentOn: string;
  emptyStar: string;
  tabBar: { bg: string; edge: string; icon: string; active: string; activeBg: string; centerFrom: string; centerTo: string; centerIcon: string };
  categories: { bg: string; ink: string }[];
  map: { land: string; grid: string; park: string; parkAlt: string; beach: string; seaFrom: string; seaTo: string; road: string; avenue: string; avenueEdge: string; rail: string; label: string; water: string };
  shadow: { card: string; soft: string; float: string; cta: string; primary: string; tabBar: string };
};

const rgba = (rgb: string) => (a: number) => `rgba(${rgb},${a})`;

export const LIGHT: Theme = {
  scheme: 'light',
  bg: '#F6F7F9',
  bgA: rgba('246,247,249'),
  surface: '#FFFFFF',
  surfaceEdge: '#E9EBEF',
  text: '#14171F',
  textA: rgba('20,23,31'),
  muted: '#8A909C',
  inverse: '#14171F',
  onInverse: '#FFFFFF',
  primary: '#2557E8',
  onPrimary: '#FFFFFF',
  primaryInk: '#1F4FD8',
  primaryTint: 'rgba(37,87,232,0.08)',
  deep: ['#1C2130', '#14171F'],
  soft: '#EEF0F3',
  softInk: '#4B5263',
  mintInk: '#15803D',
  mintTint: 'rgba(22,163,74,0.1)',
  redTint: 'rgba(239,68,68,0.1)',
  segment: '#ECEEF2',
  segmentOn: '#FFFFFF',
  emptyStar: '#E3E6EB',
  tabBar: { bg: '#FFFFFF', edge: '#E9EBEF', icon: '#8A909C', active: '#1F4FD8', activeBg: 'transparent', centerFrom: '#2F63F0', centerTo: '#1F4FD8', centerIcon: '#FFFFFF' },
  categories: [
    { bg: '#FFFFFF', ink: '#1F4FD8' },
    { bg: '#FFFFFF', ink: '#1F4FD8' },
    { bg: '#FFFFFF', ink: '#1F4FD8' },
    { bg: '#FFFFFF', ink: '#1F4FD8' },
  ],
  map: {
    land: '#F2F3F5',
    grid: '#FFFFFF',
    park: '#DDEDDD',
    parkAlt: '#D3E8D3',
    beach: '#E6E8EC',
    seaFrom: '#D3E2F7',
    seaTo: '#B9D0F2',
    road: '#FFFFFF',
    avenue: '#FBE7C4',
    avenueEdge: '#FFFFFF',
    rail: '#C9CDD4',
    label: 'rgba(20,23,31,0.4)',
    water: '#4A72B8',
  },
  shadow: {
    card: '0px 1px 2px rgba(20,23,31,0.04)',
    soft: '0px 6px 16px -8px rgba(20,23,31,0.16)',
    float: '0px 14px 34px -12px rgba(20,23,31,0.22)',
    cta: '0px 10px 20px -10px rgba(37,87,232,0.6)',
    primary: '0px 8px 16px -8px rgba(37,87,232,0.5)',
    tabBar: '0px -1px 0px rgba(20,23,31,0.04)',
  },
};

export const DARK: Theme = {
  scheme: 'dark',
  bg: '#0E1014',
  bgA: rgba('14,16,20'),
  surface: '#181B21',
  surfaceEdge: 'rgba(255,255,255,0.07)',
  text: '#F2F4F7',
  textA: rgba('242,244,247'),
  muted: '#868D99',
  inverse: '#F2F4F7',
  onInverse: '#14171F',
  primary: '#4D7BFF',
  onPrimary: '#FFFFFF',
  primaryInk: '#7FA1FF',
  primaryTint: 'rgba(77,123,255,0.14)',
  deep: ['#232836', '#1A1E28'],
  soft: '#20242C',
  softInk: '#B9BFCB',
  mintInk: '#4ADE80',
  mintTint: 'rgba(74,222,128,0.12)',
  redTint: 'rgba(239,68,68,0.16)',
  segment: '#181B21',
  segmentOn: '#2A2F39',
  emptyStar: '#323742',
  tabBar: { bg: '#15181E', edge: 'rgba(255,255,255,0.07)', icon: '#868D99', active: '#7FA1FF', activeBg: 'transparent', centerFrom: '#5A86FF', centerTo: '#3D6CF5', centerIcon: '#FFFFFF' },
  categories: [
    { bg: '#181B21', ink: '#7FA1FF' },
    { bg: '#181B21', ink: '#7FA1FF' },
    { bg: '#181B21', ink: '#7FA1FF' },
    { bg: '#181B21', ink: '#7FA1FF' },
  ],
  map: {
    land: '#15181D',
    grid: 'rgba(255,255,255,0.05)',
    park: '#18291F',
    parkAlt: '#1B2E22',
    beach: '#252930',
    seaFrom: '#16233A',
    seaTo: '#1B2C4A',
    road: 'rgba(255,255,255,0.09)',
    avenue: '#4A3D28',
    avenueEdge: 'rgba(255,255,255,0.12)',
    rail: 'rgba(255,255,255,0.18)',
    label: 'rgba(242,244,247,0.38)',
    water: '#8FB0FF',
  },
  shadow: {
    card: '0px 1px 2px rgba(0,0,0,0.3)',
    soft: '0px 8px 20px -10px rgba(0,0,0,0.6)',
    float: '0px 16px 36px -12px rgba(0,0,0,0.7)',
    cta: '0px 10px 20px -10px rgba(77,123,255,0.5)',
    primary: '0px 8px 16px -8px rgba(77,123,255,0.45)',
    tabBar: '0px -1px 0px rgba(0,0,0,0.4)',
  },
};

/** Background of the always-dark assistant screen, top to bottom. */
export const AI_GRADIENT = ['#1E2433', '#171B26', '#12151D', '#0E1014'] as const;

export const AVATAR_GRADIENTS: readonly (readonly [string, string])[] = [
  ['#2557E8', '#5C86F5'],
  ['#F08A4B', '#F6B183'],
  ['#14171F', '#3A4152'],
  ['#16A34A', '#5CCB86'],
  ['#C9CED8', '#E6E9EE'],
  ['#0E9AA7', '#5CC6CF'],
];
