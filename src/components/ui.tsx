import { LinearGradient } from 'expo-linear-gradient';
import type { LucideIcon } from 'lucide-react-native';
import { BadgeCheck } from 'lucide-react-native';
import { createContext, useContext, type ReactNode } from 'react';
import { Pressable, Text, View, type StyleProp, type TextProps, type TextStyle, type ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { AVATAR_GRADIENTS, C, F, whiteA } from '../theme';
import { useTheme } from './ThemeProvider';

/**
 * Colours for content placed on a backdrop (header, dark AI screen).
 * Without a provider, content follows the current theme.
 */
export type Ink = { text: string; textA: (a: number) => string; glass: string; glassEdge: string };

export const ON_DARK_INK: Ink = { text: C.white, textA: whiteA, glass: whiteA(0.16), glassEdge: whiteA(0.28) };

const InkContext = createContext<Ink | null>(null);
export const InkProvider = InkContext.Provider;

export function useInk(): Ink {
  const t = useTheme();
  const ink = useContext(InkContext);
  return ink ?? { text: t.text, textA: t.textA, glass: t.surface, glassEdge: t.textA(0.08) };
}

type Weight = 400 | 500 | 600 | 700 | 800;

type TProps = TextProps & {
  w?: Weight;
  size?: number;
  color?: string;
  display?: boolean;
  italic?: boolean;
  style?: StyleProp<TextStyle>;
};

/** Text in the design system: Plus Jakarta Sans for UI, Fraunces for display headings. */
export function T({ w = 500, size = 14, color, display, italic, style, ...rest }: TProps) {
  const t = useTheme();
  const fontFamily = display ? (italic ? F.displayItalic : F.display) : F[w];
  const letterSpacing = display ? -size * 0.02 : w >= 700 ? -size * 0.012 : 0;
  return <Text {...rest} style={[{ fontFamily, fontSize: size, color: color ?? t.text, letterSpacing }, style]} />;
}

export function Row({ children, gap = 0, style }: { children: ReactNode; gap?: number; style?: StyleProp<ViewStyle> }) {
  return <View style={[{ flexDirection: 'row', alignItems: 'center', gap }, style]}>{children}</View>;
}

export function Card({ children, style, onPress }: { children: ReactNode; style?: StyleProp<ViewStyle>; onPress?: () => void }) {
  const t = useTheme();
  const base: ViewStyle = { backgroundColor: t.surface, borderRadius: 22, boxShadow: t.shadow.card, borderWidth: 1, borderColor: t.surfaceEdge };
  if (onPress) {
    return (
      <Pressable onPress={onPress} style={[base, style]}>
        {children}
      </Pressable>
    );
  }
  return <View style={[base, style]}>{children}</View>;
}

export function Avatar({
  initials,
  g = 0,
  size = 44,
  radius,
  ring,
  style,
}: {
  initials: string;
  g?: number;
  size?: number;
  radius?: number;
  ring?: { width: number; color: string };
  style?: StyleProp<ViewStyle>;
}) {
  const dark = g === 3 || g === 4;
  const r = radius ?? size / 2;
  return (
    <LinearGradient
      colors={AVATAR_GRADIENTS[g]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        { width: size, height: size, borderRadius: r, alignItems: 'center', justifyContent: 'center' },
        ring && { borderWidth: ring.width, borderColor: ring.color },
        style,
      ]}>
      <T w={800} size={Math.max(11, Math.round(size * 0.36))} color={dark ? C.navy : C.white}>
        {initials}
      </T>
    </LinearGradient>
  );
}

const STAR = 'M12 2.6l2.85 5.95 6.55.85-4.8 4.55 1.2 6.5L12 17.3l-5.8 3.15 1.2-6.5L2.6 9.4l6.55-.85z';

export function StarIcon({ size = 14, color = C.sea, empty }: { size?: number; color?: string; empty?: boolean }) {
  const t = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d={STAR} fill={empty ? t.emptyStar : color} />
    </Svg>
  );
}

export function Stars({ n = 5, size = 14, gap = 2 }: { n?: number; size?: number; gap?: number }) {
  return (
    <Row gap={gap}>
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} size={size} empty={i >= n} />
      ))}
    </Row>
  );
}

export function Rating({ value, count, size = 13 }: { value: string; count?: string; size?: number }) {
  const t = useTheme();
  return (
    <Row gap={4}>
      <StarIcon size={size + 1} />
      <T w={800} size={size}>
        {value}
        {count ? <T w={500} size={size} color={t.textA(0.45)}>{` (${count})`}</T> : null}
      </T>
    </Row>
  );
}

/** Floating rating tag placed over photos (always light — sits on imagery). */
export function RatingTag({ value, style }: { value: string; style?: StyleProp<ViewStyle> }) {
  return (
    <Row gap={4} style={[{ backgroundColor: whiteA(0.92), borderRadius: 999, paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start' }, style]}>
      <StarIcon size={11} />
      <T w={800} size={11.5} color={C.navy}>
        {value}
      </T>
    </Row>
  );
}

export function Verified({ size = 16 }: { size?: number }) {
  return <BadgeCheck size={size} color={C.sea} strokeWidth={2.2} />;
}

/** Round icon button for headers; adapts to the backdrop via the current Ink. */
export function GlassBtn({ icon: Icon, onPress, tint, bg }: { icon: LucideIcon; onPress?: () => void; tint?: string; bg?: string }) {
  const t = useTheme();
  const ink = useInk();
  const onTheme = ink.glass === t.surface;
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bg ?? ink.glass,
        borderWidth: 1,
        borderColor: bg ? 'transparent' : ink.glassEdge,
        boxShadow: onTheme && !bg ? t.shadow.soft : undefined,
      }}>
      <Icon size={18} color={tint ?? ink.text} strokeWidth={1.9} />
    </Pressable>
  );
}

