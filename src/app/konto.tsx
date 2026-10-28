import { LinearGradient } from 'expo-linear-gradient';
import { Anchor, Bell, Check, ChevronRight, CreditCard, Gift, LogOut, Moon, Pencil, Plus, QrCode, Settings, Smartphone, Star, Sun, UserRound, Waves, type LucideIcon } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Pressable, useColorScheme, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Hero, SportIcon } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { useTheme, useThemeMode } from '../components/ThemeProvider';
import { Avatar, Card, Chip, Eyebrow, GlassBtn, Row, T } from '../components/ui';
import { C, DARK, LIGHT, whiteA, type Theme, type ThemeMode } from '../theme';

function Stat({ value, label, border }: { value: string; label: string; border?: boolean }) {
  const t = useTheme();
  return (
    <View style={[{ flex: 1, alignItems: 'center' }, border && { borderLeftWidth: 1, borderRightWidth: 1, borderColor: t.textA(0.07) }]}>
      <T display size={24}>
        {value}
      </T>
      <T w={600} size={11} color={t.textA(0.45)} style={{ marginTop: 2 }}>
        {label}
      </T>
    </View>
  );
}

function SettingRow({ icon: Icon, label, right, tint, bg, last }: { icon: LucideIcon; label: string; right?: ReactNode; tint?: string; bg?: string; last?: boolean }) {
  const t = useTheme();
  return (
    <Row gap={12} style={{ paddingVertical: 12, borderBottomWidth: last ? 0 : 1, borderBottomColor: t.textA(0.06) }}>
      <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: bg ?? t.oceanTint, alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={18} color={tint ?? t.oceanInk} />
      </View>
      <T w={700} size={14} style={{ flex: 1 }}>
        {label}
      </T>
      {right}
      <ChevronRight size={18} color={t.textA(0.25)} />
    </Row>
  );
}

function Tag({ children, tint }: { children: ReactNode; tint?: boolean }) {
  return (
    <View style={{ backgroundColor: tint ? 'rgba(46,196,182,0.25)' : whiteA(0.1), borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 }}>
      <T w={700} size={11} color={tint ? '#BFF5EE' : C.white}>
        {children}
      </T>
    </View>
  );
}

/** Miniature of a screen drawn in the given palette. */
function MiniScreen({ palette, style }: { palette: Theme; style?: object }) {
  return (
    <View style={[{ flex: 1, backgroundColor: palette.bg, padding: 6, gap: 4 }, style]}>
      <View style={{ height: 10, borderRadius: 4, backgroundColor: palette.hero.top }} />
      <View style={{ height: 12, borderRadius: 4, backgroundColor: C.ocean }} />
      <View style={{ height: 8, width: '70%', borderRadius: 3, backgroundColor: palette.surface, borderWidth: 1, borderColor: palette.textA(0.08) }} />
    </View>
  );
}

const MODES: { mode: ThemeMode; label: string; icon: LucideIcon }[] = [
  { mode: 'system', label: 'Systemowy', icon: Smartphone },
  { mode: 'light', label: 'Jasny', icon: Sun },
  { mode: 'dark', label: 'Ciemny', icon: Moon },
];

