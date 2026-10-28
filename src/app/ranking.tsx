import { router } from 'expo-router';
import { ChevronDown, ChevronLeft, ChevronUp, Crown, Dumbbell, Info, Minus, ShieldCheck } from 'lucide-react-native';
import { View } from 'react-native';

import { WaveHeader } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { Avatar, Chip, GlassBtn, Rating, Row, StarIcon, T, Verified } from '../components/ui';
import { C, navyA, whiteA } from '../theme';

const MEDAL: Record<number, string> = { 1: '#FFD9A0', 2: '#E3EEF6', 3: '#F2C6A4' };

function Podium({ initials, g, name, score, place, height }: { initials: string; g: number; name: string; score: string; place: 1 | 2 | 3; height: number }) {
  const size = place === 1 ? 74 : 60;
  return (
    <View style={{ width: 104, alignItems: 'center' }}>
      <View>
        {place === 1 ? (
          <View style={{ position: 'absolute', top: -24, left: 0, right: 0, alignItems: 'center' }}>
            <Crown size={24} color="#FFD9A0" fill="#FFD9A0" />
          </View>
        ) : null}
        <Avatar initials={initials} g={g} size={size} ring={{ width: 3, color: whiteA(0.8) }} />
        <View style={{ position: 'absolute', bottom: -9, left: 0, right: 0, alignItems: 'center' }}>
          <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: MEDAL[place], borderWidth: 2, borderColor: C.white, alignItems: 'center', justifyContent: 'center' }}>
            <T w={800} size={11}>
              {place}
            </T>
          </View>
        </View>
      </View>
      <T w={800} size={13} color={C.white} style={{ marginTop: 14, textAlign: 'center', lineHeight: 16 }}>
        {name}
      </T>
      <Row gap={4} style={{ marginTop: 2 }}>
        <StarIcon size={10} color="#9BEFE4" />
        <T w={700} size={11} color={whiteA(0.65)}>
          {score}
        </T>
      </Row>
      <View style={{ marginTop: 10, width: '100%', height, borderTopLeftRadius: 18, borderTopRightRadius: 18, backgroundColor: whiteA(0.16), borderTopWidth: 1, borderColor: whiteA(0.4), alignItems: 'center', paddingTop: 6 }}>
        <T display size={26} color={whiteA(0.9)}>
          {place}
        </T>
      </View>
    </View>
  );
}

function RankRow({ pos, trend, initials, g, name, spec, score, rating, count, last }: { pos: number; trend: ['up' | 'down' | 'eq', string]; initials: string; g: number; name: string; spec: string; score: string; rating: string; count: string; last?: boolean }) {
  const [dir, delta] = trend;
  return (
    <Row gap={12} style={{ paddingVertical: 10, borderBottomWidth: last ? 0 : 1, borderBottomColor: navyA(0.06) }}>
      <View style={{ width: 28, alignItems: 'center' }}>
        <T w={800} size={16}>
          {pos}
        </T>
        {dir === 'eq' ? (
          <Minus size={14} color={navyA(0.3)} />
        ) : (
          <Row>
            {dir === 'up' ? <ChevronUp size={14} color={C.seaDark} /> : <ChevronDown size={14} color={C.coral} />}
            <T w={800} size={10} color={dir === 'up' ? C.seaDark : C.coral}>
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
          <T size={11.5} color={navyA(0.5)}>
            {spec} ·
          </T>
          <Rating value={rating} count={count} size={11} />
        </Row>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <T w={800} size={15}>
          {score}
        </T>
        <T w={700} size={10} color={navyA(0.4)} style={{ letterSpacing: 1 }}>
          PKT
        </T>
      </View>
    </Row>
  );
}

export default function Ranking() {
  const top = useTopInset(4);
  return (
    <Screen tab="hosp" light>
      <WaveHeader style={{ paddingTop: top, paddingBottom: 30 }} waveHeight={30} lines={0.12}>
        <View style={{ paddingHorizontal: 20 }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <GlassBtn icon={ChevronLeft} onPress={() => router.back()} />
            <T w={700} size={12} color={whiteA(0.8)}>
              Październik 2026
            </T>
            <GlassBtn icon={Info} />
          </Row>
          <T display size={29} color={C.white} style={{ textAlign: 'center', marginTop: 12 }}>
            Top trenerzy w Gdyni
          </T>
          <Row gap={8} style={{ justifyContent: 'center', marginTop: 12 }}>
            <Chip glass height={32} label="Trenerzy personalni" icon={<Dumbbell size={14} color={whiteA(0.9)} />} />
            <Chip glass height={32} label="Gdynia" icon={<ChevronDown size={14} color={whiteA(0.9)} />} />
          </Row>
          <Row gap={4} style={{ justifyContent: 'center', alignItems: 'flex-end', marginTop: 34 }}>
            <Podium initials="JM" g={1} name="Julia Mazur" score="4.96" place={2} height={64} />
            <Podium initials="MK" g={0} name={'Michał\nKowalczyk'} score="4.97" place={1} height={92} />
            <Podium initials="KD" g={3} name={'Kamil\nDąbrowski'} score="4.94" place={3} height={46} />
          </Row>
        </View>
      </WaveHeader>

      <View style={{ paddingHorizontal: 20 }}>
        <Row gap={8} style={{ backgroundColor: 'rgba(46,196,182,0.1)', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4 }}>
          <ShieldCheck size={16} color={C.seaDark} />
          <T w={600} size={11.5} color={navyA(0.6)} style={{ flex: 1 }}>
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