export function WhiteBtn({ icon: Icon, onPress, tint, size = 44 }: { icon: LucideIcon; onPress?: () => void; tint?: string; size?: number }) {
  const t = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: t.surface,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: t.surfaceEdge,
        boxShadow: t.shadow.soft,
      }}>
      <Icon size={18} color={tint ?? t.text} strokeWidth={1.9} />
    </Pressable>
  );
}

export function CoralBtn({ label, onPress, height = 50, full, size = 15 }: { label: string; onPress?: () => void; height?: number; full?: boolean; size?: number }) {
  const t = useTheme();
  return (
    <Pressable onPress={onPress} style={[{ borderRadius: height / 2, boxShadow: t.shadow.coral }, full && { alignSelf: 'stretch' }]}>
      <LinearGradient
        colors={['#FF7A6B', '#FF6B5B', '#F45E4E']}
        locations={[0, 0.6, 1]}
        style={{ height, borderRadius: height / 2, paddingHorizontal: height > 40 ? 24 : 16, alignItems: 'center', justifyContent: 'center' }}>
        <T w={800} size={size} color={C.white}>
          {label}
        </T>
      </LinearGradient>
    </Pressable>
  );
}

export function SoftBtn({ icon: Icon, label, style, onPress }: { icon?: LucideIcon; label?: string; style?: StyleProp<ViewStyle>; onPress?: () => void }) {
  const t = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height: 40,
          paddingHorizontal: 12,
          borderRadius: 20,
          backgroundColor: t.oceanTint,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        },
        style,
      ]}>
      {Icon ? <Icon size={16} color={t.oceanInk} strokeWidth={1.9} /> : null}
      {label ? (
        <T w={700} size={13} color={t.oceanInk}>
          {label}
        </T>
      ) : null}
    </Pressable>
  );
}

export function Chip({
  label,
  active,
  icon,
  height = 38,
  glass,
}: {
  label?: string;
  active?: boolean;
  icon?: ReactNode;
  height?: number;
  glass?: boolean;
}) {
  const t = useTheme();
  const ink = useInk();
  const bg = glass ? ink.textA(0.1) : active ? t.inverse : t.surface;
  const fg = glass ? ink.textA(0.9) : active ? t.onInverse : t.text;
  return (
    <View
      style={{
        height,
        paddingHorizontal: label ? 14 : 0,
        width: label ? undefined : height,
        borderRadius: height / 2,
        backgroundColor: bg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        borderWidth: active && !glass ? 0 : 1,
        borderColor: glass ? ink.textA(0.18) : t.textA(0.09),
        boxShadow: active && !glass ? t.shadow.soft : undefined,
      }}>
      {icon}
      {label ? (
        <T w={700} size={glass ? 12.5 : 13} color={fg}>
          {label}
        </T>
      ) : null}
    </View>
  );
}

/** Icon colour that matches a Chip's label colour. */
export function useChipInk(active?: boolean) {
  const t = useTheme();
  return active ? t.onInverse : t.text;
}

export function SectionHeader({ title, link, style, onPress }: { title: string; link?: string; style?: StyleProp<ViewStyle>; onPress?: () => void }) {
  const t = useTheme();
  return (
    <Row style={[{ justifyContent: 'space-between', marginBottom: 12, alignItems: 'flex-end' }, style]}>
      <T w={800} size={18.5}>
        {title}
      </T>
      {link ? (
        <Pressable onPress={onPress}>
          <T w={700} size={13} color={t.oceanInk}>
            {link}
          </T>
        </Pressable>
      ) : null}
    </Row>
  );
}

export function Eyebrow({ children, style, color }: { children: ReactNode; style?: StyleProp<TextStyle>; color?: string }) {
  const t = useTheme();
  return (
    <T w={800} size={11} color={color ?? t.textA(0.42)} style={[{ letterSpacing: 1.5, textTransform: 'uppercase' }, style]}>
      {children}
    </T>
  );
}

/** Small rounded label (e.g. „#2 w Trójmieście”, „ZA 2 DNI”). Defaults to the sand tone. */
export function Pill({
  children,
  bg,
  color,
  icon: Icon,
  size = 11.5,
  style,
}: {
  children: ReactNode;
  bg?: string;
  color?: string;
  icon?: LucideIcon;
  size?: number;
  style?: StyleProp<ViewStyle>;
}) {
  const t = useTheme();
  const ink = color ?? t.text;
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: bg ?? t.sand, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, alignSelf: 'flex-start' }, style]}>
      {Icon ? <Icon size={13} color={ink} strokeWidth={2} /> : null}
      <T w={800} size={size} color={ink}>
        {children}
      </T>
    </View>
  );
}