function ThemePicker() {
  const t = useTheme();
  const system = useColorScheme();
  const { mode, setMode } = useThemeMode();
  return (
    <Card style={{ padding: 14 }}>
      <Row gap={10}>
        {MODES.map(({ mode: option, label, icon: Icon }) => {
          const selected = option === mode;
          return (
            <Pressable
              key={option}
              onPress={() => setMode(option)}
              accessibilityRole="radio"
              accessibilityState={{ selected }}
              accessibilityLabel={`Motyw: ${label}`}
              style={{ flex: 1, alignItems: 'center', gap: 8 }}>
              <View
                style={{
                  width: '100%',
                  height: 64,
                  borderRadius: 16,
                  overflow: 'hidden',
                  flexDirection: 'row',
                  borderWidth: selected ? 2 : 1,
                  borderColor: selected ? C.ocean : t.textA(0.1),
                }}>
                {option === 'system' ? (
                  <>
                    <MiniScreen palette={LIGHT} />
                    <MiniScreen palette={DARK} />
                  </>
                ) : (
                  <MiniScreen palette={option === 'dark' ? DARK : LIGHT} />
                )}
                {selected ? (
                  <View style={{ position: 'absolute', top: 5, right: 5, width: 18, height: 18, borderRadius: 9, backgroundColor: C.ocean, alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={12} color={C.white} strokeWidth={3} />
                  </View>
                ) : null}
              </View>
              <Row gap={5}>
                <Icon size={14} color={selected ? t.oceanInk : t.textA(0.55)} />
                <T w={selected ? 800 : 600} size={12.5} color={selected ? t.text : t.textA(0.6)}>
                  {label}
                </T>
              </Row>
            </Pressable>
          );
        })}
      </Row>
      <T size={11.5} color={t.textA(0.5)} style={{ marginTop: 12, textAlign: 'center' }}>
        {mode === 'system' ? `Dopasowuje się do ustawień telefonu — teraz ${system === 'dark' ? 'ciemny' : 'jasny'}.` : 'Motyw ustawiony ręcznie, niezależnie od telefonu.'}
      </T>
    </Card>
  );
}

export default function Konto() {
  const t = useTheme();
  const top = useTopInset(4);
  return (
    <Screen tab="konto">
      <Hero top={top} bottom={44} style={{ paddingHorizontal: 20 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <GlassBtn icon={QrCode} />
          <GlassBtn icon={Settings} />
        </Row>
        <Row gap={16} style={{ marginTop: 8 }}>
          <View>
            <Avatar initials="KN" g={1} size={78} ring={{ width: 4, color: t.surface }} />
            <View style={{ position: 'absolute', right: 0, bottom: 0, width: 28, height: 28, borderRadius: 14, backgroundColor: t.surface, alignItems: 'center', justifyContent: 'center', boxShadow: t.shadow.soft }}>
              <Pencil size={14} color={t.oceanInk} />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <T display size={26}>
              Katarzyna Nowicka
            </T>
            <T size={12.5} color={t.textA(0.6)} style={{ marginTop: 2 }}>
              Gdynia · w Przystani od 2024
            </T>
            <Row gap={6} style={{ marginTop: 8, alignSelf: 'flex-start', backgroundColor: t.sand, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 }}>
              <Anchor size={14} color={t.sandInk} />
              <T w={800} size={11.5}>
                Poziom Kapitan · 1 240 pkt
              </T>
            </Row>
          </View>
        </Row>
      </Hero>

      <View style={{ paddingHorizontal: 20, marginTop: -20 }}>
        <Card style={{ flexDirection: 'row', paddingVertical: 14 }}>
          <Stat value="27" label="rezerwacji" />
          <Stat value="12" label="opinii" border />
          <Stat value="41 h" label="aktywności" />
        </Card>

        <LinearGradient
          colors={[C.navy, '#16457A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ marginTop: 12, borderRadius: 24, padding: 16, overflow: 'hidden', borderWidth: 1, borderColor: t.surfaceEdge }}>
          <Svg pointerEvents="none" width={200} height={90} viewBox="0 0 200 90" style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.25 }} fill="none">
            <Path d="M0 60 C 40 30, 80 90, 120 60 S 180 30, 200 50" stroke={C.sea} strokeWidth={1.5} />
            <Path d="M0 75 C 40 45, 80 105, 120 75 S 180 45, 200 65" stroke={C.sea} strokeWidth={1.5} />
          </Svg>
          <Row style={{ justifyContent: 'space-between' }}>
            <View>
              <T w={700} size={11.5} color={whiteA(0.6)} style={{ letterSpacing: 1 }}>
                PORTFEL PRZYSTANI
              </T>
              <T display size={28} color={C.white} style={{ marginTop: 2 }}>
                120,00 zł
              </T>
            </View>
            <Row gap={6} style={{ height: 36, paddingHorizontal: 16, borderRadius: 18, backgroundColor: C.white }}>
              <Plus size={16} color={C.navy} />
              <T w={800} size={13} color={C.navy}>
                Doładuj
              </T>
            </Row>
          </Row>
          <Row gap={8} style={{ marginTop: 12 }}>
            <Tag>BLIK</Tag>
            <Tag>Visa •• 4821</Tag>
            <Tag tint>Multisport ✓</Tag>
          </Row>
        </LinearGradient>

        <Eyebrow style={{ marginTop: 20, marginBottom: 8 }}>Wygląd</Eyebrow>
        <ThemePicker />

        <Eyebrow style={{ marginTop: 20, marginBottom: 8 }}>Moje sporty</Eyebrow>
        <Row gap={8} style={{ flexWrap: 'wrap' }}>
          <Chip height={32} label="Tenis · NTRP 3.5" icon={<SportIcon sport="tenis" />} />
          <Chip height={32} label="Pływanie" icon={<Waves size={16} color={t.text} />} />
          <Chip height={32} icon={<Plus size={16} color={t.oceanInk} />} />
        </Row>

        <Card style={{ marginTop: 16, paddingHorizontal: 16, paddingVertical: 4 }}>
          <SettingRow icon={UserRound} label="Dane osobowe" />
          <SettingRow
            icon={Star}
            label="Moje opinie"
            tint={t.seaInk}
            bg={t.seaTint}
            right={
              <T w={700} size={12} color={t.textA(0.4)} style={{ marginRight: 4 }}>
                12
              </T>
            }
          />
          <SettingRow
            icon={Gift}
            label="Zaproś znajomych"
            tint={C.coral}
            bg={t.coralTint}
            right={
              <View style={{ backgroundColor: t.coralTint, borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2, marginRight: 4 }}>
                <T w={800} size={11} color={C.coral}>
                  +20 zł
                </T>
              </View>
            }
          />
          <SettingRow icon={CreditCard} label="Płatności i BLIK" />
          <SettingRow icon={Bell} label="Powiadomienia" last />
        </Card>
        <Row gap={8} style={{ justifyContent: 'center', marginTop: 18 }}>
          <LogOut size={16} color={t.textA(0.45)} />
          <T w={700} size={13} color={t.textA(0.45)}>
            Wyloguj się
          </T>
        </Row>
      </View>
    </Screen>
  );
}
