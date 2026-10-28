import { LinearGradient } from 'expo-linear-gradient';
import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import Svg, { Circle, Defs, Ellipse, G, Line, LinearGradient as SvgLinear, Path, RadialGradient, Rect, Stop } from 'react-native-svg';

import { C } from '../theme';
import { useTheme } from './ThemeProvider';

// ---------------------------------------------------------------- photo placeholders

export type PhotoKind = 'clay' | 'hard' | 'pool' | 'squash' | 'turf' | 'pilates' | 'studio';

function Court() {
  return (
    <>
      <G fill="none" stroke="#fff" strokeOpacity={0.85} strokeWidth={3} strokeLinejoin="round">
        <Path d="M40 250 L360 250 L282 28 L118 28 Z" />
        <Path d="M78 250 L146 28 M322 250 L254 28" />
        <Path d="M96 182 L304 182 M127 82 L273 82 M200 182 L200 82" />
      </G>
      <Line x1={66} y1={122} x2={334} y2={122} stroke={C.navy} strokeOpacity={0.55} strokeWidth={5} />
      <Line x1={66} y1={118} x2={334} y2={118} stroke="#fff" strokeOpacity={0.9} strokeWidth={2} />
    </>
  );
}

function Grad({ id, stops, vertical }: { id: string; stops: [number, string][]; vertical?: boolean }) {
  return (
    <SvgLinear id={id} x1="0" y1="0" x2={vertical ? '0' : '0.55'} y2="1">
      {stops.map(([o, c]) => (
        <Stop key={o} offset={o} stopColor={c} />
      ))}
    </SvgLinear>
  );
}

