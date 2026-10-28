import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ChevronDown, ChevronLeft, ChevronUp, Crown, Dumbbell, Info, Minus, ShieldCheck } from 'lucide-react-native';
import { View } from 'react-native';

import { Hero } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { useTheme } from '../components/ThemeProvider';
import { Avatar, Chip, GlassBtn, Rating, Row, StarIcon, T, Verified } from '../components/ui';
import { C } from '../theme';

const MEDAL: Record<number, string> = { 1: '#FFD9A0', 2: '#E3EEF6', 3: '#F2C6A4' };
const GOLD = '#E9A23B';

function Podium({ initials, g, name, score, place, height }: { initials: string; g: number; name: string; score: string; place: 1 | 2 | 3; height: number }) {
  const t = useTheme();
  const size = place === 1 ? 74 : 60;
  const winner = place === 1;
  const pedestal = { width: '100%' as const, height, borderTopLeftRadius: 18, borderTopRightRadius: 18, alignItems: 'center' as const, paddingTop: 6, marginTop: 10 };
  return (
    <View style={{ width: 104, alignItems: 'center' }}>
      <View>
        {winner ? (
          <View style={{ position: 'absolute', top: -24, left: 0, right: 0, alignItems: 'center' }}>
            <Crown size={24} color={GOLD} fill={GOLD} />
          </View>
        ) : null}
        <Avatar initials={initials} g={g} size={size} ring={{ width: 3, color: t.surface }} />
        <View style={{ position: 'absolute', bottom: -9, left: 0, right: 0, alignItems: 'center' }}>
          <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: MEDAL[place], borderWidth: 2, borderColor: t.surface, alignItems: 'center', justifyContent: 'center' }}>
            <T w={800} size={11} color={C.navy}>
              {place}
            </T>
          </View>
        </View>
      </View>
      <T w={800} size={13} style={{ marginTop: 14, textAlign: 'center', lineHeight: 16 }}>
        {name}
      </T>
      <Row gap={4} style={{ marginTop: 2 }}>
        <StarIcon size={10} />
        <T w={700} size={11} color={t.textA(0.55)}>
          {score}
        </T>
      </Row>
      {winner ? (
        <LinearGradient colors={[C.ocean, C.sea]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[pedestal, { boxShadow: t.shadow.ocean }]}>
          <T display size={26} color={C.white}>
            {place}
          </T>
        </LinearGradient>
      ) : (
        <View style={[pedestal, { backgroundColor: t.surface, borderWidth: 1, borderBottomWidth: 0, borderColor: t.textA(0.06), boxShadow: t.shadow.card }]}>
          <T display size={26} color={t.oceanInk}>
            {place}
          </T>
        </View>
      )}
    </View>
  );
}

function RankRow({ pos, trend, initials, g, name, spec, score, rating, count, last }: { pos: number; trend: ['up' | 'down' | 'eq', string]; initials: string; g: number; name: string; spec: string; score: string; rating: string; count: string; last?: boolean }) {
  const t = useTheme();
  const [dir, delta] = trend;
  return (
    <Row gap={12} style={{ paddingVertical: 10, borderBottomWidth: last ? 0 : 1, borderBottomColor: t.textA(0.06) }}>
      <View style={{ width: 28, alignItems: 'center' }}>
        <T w={800} size={16}>
          {pos}
        </T>
        {dir === 'eq' ? (
          <Minus size={14} color={t.textA(0.3)} />
        ) : (
          <Row>
            {dir === 'up' ? <ChevronUp size={14} color={t.seaInk} /> : <ChevronDown size={14} color={C.coral} />}
            <T w={800} size={10} color={dir === 'up' ? t.seaInk : C.coral}>
              {delta}
            </T>
          </Row>
        )}
      </View>
      <Avatar initials={initials} g={g} size={44} radius={15} />
      <View style={{ flex: 1 }}>
        <Row gap={4}>
          <T w={800} size={14} numberOfLines={1} style={{ flexShrink: 1 }}>
            {name}
          </T>
          <Verified size={14} />
        </Row>
        <Row gap={6}>
          <T size={11.5} color={t.textA(0.5)}>
            {spec} ·
          </T>
          <Rating value={rating} count={count} size={11} />
        </Row>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <T w={800} size={15}>
          {score}
        </T>
        <T w={700} size={10} color={t.textA(0.4)} style={{ letterSpacing: 1 }}>
          PKT
        </T>
      </View>
    </Row>
  );
}

export default function Ranking() {
  const t = useTheme();
  const top = useTopInset(4);
  return (
    <Screen tab="hosp">
      <Hero top={top} bottom={0}>
        <View style={{ paddingHorizontal: 20 }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <GlassBtn icon={ChevronLeft} onPress={() => router.back()} />
            <T w={700} size={12} color={t.textA(0.6)}>
              Październik 2026
            </T>
            <GlassBtn icon={Info} />
          </Row>
          <T display size={29} style={{ textAlign: 'center', marginTop: 12 }}>
            Top trenerzy w Gdyni
          </T>
          <Row gap={8} style={{ justifyContent: 'center', marginTop: 12 }}>
            <Chip height={32} label="Trenerzy personalni" icon={<Dumbbell size={14} color={t.text} />} />
            <Chip height={32} label="Gdynia" icon={<ChevronDown size={14} color={t.text} />} />
          </Row>
          <Row gap={4} style={{ justifyContent: 'center', alignItems: 'flex-end', marginTop: 34 }}>
            <Podium initials="JM" g={1} name="Julia Mazur" score="4.96" place={2} height={64} />
            <Podium initials="MK" g={0} name={'Michał\nKowalczyk'} score="4.97" place={1} height={92} />
            <Podium initials="KD" g={3} name={'Kamil\nDąbrowski'} score="4.94" place={3} height={46} />
          </Row>
        </View>
      </Hero>

      <View style={{ paddingHorizontal: 20, paddingTop: 16 }}>
        <Row gap={8} style={{ backgroundColor: t.seaTint, borderRadius: 16, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4 }}>
          <ShieldCheck size={16} color={t.seaInk} />
          <T w={600} size={11.5} color={t.textA(0.6)} style={{ flex: 1 }}>
            Liczymy tylko zweryfikowane wizyty z ostatnich 90 dni
          </T>
        </Row>
        <RankRow pos={4} trend={['up', '2']} initials="OL" g={5} name="Oliwia Lewandowska" spec="Crossfit · Obłuże" score="93,8" rating="4.93" count="167" />
        <RankRow pos={5} trend={['eq', '']} initials="BN" g={2} name="Bartosz Nowak" spec="Kalistenika · Orłowo" score="92,4" rating="4.91" count="142" />
        <RankRow pos={6} trend={['down', '1']} initials="ZK" g={4} name="Zuzanna Kamińska" spec="Biegi · Redłowo" score="91,9" rating="4.92" count="98" />
        <RankRow pos={7} trend={['up', '4']} initials="TW" g={0} name="Tomasz Wójcik" spec="Boks · Chylonia" score="90,7" rating="4.89" count="121" />
        <RankRow pos={8} trend={['down', '2']} initials="NS" g={1} name="Natalia Szymańska" spec="Joga · Sopot" score="89,5" rating="4.9" count="77" last />
      </View>
    </Screen>
  );
}
