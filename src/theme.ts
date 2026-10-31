/** Brand colours — identical in both colour schemes (accents, fills, text on accents). */
export const C = {
  ink: '#0F2A33',
  sea: '#2EC4B6',
  seaDark: '#0E8C80',
  sand: '#EDE5D7',
  coral: '#FF6B5B',
  white: '#FFFFFF',
};

export const whiteA = (a: number) => `rgba(255,255,255,${a})`;

export const F = {
  display: 'Fraunces_600SemiBold',
  displayItalic: 'Fraunces_500Medium_Italic',
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
  /** Hairline that separates a surface from the background (only visible in dark mode). */
  surfaceEdge: string;
  text: string;
  /** Text colour with alpha, e.g. textA(0.5) for secondary text and hairlines. */
  textA: (a: number) => string;
  muted: string;
  /** High-contrast fill for selected chips, highlighted tiles etc. */
  inverse: string;
  onInverse: string;
  /** Brand colour for selected states (slots, dates, price cards) and its text colour. */
  primary: string;
  onPrimary: string;
  /** Brand colour for links and icons on the page background. */
  primaryInk: string;
  primaryTint: string;
  /** The one deep colour block of a screen (My AI card, wallet, ranking banner, tab bar). */
  deep: Pair;
  /** Accent for icons and highlights placed on `deep`. */
  onDeepAccent: string;
  sand: string;
  sandInk: string;
  seaInk: string;
  seaTint: string;
  coralTint: string;
  segment: string;
  segmentOn: string;
  emptyStar: string;
  /** Sea-chart contours drawn behind the top of a screen. */
  hero: { lines: string; linesOpacity: number; glow: string; glowOpacity: number };
  tabBar: { bg: string; icon: string; active: string; activeBg: string; centerFrom: string; centerTo: string; centerIcon: string };
  categories: { bg: string; ink: string }[];
  map: { land: string; grid: string; park: string; parkAlt: string; beach: string; seaFrom: string; seaTo: string; road: string; avenue: string; avenueEdge: string; rail: string; label: string; water: string };
  shadow: { card: string; soft: string; float: string; coral: string; primary: string; tabBar: string };
};

const rgba = (rgb: string) => (a: number) => `rgba(${rgb},${a})`;

export const LIGHT: Theme = {
  scheme: 'light',
  bg: '#F5F1EA',
  bgA: rgba('245,241,234'),
  surface: '#FFFFFF',
  surfaceEdge: 'transparent',
  text: '#0F2A33',
  textA: rgba('15,42,51'),
  muted: '#8B9497',
  inverse: '#0F2A33',
  onInverse: '#FFFFFF',
  primary: '#0F4C5C',
  onPrimary: '#FFFFFF',
  primaryInk: '#0F5F6E',
  primaryTint: 'rgba(15,76,92,0.08)',
  deep: ['#134652', '#0B2D37'],
  onDeepAccent: '#7FE0D4',
  sand: '#EDE5D7',
  sandInk: '#8A6430',
  seaInk: '#0E8C80',
  seaTint: 'rgba(46,196,182,0.14)',
  coralTint: 'rgba(255,107,91,0.12)',
  segment: '#EBE4D8',
  segmentOn: '#FFFFFF',
  emptyStar: '#E3DCD0',
  hero: { lines: '#0F4C5C', linesOpacity: 0.1, glow: '#E9DCC4', glowOpacity: 0.9 },
  tabBar: { bg: '#0F3540', icon: 'rgba(255,255,255,0.55)', active: '#FFFFFF', activeBg: 'rgba(255,255,255,0.12)', centerFrom: '#3FD3C4', centerTo: '#22AFA2', centerIcon: '#0B2D37' },
  categories: [
    { bg: '#DCEAEA', ink: '#0F5F6E' },
    { bg: '#D9F1EC', ink: '#0E8C80' },
    { bg: '#EDE2CF', ink: '#8A6430' },
    { bg: '#FBE2DC', ink: '#D9503F' },
  ],
  map: {
    land: '#F1ECE2',
    grid: '#FFFFFF',
    park: '#DCE9D6',
    parkAlt: '#D3E4CD',
    beach: '#EADCC3',
    seaFrom: '#CDE8E6',
    seaTo: '#A3D3D2',
    road: '#FFFFFF',
    avenue: '#F6E2BE',
    avenueEdge: '#FFFFFF',
    rail: '#C8C9C6',
    label: 'rgba(15,42,51,0.4)',
    water: '#2E8C94',
  },
  shadow: {
    card: '0px 1px 2px rgba(15,42,51,0.04), 0px 14px 34px -18px rgba(15,42,51,0.2)',
    soft: '0px 12px 30px -12px rgba(15,42,51,0.24)',
    float: '0px 20px 44px -14px rgba(15,42,51,0.32)',
    coral: '0px 14px 26px -10px rgba(255,107,91,0.7)',
    primary: '0px 10px 20px -8px rgba(15,76,92,0.55)',
    tabBar: '0px 18px 36px -12px rgba(11,45,55,0.55)',
  },
};