function PhotoArt({ kind }: { kind: PhotoKind }) {
  const lanes = [80, 160, 240, 320];
  switch (kind) {
    case 'clay':
    case 'hard':
      return (
        <>
          <Defs>
            <Grad
              id={`g-${kind}`}
              stops={kind === 'clay' ? [[0, '#E59166'], [0.55, '#CC6640'], [1, '#A94E30']] : [[0, '#4C9BD8'], [0.55, '#1B6CA8'], [1, '#124F82']]}
            />
          </Defs>
          <Rect width={400} height={240} fill={`url(#g-${kind})`} />
          <Court />
        </>
      );
    case 'pool':
      return (
        <>
          <Defs>
            <Grad id="g-pool" vertical stops={[[0, '#6ADCE6'], [0.5, '#2EB5C8'], [1, '#1A86B2']]} />
          </Defs>
          <Rect width={400} height={240} fill="url(#g-pool)" />
          {[120, 200, 280].map((x) => (
            <Rect key={x} x={x - 5} y={0} width={10} height={240} fill={C.navy} opacity={0.14} />
          ))}
          <G fill="none" stroke="#fff" strokeOpacity={0.22} strokeWidth={2}>
            <Path d="M0 40 C 40 25, 70 60, 120 42 S 200 20, 260 48 S 350 30, 400 44" />
            <Path d="M0 120 C 50 100, 90 140, 140 118 S 230 96, 290 126 S 360 110, 400 122" />
            <Path d="M0 190 C 40 176, 80 210, 130 192 S 220 170, 280 198 S 360 180, 400 190" />
          </G>
          {lanes.map((x) => (
            <Line key={x} x1={x} y1={0} x2={x} y2={240} stroke="#fff" strokeOpacity={0.75} strokeWidth={4} strokeDasharray="10 7" />
          ))}
          {lanes.map((x) => (
            <Line key={`c${x}`} x1={x} y1={5} x2={x} y2={240} stroke={C.coral} strokeOpacity={0.8} strokeWidth={4} strokeDasharray="3 14" />
          ))}
        </>
      );
    case 'squash':
      return (
        <>
          <Rect width={400} height={240} fill="#E4BF8F" />
          {Array.from({ length: 14 }, (_, i) => (
            <Rect key={i} x={i * 31} y={0} width={29} height={240} fill={i % 2 ? '#DDB585' : '#E8C597'} />
          ))}
          <Rect width={400} height={78} fill="#F7F1E7" />
          <G stroke="#D2483B" fill="none">
            <Line x1={0} y1={70} x2={400} y2={70} strokeWidth={4} />
            <Line x1={0} y1={36} x2={400} y2={36} strokeWidth={3} strokeOpacity={0.8} />
            <Path d="M0 165 H400 M200 165 V240 M90 165 V215 H0 M310 165 V215 H400" strokeWidth={3.5} />
          </G>
        </>
      );
    case 'turf':
      return (
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <Rect key={i} x={i * 44} y={0} width={44} height={240} fill={i % 2 ? '#3B9B64' : '#46A971'} />
          ))}
          <G fill="none" stroke="#fff" strokeOpacity={0.85} strokeWidth={3}>
            <Rect x={20} y={20} width={360} height={200} />
            <Line x1={200} y1={20} x2={200} y2={220} />
            <Circle cx={200} cy={120} r={38} />
            <Rect x={20} y={70} width={52} height={100} />
            <Rect x={328} y={70} width={52} height={100} />
          </G>
        </>
      );
    case 'pilates':
      return (
        <>
          <Defs>
            <Grad id="g-pil" stops={[[0, '#F8E6D2'], [0.55, '#F0C9AC'], [1, '#E9A88D']]} />
          </Defs>
          <Rect width={400} height={240} fill="url(#g-pil)" />
          <Circle cx={300} cy={70} r={90} fill="#fff" fillOpacity={0.28} />
          <Rect x={40} y={150} width={320} height={18} rx={9} fill="#fff" fillOpacity={0.7} />
          <Rect x={70} y={168} width={10} height={40} rx={5} fill="#fff" fillOpacity={0.55} />
          <Rect x={320} y={168} width={10} height={40} rx={5} fill="#fff" fillOpacity={0.55} />
          <Rect x={110} y={132} width={110} height={18} rx={9} fill={C.navy} fillOpacity={0.18} />
          <Line x1={300} y1={150} x2={300} y2={100} stroke="#fff" strokeOpacity={0.7} strokeWidth={6} strokeLinecap="round" />
        </>
      );
    case 'studio':
      return (
        <>
          <Defs>
            <Grad id="g-stu" stops={[[0, '#16406E'], [1, C.navy]]} />
          </Defs>
          <Rect width={400} height={240} fill="url(#g-stu)" />
          <Circle cx={330} cy={40} r={70} fill={C.sea} fillOpacity={0.25} />
          <G fill="#fff" fillOpacity={0.9}>
            <Rect x={110} y={114} width={180} height={10} rx={5} />
            <Rect x={92} y={88} width={20} height={62} rx={6} />
            <Rect x={288} y={88} width={20} height={62} rx={6} />
            <Rect x={72} y={100} width={16} height={38} rx={5} />
            <Rect x={312} y={100} width={16} height={38} rx={5} />
          </G>
        </>
      );
  }
}

/** Stylised "photo" of a sports venue, drawn in SVG. */
export function Photo({
  kind,
  style,
  radius = 0,
  children,
  gloss = true,
}: {
  kind: PhotoKind;
  style?: StyleProp<ViewStyle>;
  radius?: number;
  children?: ReactNode;
  gloss?: boolean;
}) {
  return (
    <View style={[{ overflow: 'hidden', borderRadius: radius }, style]}>
      <Svg style={StyleSheet.absoluteFill} width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
        <PhotoArt kind={kind} />
      </Svg>
      {gloss ? (
        <LinearGradient
          pointerEvents="none"
          colors={['rgba(255,255,255,0.16)', 'rgba(255,255,255,0)', 'rgba(11,37,69,0.28)']}
          locations={[0, 0.38, 1]}
          style={StyleSheet.absoluteFill}
        />
      ) : null}
      {children}
    </View>
  );
}

