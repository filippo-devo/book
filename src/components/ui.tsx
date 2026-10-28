import { LinearGradient } from 'expo-linear-gradient';
import type { LucideIcon } from 'lucide-react-native';
import { BadgeCheck } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Pressable, Text, View, type StyleProp, type TextProps, type TextStyle, type ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { AVATAR_GRADIENTS, C, F, navyA, shadow, whiteA } from '../theme';

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
export function T({ w = 500, size = 14, color = C.navy, display, italic, style, ...rest }: TProps) {
  const fontFamily = display ? (italic ? F.displayItalic : F.display) : F[w];
  const letterSpacing = display ? -size * 0.02 : w >= 700 ? -size * 0.012 : 0;
  return <Text {...rest} style={[{ fontFamily, fontSize: size, color, letterSpacing }, style]} />;
}

export function Row({ children, gap = 0, style }: { children: ReactNode; gap?: number; style?: StyleProp<ViewStyle> }) {
  return <View style={[{ flexDirection: 'row', alignItems: 'center', gap }, style]}>{children}</View>;
}

export function Card({ children, style, onPress }: { children: ReactNode; style?: StyleProp<ViewStyle>; onPress?: () => void }) {
  const base: ViewStyle = { backgroundColor: C.white, borderRadius: 22, boxShadow: shadow.card };
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
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d={STAR} fill={empty ? '#D9E3EA' : color} />
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
  return (
    <Row gap={4}>
      <StarIcon size={size + 1} />
      <T w={800} size={size}>
        {value}
        {count ? <T w={500} size={size} color={navyA(0.45)}>{` (${count})`}</T> : null}
      </T>
    </Row>
  );
}

/** White floating rating tag placed over photos. */
export function RatingTag({ value, style }: { value: string; style?: StyleProp<ViewStyle> }) {
  return (
    <Row gap={4} style={[{ backgroundColor: whiteA(0.92), borderRadius: 999, paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start' }, style]}>
      <StarIcon size={11} />
      <T w={800} size={11.5}>
        {value}
      </T>
    </Row>
  );
}

export function Verified({ size = 16 }: { size?: number }) {
  return <BadgeCheck size={size} color={C.sea} strokeWidth={2.2} />;
}

export function GlassBtn({ icon: Icon, onPress, tint, bg }: { icon: LucideIcon; onPress?: () => void; tint?: string; bg?: string }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bg ?? whiteA(0.16),
        borderWidth: 1,
        borderColor: bg ? 'transparent' : whiteA(0.28),
      }}>
      <Icon size={18} color={tint ?? C.white} strokeWidth={1.9} />
    </Pressable>
  );
}

export function WhiteBtn({ icon: Icon, onPress, tint = C.navy, size = 44 }: { icon: LucideIcon; onPress?: () => void; tint?: string; size?: number }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: C.white,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 10px 24px -12px rgba(11,37,69,0.35), 0px 0px 0px 1px rgba(11,37,69,0.04)',
      }}>
      <Icon size={18} color={tint} strokeWidth={1.9} />
    </Pressable>
  );
}

export function CoralBtn({ label, onPress, height = 50, full, size = 15 }: { label: string; onPress?: () => void; height?: number; full?: boolean; size?: number }) {
  return (
    <Pressable onPress={onPress} style={[{ borderRadius: height / 2, boxShadow: shadow.coral }, full && { alignSelf: 'stretch' }]}>
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
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height: 40,
          paddingHorizontal: 12,
          borderRadius: 20,
          backgroundColor: 'rgba(27,108,168,0.07)',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        },
        style,
      ]}>
      {Icon ? <Icon size={16} color={C.ocean} strokeWidth={1.9} /> : null}
      {label ? (
        <T w={700} size={13} color={C.ocean}>
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
  const bg = glass ? whiteA(0.1) : active ? C.navy : C.white;
  const fg = glass ? whiteA(0.9) : active ? C.white : C.navy;
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
        borderColor: glass ? whiteA(0.18) : navyA(0.09),
        boxShadow: active && !glass ? '0px 8px 18px -8px rgba(11,37,69,0.6)' : undefined,
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

export function SectionHeader({ title, link, style, onPress }: { title: string; link?: string; style?: StyleProp<ViewStyle>; onPress?: () => void }) {
  return (
    <Row style={[{ justifyContent: 'space-between', marginBottom: 12, alignItems: 'flex-end' }, style]}>
      <T w={800} size={18.5}>
        {title}
      </T>
      {link ? (
        <Pressable onPress={onPress}>
          <T w={700} size={13} color={C.ocean}>
            {link}
          </T>
        </Pressable>
      ) : null}
    </Row>
  );
}

export function Eyebrow({ children, style, color = navyA(0.42) }: { children: ReactNode; style?: StyleProp<TextStyle>; color?: string }) {
  return (
    <T w={800} size={11} color={color} style={[{ letterSpacing: 1.5, textTransform: 'uppercase' }, style]}>
      {children}
    </T>
  );
}

/** Small rounded label (e.g. „#2 w Trójmieście”, „ZA 2 DNI”). */
export function Pill({
  children,
  bg = C.sand,
  color = C.navy,
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
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: bg, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, alignSelf: 'flex-start' }, style]}>
      {Icon ? <Icon size={13} color={color} strokeWidth={2} /> : null}
      <T w={800} size={size} color={color}>
        {children}
      </T>
    </View>
  );
}

export function Divider({ style }: { style?: StyleProp<ViewStyle> }) {
  return <View style={[{ height: 1, backgroundColor: navyA(0.06) }, style]} />;
}
