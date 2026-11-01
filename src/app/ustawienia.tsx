import { router } from 'expo-router';
import { Bell, Check, ChevronLeft, ChevronRight, CreditCard, Gift, LogOut, Moon, Smartphone, Star, Sun, UserRound, type LucideIcon } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Pressable, useColorScheme, View } from 'react-native';

import { Hero } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { useTheme, useThemeMode } from '../components/ThemeProvider';
import { Card, Eyebrow, GlassBtn, Row, T } from '../components/ui';
import { C, DARK, LIGHT, type Theme, type ThemeMode } from '../theme';

function SettingRow({ icon: Icon, label, right, tint, bg, last }: { icon: LucideIcon; label: string; right?: ReactNode; tint?: string; bg?: string; last?: boolean }) {
  const t = useTheme();
  return (
    <Row gap={12} style={{ paddingVertical: 12, borderBottomWidth: last ? 0 : 1, borderBottomColor: t.textA(0.06) }}>
      <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: bg ?? t.primaryTint, alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={18} color={tint ?? t.primaryInk} />
      </View>
      <T w={700} size={14} style={{ flex: 1 }}>
        {label}
      </T>
      {right}
      <ChevronRight size={18} color={t.textA(0.25)} />
    </Row>
  );
}

/** Miniature of a screen drawn in the given palette. */
function MiniScreen({ palette, style }: { palette: Theme; style?: object }) {
  return (
    <View style={[{ flex: 1, backgroundColor: palette.bg, padding: 6, gap: 4 }, style]}>
      <View style={{ height: 14, borderRadius: 4, backgroundColor: palette.deep[0] }} />
      <View style={{ height: 8, width: '45%', borderRadius: 3, backgroundColor: C.red }} />
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
                  borderColor: selected ? t.primary : t.textA(0.1),
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
                  <View style={{ position: 'absolute', top: 5, right: 5, width: 18, height: 18, borderRadius: 9, backgroundColor: t.primary, alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={12} color={t.onPrimary} strokeWidth={3} />
                  </View>
                ) : null}
              </View>
              <Row gap={5}>
                <Icon size={14} color={selected ? t.primaryInk : t.textA(0.55)} />
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

export default function Ustawienia() {
  const t = useTheme();
  const top = useTopInset(4);
  return (
    <Screen tab="konto">
      <Hero top={top} bottom={20} style={{ paddingHorizontal: 20 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <GlassBtn icon={ChevronLeft} onPress={() => router.back()} />
        </Row>
        <T display size={30} style={{ marginTop: 14 }}>
          Ustawienia
        </T>
      </Hero>

      <View style={{ paddingHorizontal: 20 }}>
        <Eyebrow style={{ marginBottom: 8 }}>Wygląd</Eyebrow>
        <ThemePicker />

        <Eyebrow style={{ marginTop: 22, marginBottom: 8 }}>Konto</Eyebrow>
        <Card style={{ paddingHorizontal: 16, paddingVertical: 4 }}>
          <SettingRow icon={UserRound} label="Dane osobowe" />
          <SettingRow
            icon={Star}
            label="Moje opinie"
            tint={t.mintInk}
            bg={t.mintTint}
            right={
              <T w={700} size={12} color={t.textA(0.4)} style={{ marginRight: 4 }}>
                12
              </T>
            }
          />
          <SettingRow
            icon={Gift}
            label="Zaproś znajomych"
            tint={C.red}
            bg={t.redTint}
            last
            right={
              <View style={{ backgroundColor: t.redTint, borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2, marginRight: 4 }}>
                <T w={800} size={11} color={C.red}>
                  +20 zł
                </T>
              </View>
            }
          />
        </Card>

        <Eyebrow style={{ marginTop: 22, marginBottom: 8 }}>Płatności i powiadomienia</Eyebrow>
        <Card style={{ paddingHorizontal: 16, paddingVertical: 4 }}>
          <SettingRow
            icon={CreditCard}
            label="Płatności i BLIK"
            right={
              <T w={600} size={12} color={t.textA(0.4)} style={{ marginRight: 4 }}>
                Visa •• 4821
              </T>
            }
          />
          <SettingRow icon={Bell} label="Powiadomienia" last />
        </Card>

        <Row gap={8} style={{ justifyContent: 'center', marginTop: 22 }}>
          <LogOut size={16} color={t.textA(0.45)} />
          <T w={700} size={13} color={t.textA(0.45)}>
            Wyloguj się
          </T>
        </Row>
      </View>
    </Screen>
  );
}
