/** Brand colours — identical in both colour schemes (accents, fills, text on accents). */
export const C = {
  navy: '#0B2545',
  ocean: '#1B6CA8',
  sea: '#2EC4B6',
  seaDark: '#0E8C80',
  sand: '#F4E9D8',
  foam: '#F7FBFC',
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

/** Semantic colours that change between light and dark mode. */
export type Theme = {
  scheme: Scheme;
  bg: string;
  /** Page background with alpha, for fades over content. */
  bgA: (a: number) => string;
  surface: string;
  /** Translucent surface for bars floating over content. */
  bar: string;
  /** Hairline that separates a surface from the background (only visible in dark mode). */
  surfaceEdge: string;
  text: string;
  /** Text colour with alpha, e.g. textA(0.5) for secondary text and hairlines. */
  textA: (a: number) => string;
  muted: string;
  /** High-contrast fill for selected chips, highlighted tiles etc. */
  inverse: string;
  onInverse: string;
  sand: string;
  sandInk: string;
  oceanInk: string;
  seaInk: string;
  oceanTint: string;
  seaTint: string;
  coralTint: string;
  segment: string;
  emptyStar: string;
  hero: { top: string; mid: string; glow: string; lines: string };
  categories: { bg: string; ink: string }[];
  map: { land: string; grid: string; park: string; parkAlt: string; beach: string; seaFrom: string; seaTo: string; road: string; avenue: string; avenueEdge: string; rail: string; label: string; water: string };
  shadow: { card: string; soft: string; float: string; coral: string; ocean: string; tabBar: string };
};

const rgba = (rgb: string) => (a: number) => `rgba(${rgb},${a})`;

export const LIGHT: Theme = {
  scheme: 'light',
  bg: '#F7FBFC',
  bgA: rgba('247,251,252'),
  surface: '#FFFFFF',
  bar: 'rgba(255,255,255,0.97)',
  surfaceEdge: 'transparent',
  text: '#0B2545',
  textA: rgba('11,37,69'),
  muted: '#8C9BAD',
  inverse: '#0B2545',
  onInverse: '#FFFFFF',
  sand: '#F4E9D8',
  sandInk: '#9A6A2C',
  oceanInk: '#1B6CA8',
  seaInk: '#0E8C80',
  oceanTint: 'rgba(27,108,168,0.08)',
  seaTint: 'rgba(46,196,182,0.12)',
  coralTint: 'rgba(255,107,91,0.12)',
  segment: '#EAF0F3',
  emptyStar: '#D9E3EA',
  hero: { top: '#DCEEF6', mid: '#EBF6F9', glow: '#2EC4B6', lines: '#1B6CA8' },
  categories: [
    { bg: '#E3EFF8', ink: '#1B6CA8' },
    { bg: '#DDF4F1', ink: '#0E8C80' },
    { bg: '#F4E9D8', ink: '#9A6A2C' },
    { bg: '#FFE6E2', ink: '#E5503F' },
  ],
  map: {
    land: '#F1EEE7',
    grid: '#FFFFFF',
    park: '#D9EBDA',
    parkAlt: '#D2E7D3',
    beach: '#EADCC3',
    seaFrom: '#CBEAF1',
    seaTo: '#9ED4E4',
    road: '#FFFFFF',
    avenue: '#FCE3B8',
    avenueEdge: '#FFFFFF',
    rail: '#C3CAD3',
    label: 'rgba(11,37,69,0.38)',
    water: '#3E8FB0',
  },
  shadow: {
    card: '0px 1px 2px rgba(11,37,69,0.04), 0px 14px 34px -18px rgba(11,37,69,0.22)',
    soft: '0px 12px 30px -12px rgba(11,37,69,0.28)',
    float: '0px 20px 44px -14px rgba(11,37,69,0.35)',
    coral: '0px 14px 26px -10px rgba(255,107,91,0.75)',
    ocean: '0px 10px 20px -8px rgba(27,108,168,0.7)',
    tabBar: '0px -12px 34px -14px rgba(11,37,69,0.18)',
  },
};

export const DARK: Theme = {
  scheme: 'dark',
  bg: '#061528',
  bgA: rgba('6,21,40'),
  surface: '#0D223D',
  bar: 'rgba(11,30,54,0.97)',
  surfaceEdge: 'rgba(255,255,255,0.06)',
  text: '#E8F1F7',
  textA: rgba('232,241,247'),
  muted: '#6F8299',
  inverse: '#E8F1F7',
  onInverse: '#0B2545',
  sand: '#2A2B31',
  sandInk: '#E3C9A2',
  oceanInk: '#6DB3EA',
  seaInk: '#4FD8CB',
  oceanTint: 'rgba(109,179,234,0.14)',
  seaTint: 'rgba(46,196,182,0.16)',
  coralTint: 'rgba(255,107,91,0.16)',
  segment: '#0D223D',
  emptyStar: '#24395A',
  hero: { top: '#0E3157', mid: '#0A2240', glow: '#2EC4B6', lines: '#6DB3EA' },
  categories: [
    { bg: '#11304F', ink: '#6DB3EA' },
    { bg: '#0F3438', ink: '#4FD8CB' },
    { bg: '#2E2A26', ink: '#E3C9A2' },
    { bg: '#3A2228', ink: '#FF8B7E' },
  ],
  map: {
    land: '#0D1F35',
    grid: 'rgba(255,255,255,0.05)',
    park: '#123331',
    parkAlt: '#143A37',
    beach: '#2A3242',
    seaFrom: '#0B3150',
    seaTo: '#0E4366',
    road: 'rgba(255,255,255,0.09)',
    avenue: '#5C4A2A',
    avenueEdge: 'rgba(255,255,255,0.12)',
    rail: 'rgba(255,255,255,0.18)',
    label: 'rgba(232,241,247,0.38)',
    water: '#6DB3EA',
  },
  shadow: {
    card: '0px 1px 2px rgba(0,0,0,0.3), 0px 14px 34px -18px rgba(0,0,0,0.7)',
    soft: '0px 12px 30px -12px rgba(0,0,0,0.6)',
    float: '0px 20px 44px -14px rgba(0,0,0,0.7)',
    coral: '0px 14px 26px -10px rgba(255,107,91,0.55)',
    ocean: '0px 10px 20px -8px rgba(27,108,168,0.8)',
    tabBar: '0px -12px 34px -14px rgba(0,0,0,0.6)',
  },
};

export const OCEAN_GRADIENT = ['#174F86', '#1B6CA8', '#1F8EB6', '#2EC4B6'] as const;
export const OCEAN_STOPS = [0, 0.35, 0.7, 1] as const;

export const AVATAR_GRADIENTS: readonly (readonly [string, string])[] = [
  ['#1B6CA8', '#2EC4B6'],
  ['#FF6B5B', '#FFB48F'],
  ['#0B2545', '#1B6CA8'],
  ['#2EC4B6', '#A6EDE3'],
  ['#D9B48A', '#F4E9D8'],
  ['#5E8FC9', '#B8D6F2'],
];
