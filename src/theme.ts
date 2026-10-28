export const C = {
  navy: '#0B2545',
  ocean: '#1B6CA8',
  sea: '#2EC4B6',
  seaDark: '#0E8C80',
  sand: '#F4E9D8',
  foam: '#F7FBFC',
  coral: '#FF6B5B',
  white: '#FFFFFF',
  muted: '#8C9BAD',
};

/** Navy with alpha, e.g. navyA(0.5) — used for secondary text and hairlines. */
export const navyA = (a: number) => `rgba(11,37,69,${a})`;
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

export const shadow = {
  card: '0px 1px 2px rgba(11,37,69,0.04), 0px 14px 34px -18px rgba(11,37,69,0.22)',
  soft: '0px 12px 30px -12px rgba(11,37,69,0.28)',
  coral: '0px 14px 26px -10px rgba(255,107,91,0.75)',
  ocean: '0px 10px 20px -8px rgba(27,108,168,0.7)',
  float: '0px 20px 44px -14px rgba(11,37,69,0.35)',
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