// ---------------------------------------------------------------- header backdrop

export function WaveLines({ opacity = 0.14, color = '#fff', rows = [40, 78, 116, 154, 192] }: { opacity?: number; color?: string; rows?: number[] }) {
  return (
    <Svg pointerEvents="none" style={StyleSheet.absoluteFill} width="100%" height="100%" viewBox="0 0 390 240" preserveAspectRatio="xMidYMid slice">
      <G fill="none" stroke={color} strokeOpacity={opacity} strokeWidth={1.2}>
        {rows.map((y) => (
          <Path key={y} d={`M-20 ${y} C 60 ${y - 26}, 130 ${y + 26}, 210 ${y} S 360 ${y - 26}, 420 ${y}`} />
        ))}
      </G>
    </Svg>
  );
}

function Glow({ cx, cy, r, color, opacity }: { cx: number; cy: number; r: number; color: string; opacity: number }) {
  const id = `glow-${cx}-${cy}`;
  return (
    <>
      <Defs>
        <RadialGradient id={id} cx="50%" cy="50%" r="50%">
          <Stop offset="0" stopColor={color} stopOpacity={opacity} />
          <Stop offset="1" stopColor={color} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx={cx} cy={cy} r={r} fill={`url(#${id})`} />
    </>
  );
}

/**
 * Soft "sea mist" backdrop for the top of a screen: a pale ocean tint with a glow and faint wave lines
 * that fades into the page background. `top` is the safe-area padding.
 */
export function Hero({ top, bottom = 40, children, style }: { top: number; bottom?: number; children?: ReactNode; style?: StyleProp<ViewStyle> }) {
  const t = useTheme();
  const dark = t.scheme === 'dark';
  return (
    <View style={[{ overflow: 'hidden', paddingTop: top, paddingBottom: bottom }, style]}>
      <LinearGradient colors={[t.hero.top, t.hero.mid, t.bg]} locations={[0, 0.55, 1]} style={StyleSheet.absoluteFill} />
      <Svg pointerEvents="none" style={StyleSheet.absoluteFill} width="100%" height="100%" viewBox="0 0 390 300" preserveAspectRatio="xMidYMid slice">
        <Glow cx={380} cy={10} r={170} color={t.hero.glow} opacity={dark ? 0.22 : 0.28} />
        <Glow cx={0} cy={120} r={120} color={C.ocean} opacity={dark ? 0.18 : 0.08} />
      </Svg>
      <WaveLines color={t.hero.lines} opacity={dark ? 0.12 : 0.09} rows={[52, 96, 140]} />
      {children}
    </View>
  );
}

// ---------------------------------------------------------------- AI orb & waveform

export function Orb({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Defs>
        <RadialGradient id="orb" cx="34%" cy="28%" r="78%">
          <Stop offset="0" stopColor="#FFFFFF" />
          <Stop offset="0.12" stopColor="#BFF7EF" />
          <Stop offset="0.38" stopColor={C.sea} />
          <Stop offset="0.72" stopColor={C.ocean} />
          <Stop offset="1" stopColor={C.navy} />
        </RadialGradient>
        <SvgLinear id="orb-hl" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#fff" stopOpacity={0.75} />
          <Stop offset="1" stopColor="#fff" stopOpacity={0} />
        </SvgLinear>
      </Defs>
      <Circle cx={50} cy={50} r={50} fill="url(#orb)" />
      <Ellipse cx={38} cy={24} rx={20} ry={11} fill="url(#orb-hl)" transform="rotate(-24 38 24)" />
    </Svg>
  );
}

export function OrbGlow({ size }: { size: number }) {
  return (
    <Svg pointerEvents="none" width={size} height={size} viewBox="0 0 100 100" style={{ position: 'absolute' }}>
      <Defs>
        <RadialGradient id="halo" cx="50%" cy="50%" r="50%">
          <Stop offset="0.35" stopColor={C.sea} stopOpacity={0.55} />
          <Stop offset="0.65" stopColor={C.ocean} stopOpacity={0.25} />
          <Stop offset="1" stopColor={C.ocean} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx={50} cy={50} r={50} fill="url(#halo)" />
    </Svg>
  );
}