export const DARK: Theme = {
  scheme: 'dark',
  bg: '#0B1517',
  bgA: rgba('11,21,23'),
  surface: '#142225',
  surfaceEdge: 'rgba(255,255,255,0.06)',
  text: '#EAF1EF',
  textA: rgba('234,241,239'),
  muted: '#76898C',
  inverse: '#EAF1EF',
  onInverse: '#0F2A33',
  primary: '#2EC4B6',
  onPrimary: '#06221F',
  primaryInk: '#5FD3C6',
  primaryTint: 'rgba(95,211,198,0.12)',
  deep: ['#16444E', '#0F2F37'],
  onDeepAccent: '#7FE0D4',
  sand: '#1E2B2C',
  sandInk: '#E3C9A2',
  seaInk: '#4FD8CB',
  seaTint: 'rgba(46,196,182,0.15)',
  coralTint: 'rgba(255,107,91,0.15)',
  segment: '#142225',
  segmentOn: '#21363A',
  emptyStar: '#2A3B3E',
  hero: { lines: '#5FD3C6', linesOpacity: 0.07, glow: '#16444E', glowOpacity: 0.55 },
  tabBar: { bg: '#17343B', icon: 'rgba(255,255,255,0.5)', active: '#FFFFFF', activeBg: 'rgba(255,255,255,0.1)', centerFrom: '#3FD3C4', centerTo: '#22AFA2', centerIcon: '#0B2D37' },
  categories: [
    { bg: '#15333A', ink: '#7FC6D0' },
    { bg: '#11353A', ink: '#4FD8CB' },
    { bg: '#2B2A25', ink: '#E3C9A2' },
    { bg: '#3A2427', ink: '#FF8B7E' },
  ],
  map: {
    land: '#0F1C1E',
    grid: 'rgba(255,255,255,0.05)',
    park: '#13302B',
    parkAlt: '#15362F',
    beach: '#2A3030',
    seaFrom: '#0C3036',
    seaTo: '#0F4148',
    road: 'rgba(255,255,255,0.09)',
    avenue: '#574629',
    avenueEdge: 'rgba(255,255,255,0.12)',
    rail: 'rgba(255,255,255,0.18)',
    label: 'rgba(234,241,239,0.38)',
    water: '#5FD3C6',
  },
  shadow: {
    card: '0px 1px 2px rgba(0,0,0,0.3), 0px 14px 34px -18px rgba(0,0,0,0.7)',
    soft: '0px 12px 30px -12px rgba(0,0,0,0.6)',
    float: '0px 20px 44px -14px rgba(0,0,0,0.7)',
    coral: '0px 14px 26px -10px rgba(255,107,91,0.5)',
    primary: '0px 10px 20px -8px rgba(46,196,182,0.45)',
    tabBar: '0px 18px 36px -12px rgba(0,0,0,0.75)',
  },
};

/** Background of the always-dark My AI screen, top to bottom. */
export const AI_GRADIENT = ['#17505B', '#0F3640', '#0A242B', '#071A1F'] as const;

export const AVATAR_GRADIENTS: readonly (readonly [string, string])[] = [
  ['#0F4C5C', '#2EC4B6'],
  ['#FF6B5B', '#FFB48F'],
  ['#0F2A33', '#2A6F7C'],
  ['#2EC4B6', '#A6EDE3'],
  ['#D9B48A', '#F1E6D3'],
  ['#5E9A8E', '#BFDCD2'],
];
