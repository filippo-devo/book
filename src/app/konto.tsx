import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Anchor, ChevronRight, Pencil, Plus, QrCode, Settings, Waves } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Hero, SportIcon } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { useTheme } from '../components/ThemeProvider';
import { Avatar, Card, Chip, Eyebrow, GlassBtn, Row, T } from '../components/ui';
import { C, whiteA } from '../theme';

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

function Tag({ children, tint }: { children: ReactNode; tint?: boolean }) {
  return (
    <View style={{ backgroundColor: tint ? 'rgba(46,196,182,0.25)' : whiteA(0.1), borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 }}>
      <T w={700} size={11} color={tint ? '#BFF5EE' : C.white}>
        {children}
      </T>
    </View>
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
          <GlassBtn icon={Settings} onPress={() => router.push('/ustawienia')} />
        </Row>
        <Row gap={16} style={{ marginTop: 8 }}>
          <View>
            <Avatar initials="KN" g={1} size={78} ring={{ width: 4, color: t.surface }} />
            <View style={{ position: 'absolute', right: 0, bottom: 0, width: 28, height: 28, borderRadius: 14, backgroundColor: t.surface, alignItems: 'center', justifyContent: 'center', boxShadow: t.shadow.soft }}>
              <Pencil size={14} color={t.primaryInk} />
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
          colors={t.deep}
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
              <Plus size={16} color={t.deep[1]} />
              <T w={800} size={13} color={t.deep[1]}>
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

        <Eyebrow style={{ marginTop: 20, marginBottom: 8 }}>Moje sporty</Eyebrow>
        <Row gap={8} style={{ flexWrap: 'wrap' }}>
          <Chip height={32} label="Tenis · NTRP 3.5" icon={<SportIcon sport="tenis" />} />
          <Chip height={32} label="Pływanie" icon={<Waves size={16} color={t.text} />} />
          <Chip height={32} icon={<Plus size={16} color={t.primaryInk} />} />
        </Row>

        <Card style={{ marginTop: 16, paddingHorizontal: 16 }} onPress={() => router.push('/ustawienia')}>
          <Row gap={12} style={{ paddingVertical: 14 }}>
            <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: t.primaryTint, alignItems: 'center', justifyContent: 'center' }}>
              <Settings size={18} color={t.primaryInk} />
            </View>
            <View style={{ flex: 1 }}>
              <T w={700} size={14}>
                Ustawienia
              </T>
              <T size={12} color={t.textA(0.5)}>
                Wygląd, dane osobowe, płatności, powiadomienia
              </T>
            </View>
            <ChevronRight size={18} color={t.textA(0.25)} />
          </Row>
        </Card>
      </View>
    </Screen>
  );
}