export function Waveform({ bars = 30, height = 26, color = C.sea }: { bars?: number; height?: number; color?: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, height }}>
      {Array.from({ length: bars }, (_, i) => {
        const x = i / (bars - 1);
        const env = Math.pow(Math.sin(Math.PI * x), 0.8);
        const h = Math.max(4, height * env * (0.45 + 0.55 * Math.abs(Math.sin(i * 1.3 + 0.7) * Math.cos(i * 0.47))));
        return <View key={i} style={{ width: 3, height: h, borderRadius: 2, backgroundColor: color, opacity: 0.45 + 0.55 * env }} />;
      })}
    </View>
  );
}

// ---------------------------------------------------------------- laurel (ranking badge)

export function Laurel({ size = 58, color = C.ocean, mirror }: { size?: number; color?: string; mirror?: boolean }) {
  const cx = 50;
  const cy = 50;
  const r = 34;
  const pt = (deg: number) => [cx + r * Math.cos((deg * Math.PI) / 180), cy + r * Math.sin((deg * Math.PI) / 180)];
  const [sx, sy] = pt(100);
  const [ex, ey] = pt(236);
  return (
    <Svg width={size * 0.55} height={size} viewBox="10 10 50 80" style={mirror ? { transform: [{ scaleX: -1 }] } : undefined}>
      <G fill={color}>
        {Array.from({ length: 7 }, (_, i) => {
          const th = 112 + i * 19;
          const [x, y] = pt(th);
          return <Ellipse key={i} cx={x} cy={y} rx={4.2} ry={9.5} transform={`rotate(${th + 28} ${x} ${y})`} />;
        })}
      </G>
      <Path d={`M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}`} fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" />
    </Svg>
  );
}

// ---------------------------------------------------------------- sport glyphs (Lucide has no tennis / football)

export type Sport = 'tenis' | 'padel' | 'squash' | 'orlik';

export function SportIcon({ sport, size = 16, color: colorProp }: { sport: Sport; size?: number; color?: string }) {
  const t = useTheme();
  const color = colorProp ?? t.text;
  const common = { fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {sport === 'tenis' && (
        <>
          <Circle cx={12} cy={12} r={9.3} {...common} />
          <Path d="M5.4 5.4a9.3 9.3 0 0 1 0 13.2M18.6 5.4a9.3 9.3 0 0 0 0 13.2" {...common} />
        </>
      )}
      {sport === 'padel' && (
        <>
          <Circle cx={10} cy={9} r={6.3} {...common} />
          <Path d="M14.5 13.5L20 19" {...common} />
          <Circle cx={8.5} cy={7.5} r={0.7} fill={color} />
          <Circle cx={11.5} cy={7.5} r={0.7} fill={color} />
          <Circle cx={10} cy={10.5} r={0.7} fill={color} />
        </>
      )}
      {sport === 'squash' && (
        <>
          <Ellipse cx={9.5} cy={8.5} rx={4.6} ry={6.4} transform="rotate(-40 9.5 8.5)" {...common} />
          <Path d="M13 12.6l7 7" {...common} />
          <Circle cx={19} cy={5} r={1.6} {...common} />
        </>
      )}
      {sport === 'orlik' && (
        <>
          <Circle cx={12} cy={12} r={9.3} {...common} />
          <Path d="M12 8l3.6 2.6-1.4 4.2H9.8l-1.4-4.2z" {...common} />
          <Path d="M12 8V2.8M15.6 10.6l4.8-1.4M14.2 14.8l2.9 3.9M9.8 14.8l-2.9 3.9M8.4 10.6L3.6 9.2" {...common} />
        </>
      )}
    </Svg>
  );
}

