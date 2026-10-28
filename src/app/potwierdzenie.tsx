import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Calendar, CalendarPlus, Check, Clock3, Copy, MapPin, Navigation, QrCode, ShieldCheck, Wallet, type LucideIcon } from 'lucide-react-native';
import { View } from 'react-native';

import { WaveHeader } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { Avatar, Row, SoftBtn, T, Verified } from '../components/ui';
import { C, navyA, shadow, whiteA } from '../theme';

function Info({ icon: Icon, label, value, sub }: { icon: LucideIcon; label: string; value: string; sub?: string }) {
  return (
    <Row gap={10} style={{ width: '50%', alignItems: 'flex-start', paddingRight: 8, marginBottom: 16 }}>
      <View style={{ width: 32, height: 32, borderRadius: 11, backgroundColor: 'rgba(27,108,168,0.08)', alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={16} color={C.ocean} />
      </View>
      <View style={{ flex: 1 }}>
        <T w={700} size={10.5} color={navyA(0.4)} style={{ letterSpacing: 0.8 }}>
          {label}
        </T>
        <T w={800} size={13.5}>
          {value}
        </T>
        {sub ? (
          <T size={11} color={navyA(0.45)}>
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
  const top = useTopInset(30);
  return (
    <Screen tab="rez" light>
      <WaveHeader style={{ paddingTop: top, height: top + 270 }} lines={0.1} waveHeight={36}>
        {BUBBLES.map(([x, y, s]) => (
          <View key={`${x}-${y}`} style={{ position: 'absolute', left: x, top: y, width: s, height: s, borderRadius: s / 2, borderWidth: 1, borderColor: whiteA(0.3) }} />
        ))}
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 150, height: 150, alignItems: 'center', justifyContent: 'center', marginTop: -32, marginBottom: -32 }}>
            <View style={{ position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: whiteA(0.07) }} />
            <View style={{ position: 'absolute', width: 118, height: 118, borderRadius: 59, backgroundColor: whiteA(0.12) }} />
            <View style={{ width: 86, height: 86, borderRadius: 43, backgroundColor: C.white, alignItems: 'center', justifyContent: 'center', boxShadow: '0px 18px 40px -12px rgba(11,37,69,0.5)' }}>
              <LinearGradient colors={[C.ocean, C.sea]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Check size={32} color={C.white} strokeWidth={3} />
              </LinearGradient>
            </View>
          </View>
          <T display size={29} color={C.white} style={{ marginTop: 32 }}>
            Rezerwacja potwierdzona
          </T>
          <T size={14} color={whiteA(0.75)} style={{ marginTop: 4 }}>
            Do zobaczenia w czwartek, Kasia!
          </T>
        </View>
      </WaveHeader>

      <View style={{ paddingHorizontal: 20, marginTop: -30 }}>
        <View style={{ backgroundColor: C.white, borderRadius: 26, boxShadow: '0px 26px 50px -22px rgba(11,37,69,0.45)' }}>
          <Row gap={12} style={{ padding: 16 }}>
            <Avatar initials="MK" g={0} size={48} radius={16} />
            <View style={{ flex: 1 }}>
              <Row gap={4}>
                <T w={800} size={15.5}>
                  Michał Kowalczyk
                </T>
                <Verified />
              </Row>
              <T size={12} color={navyA(0.5)}>
                Trening personalny · 60 min
              </T>
            </View>
            <View style={{ backgroundColor: 'rgba(46,196,182,0.12)', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 }}>
              <T w={800} size={10.5} color={C.seaDark} style={{ letterSpacing: 0.8 }}>
                OPŁACONE
              </T>
            </View>
          </Row>
          {/* perforation with side notches */}
          <View style={{ height: 1, marginHorizontal: 22, borderTopWidth: 1, borderStyle: 'dashed', borderColor: navyA(0.18) }}>
            <View style={{ position: 'absolute', left: -34, top: -12, width: 24, height: 24, borderRadius: 12, backgroundColor: C.foam }} />
            <View style={{ position: 'absolute', right: -34, top: -12, width: 24, height: 24, borderRadius: 12, backgroundColor: C.foam }} />
          </View>
          <View style={{ padding: 16, paddingBottom: 0, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Info icon={Calendar} label="DATA" value="Czw, 5 listopada" />
            <Info icon={Clock3} label="GODZINA" value="18:00 – 19:00" />
            <Info icon={MapPin} label="MIEJSCE" value="Fit Harbour" sub="ul. Świętojańska 32" />
            <Info icon={Wallet} label="PŁATNOŚĆ" value="180 zł · BLIK" />
          </View>
          <Row gap={12} style={{ marginHorizontal: 16, marginBottom: 16, borderRadius: 16, backgroundColor: C.foam, borderWidth: 1, borderColor: navyA(0.06), padding: 12 }}>
            <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: C.white, borderWidth: 1, borderColor: navyA(0.1), alignItems: 'center', justifyContent: 'center' }}>
              <QrCode size={24} color={C.navy} />
            </View>
            <View style={{ flex: 1 }}>
              <T w={700} size={10.5} color={navyA(0.4)} style={{ letterSpacing: 0.8 }}>
                KOD REZERWACJI
              </T>
              <T w={800} size={16} style={{ letterSpacing: 2 }}>
                PRZ-48213
              </T>
            </View>
            <Copy size={18} color={navyA(0.4)} />
          </Row>
        </View>

        <Row gap={10} style={{ marginTop: 14 }}>
          <SoftBtn icon={CalendarPlus} label="Do kalendarza" style={{ flex: 1, height: 48, backgroundColor: C.white, boxShadow: shadow.card }} />
          <SoftBtn icon={Navigation} label="Nawiguj" style={{ flex: 1, height: 48, backgroundColor: C.white, boxShadow: shadow.card }} />
        </Row>
        <Row gap={10} style={{ marginTop: 12, borderRadius: 16, backgroundColor: C.sand, paddingHorizontal: 14, paddingVertical: 12 }}>
          <ShieldCheck size={18} color={C.seaDark} />
          <T size={12} color={navyA(0.7)} style={{ flex: 1, lineHeight: 17 }}>
            Bezpłatne odwołanie do{' '}
            <T w={800} size={12}>
              4 lis, 18:00
            </T>
            . Po wizycie poprosimy Cię o zweryfikowaną opinię.
          </T>
        </Row>
        <T w={700} size={13} color={C.ocean} style={{ textAlign: 'center', marginTop: 16 }} onPress={() => router.navigate('/rezerwacje')}>
          Przejdź do rezerwacji
        </T>
      </View>
    </Screen>
  );
}
