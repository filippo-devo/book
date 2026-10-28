import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Calendar, CalendarPlus, Check, Clock3, Copy, MapPin, Navigation, QrCode, ShieldCheck, Wallet, type LucideIcon } from 'lucide-react-native';
import { View } from 'react-native';

import { Hero } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { useTheme } from '../components/ThemeProvider';
import { Avatar, Row, SoftBtn, T, Verified } from '../components/ui';
import { C } from '../theme';

function Info({ icon: Icon, label, value, sub }: { icon: LucideIcon; label: string; value: string; sub?: string }) {
  const t = useTheme();
  return (
    <Row gap={10} style={{ width: '50%', alignItems: 'flex-start', paddingRight: 8, marginBottom: 16 }}>
      <View style={{ width: 32, height: 32, borderRadius: 11, backgroundColor: t.oceanTint, alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={16} color={t.oceanInk} />
      </View>
      <View style={{ flex: 1 }}>
        <T w={700} size={10.5} color={t.textA(0.4)} style={{ letterSpacing: 0.8 }}>
          {label}
        </T>
        <T w={800} size={13.5}>
          {value}
        </T>
        {sub ? (
          <T size={11} color={t.textA(0.45)}>
            {sub}
          </T>
        ) : null}
      </View>
    </Row>
  );
}

const BUBBLES: [number, number, number][] = [
  [40, 120, 10],
  [70, 200, 6],
  [320, 110, 14],
  [300, 230, 7],
  [350, 180, 5],
  [28, 260, 8],
  [250, 90, 6],
];

export default function Potwierdzenie() {
  const t = useTheme();
  const top = useTopInset(30);
  return (
    <Screen tab="rez">
      <Hero top={top} bottom={0} style={{ height: top + 262 }}>
        {BUBBLES.map(([x, y, s]) => (
          <View key={`${x}-${y}`} style={{ position: 'absolute', left: x, top: y, width: s, height: s, borderRadius: s / 2, borderWidth: 1, borderColor: 'rgba(46,196,182,0.45)' }} />
        ))}
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 150, height: 150, alignItems: 'center', justifyContent: 'center', marginTop: -32, marginBottom: -32 }}>
            <View style={{ position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: t.seaTint }} />
            <View style={{ position: 'absolute', width: 118, height: 118, borderRadius: 59, backgroundColor: t.seaTint }} />
            <View style={{ width: 86, height: 86, borderRadius: 43, backgroundColor: t.surface, alignItems: 'center', justifyContent: 'center', boxShadow: t.shadow.float }}>
              <LinearGradient colors={[C.ocean, C.sea]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Check size={32} color={C.white} strokeWidth={3} />
              </LinearGradient>
            </View>
          </View>
          <T display size={29} style={{ marginTop: 32 }}>
            Rezerwacja potwierdzona
          </T>
          <T size={14} color={t.textA(0.6)} style={{ marginTop: 4 }}>
            Do zobaczenia w czwartek, Kasia!
          </T>
        </View>
      </Hero>

      <View style={{ paddingHorizontal: 20, marginTop: -30 }}>
        <View style={{ backgroundColor: t.surface, borderRadius: 26, borderWidth: 1, borderColor: t.surfaceEdge, boxShadow: t.shadow.float }}>
          <Row gap={12} style={{ padding: 16 }}>
            <Avatar initials="MK" g={0} size={48} radius={16} />
            <View style={{ flex: 1 }}>
              <Row gap={4}>
                <T w={800} size={15.5}>
                  Michał Kowalczyk
                </T>
                <Verified />
              </Row>
              <T size={12} color={t.textA(0.5)}>
                Trening personalny · 60 min
              </T>
            </View>
            <View style={{ backgroundColor: t.seaTint, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 }}>
              <T w={800} size={10.5} color={t.seaInk} style={{ letterSpacing: 0.8 }}>
                OPŁACONE
              </T>
            </View>
          </Row>
          {/* perforation with side notches */}
          <View style={{ height: 1, marginHorizontal: 22, borderTopWidth: 1, borderStyle: 'dashed', borderColor: t.textA(0.18) }}>
            <View style={{ position: 'absolute', left: -34, top: -12, width: 24, height: 24, borderRadius: 12, backgroundColor: t.bg }} />
            <View style={{ position: 'absolute', right: -34, top: -12, width: 24, height: 24, borderRadius: 12, backgroundColor: t.bg }} />
          </View>
          <View style={{ padding: 16, paddingBottom: 0, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Info icon={Calendar} label="DATA" value="Czw, 5 listopada" />
            <Info icon={Clock3} label="GODZINA" value="18:00 – 19:00" />
            <Info icon={MapPin} label="MIEJSCE" value="Fit Harbour" sub="ul. Świętojańska 32" />
            <Info icon={Wallet} label="PŁATNOŚĆ" value="180 zł · BLIK" />
          </View>
          <Row gap={12} style={{ marginHorizontal: 16, marginBottom: 16, borderRadius: 16, backgroundColor: t.bg, borderWidth: 1, borderColor: t.textA(0.06), padding: 12 }}>
            <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: t.surface, borderWidth: 1, borderColor: t.textA(0.1), alignItems: 'center', justifyContent: 'center' }}>
              <QrCode size={24} color={t.text} />
            </View>
            <View style={{ flex: 1 }}>
              <T w={700} size={10.5} color={t.textA(0.4)} style={{ letterSpacing: 0.8 }}>
                KOD REZERWACJI
              </T>
              <T w={800} size={16} style={{ letterSpacing: 2 }}>
                PRZ-48213
              </T>
            </View>
            <Copy size={18} color={t.textA(0.4)} />
          </Row>
        </View>

        <Row gap={10} style={{ marginTop: 14 }}>
          <SoftBtn icon={CalendarPlus} label="Do kalendarza" style={{ flex: 1, height: 48, backgroundColor: t.surface, boxShadow: t.shadow.card }} />
          <SoftBtn icon={Navigation} label="Nawiguj" style={{ flex: 1, height: 48, backgroundColor: t.surface, boxShadow: t.shadow.card }} />
        </Row>
        <Row gap={10} style={{ marginTop: 12, borderRadius: 16, backgroundColor: t.sand, paddingHorizontal: 14, paddingVertical: 12 }}>
          <ShieldCheck size={18} color={t.seaInk} />
          <T size={12} color={t.textA(0.7)} style={{ flex: 1, lineHeight: 17 }}>
            Bezpłatne odwołanie do{' '}
            <T w={800} size={12}>
              4 lis, 18:00
            </T>
            . Po wizycie poprosimy Cię o zweryfikowaną opinię.
          </T>
        </Row>
        <T w={700} size={13} color={t.oceanInk} style={{ textAlign: 'center', marginTop: 16 }} onPress={() => router.navigate('/rezerwacje')}>
          Przejdź do rezerwacji
        </T>
      </View>
    </Screen>
  );
}
