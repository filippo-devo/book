import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { History, Keyboard, Sparkles, Square, X } from 'lucide-react-native';
import { ScrollView, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Orb, OrbGlow, Photo, Waveform, type PhotoKind } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { useTheme } from '../components/ThemeProvider';
import { Chip, Eyebrow, GlassBtn, InkProvider, ON_DARK_INK, Rating, Row, T } from '../components/ui';
import { C, whiteA } from '../theme';

function Result({ kind, name, meta, slots, price, rating }: { kind: PhotoKind; name: string; meta: string; slots: string[]; price: string; rating: string }) {
  const t = useTheme();
  return (
    <View style={{ width: 262, borderRadius: 22, backgroundColor: t.surface, borderWidth: 1, borderColor: t.surfaceEdge, padding: 12, boxShadow: '0px 18px 40px -16px rgba(0,0,0,0.5)' }}>
      <Row gap={12} style={{ alignItems: 'flex-start' }}>
        <Photo kind={kind} radius={14} style={{ width: 58, height: 58 }} />
        <View style={{ flex: 1 }}>
          <T w={800} size={14} numberOfLines={1}>
            {name}
          </T>
          <T size={11.5} color={t.textA(0.55)} style={{ marginTop: 2 }}>
            {meta}
          </T>
          <View style={{ marginTop: 4 }}>
            <Rating value={rating} size={12} />
          </View>
        </View>
      </Row>
      <Row style={{ justifyContent: 'space-between', marginTop: 12 }}>
        <Row gap={6}>
          {slots.map((s, i) => (
            <View key={s} style={{ height: 26, paddingHorizontal: 9, borderRadius: 9, justifyContent: 'center', backgroundColor: i === 0 ? C.coral : t.oceanTint }}>
              <T w={800} size={12} color={i === 0 ? C.white : t.text}>
                {s}
              </T>
            </View>
          ))}
        </Row>
        <T w={800} size={13}>
          {price}
        </T>
      </Row>
    </View>
  );
}

export default function MyAI() {
  const top = useTopInset(8);
  return (
    <Screen tab="klub" dark bg={C.navy}>
      <InkProvider value={ON_DARK_INK}>
        <LinearGradient colors={[C.ocean, '#123A69', C.navy, '#071A33']} locations={[0, 0.35, 0.7, 1]} start={{ x: 0.5, y: 0.25 }} end={{ x: 0.5, y: 1 }} style={StyleSheet.absoluteFill} />
        <Svg pointerEvents="none" width="100%" height={160} viewBox="0 0 390 160" style={{ position: 'absolute', top: 330, opacity: 0.6 }} fill="none">
          <Path d="M-10 80 C 60 20, 120 140, 195 80 S 330 20, 400 80" stroke={C.sea} strokeOpacity={0.35} strokeWidth={1.2} />
          <Path d="M-10 90 C 70 40, 130 150, 195 90 S 320 30, 400 95" stroke={C.ocean} strokeOpacity={0.5} strokeWidth={1.2} />
          <Path d="M-10 70 C 50 120, 140 10, 195 70 S 340 130, 400 65" stroke="#fff" strokeOpacity={0.12} strokeWidth={1.2} />
        </Svg>

        <View style={{ paddingTop: top, paddingHorizontal: 20 }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <GlassBtn icon={X} onPress={() => router.back()} />
            <View style={{ alignItems: 'center' }}>
              <Row gap={6}>
                <Sparkles size={16} color={C.sea} />
                <T w={800} size={16} color={C.white}>
                  My AI
                </T>
              </Row>
              <T w={600} size={11} color={whiteA(0.5)}>
                Asystent rezerwacji
              </T>
            </View>
            <GlassBtn icon={History} />
          </Row>

          <Row gap={8} style={{ marginTop: 24 }}>
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: C.coral, boxShadow: '0px 0px 0px 4px rgba(255,107,91,0.25)' }} />
            <Eyebrow color={C.sea}>Transkrypcja na żywo</Eyebrow>
          </Row>
          <T w={600} size={22} color={C.white} style={{ marginTop: 10, lineHeight: 29 }}>
            Znajdź kort tenisowy w Gdyni na jutro po 18:00, <T w={600} size={22} color={whiteA(0.4)}>najlepiej kryty, blisko Orłowa</T>
            <T size={22} color={C.sea}>
              {' '}|
            </T>
          </T>

          <View style={{ height: 196, alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
            <View style={{ position: 'absolute', width: 196, height: 196, borderRadius: 98, borderWidth: 1, borderColor: whiteA(0.07) }} />
            <View style={{ position: 'absolute', width: 160, height: 160, borderRadius: 80, borderWidth: 1, borderColor: 'rgba(46,196,182,0.2)' }} />
            <OrbGlow size={230} />
            <Orb size={118} />
            <View style={{ position: 'absolute', left: 0 }}>
              <GlassBtn icon={Keyboard} />
            </View>
            <View style={{ position: 'absolute', right: 0 }}>
              <GlassBtn icon={Square} bg="rgba(255,107,91,0.9)" onPress={() => router.back()} />
            </View>
          </View>
          <View style={{ alignItems: 'center', gap: 8, marginTop: -8 }}>
            <Waveform bars={30} height={26} />
            <T w={700} size={14} color={whiteA(0.85)}>
              Słucham…
            </T>
          </View>

          <Row style={{ justifyContent: 'space-between', marginTop: 16 }}>
            <T w={700} size={13.5} color={C.white}>
              Mam 3 wolne korty kryte · jutro
            </T>
            <T w={700} size={12.5} color={C.sea} onPress={() => router.navigate('/mapa')}>
              Pokaż na mapie
            </T>
          </Row>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 12, paddingTop: 12, paddingBottom: 6 }}>
          <Result kind="clay" name="Arena Tenis Redłowo" meta="Kryty · ziemny · 1,2 km" slots={['18:00', '19:30']} price="90 zł" rating="4.9" />
          <Result kind="hard" name="Kort Kamienna Góra" meta="Kryty · twardy · 2,8 km" slots={['18:30', '20:00']} price="75 zł" rating="4.7" />
          <Result kind="hard" name="Tenis Klub Orłowo" meta="Balon · twardy · 0,9 km" slots={['19:00', '21:00']} price="85 zł" rating="4.6" />
        </ScrollView>

        <View style={{ paddingHorizontal: 20 }}>
          <Eyebrow color={whiteA(0.45)} style={{ marginTop: 18 }}>
            Spróbuj powiedzieć
          </Eyebrow>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 8, paddingTop: 10 }}>
          <Chip glass label="„Fizjo w Sopocie dziś”" />
          <Chip glass label="„Orlik na sobotę, 12 osób”" />
          <Chip glass label="„Najlepszy trener pływania”" />
        </ScrollView>
      </InkProvider>
    </Screen>
  );
}
