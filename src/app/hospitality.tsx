import { router } from 'expo-router';
import { Bookmark, ConciergeBell, Dumbbell, HandHeart, Mic, Salad, SlidersHorizontal, Stethoscope, Trophy, Zap, type LucideIcon } from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

import { WaveHeader } from '../components/art';
import { SearchField } from '../components/blocks';
import { Screen, useTopInset } from '../components/Screen';
import { Avatar, Card, Chip, GlassBtn, Rating, Row, T, Verified } from '../components/ui';
import { C, navyA, shadow, whiteA } from '../theme';

function Category({ icon: Icon, label, count, bg, fg }: { icon: LucideIcon; label: string; count: string; bg: string; fg: string }) {
  return (
    <View style={{ flex: 1, borderRadius: 22, padding: 10, paddingBottom: 14, gap: 12, backgroundColor: bg, boxShadow: shadow.card }}>
      <View style={{ width: 40, height: 40, borderRadius: 14, backgroundColor: whiteA(0.8), alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={20} color={fg} />
      </View>
      <View>
        <T w={800} size={12.5} numberOfLines={1} adjustsFontSizeToFit>
          {label}
        </T>
        <T w={600} size={11} color={navyA(0.45)} style={{ marginTop: 2 }}>
          {count}
        </T>
      </View>
    </View>
  );
}

function SpecialistCard({
  initials,
  g,
  name,
  role,
  rating,
  count,
  place,
  next,
  price,
  rank,
}: {
  initials: string;
  g: number;
  name: string;
  role: string;
  rating: string;
  count: string;
  place: string;
  next: string;
  price: string;
  rank?: number;
}) {
  return (
    <Card style={{ padding: 14 }} onPress={() => router.push('/specjalista')}>
      <Row gap={12} style={{ alignItems: 'flex-start' }}>
        <View>
          <Avatar initials={initials} g={g} size={58} radius={20} />
          <View style={{ position: 'absolute', right: -4, bottom: -4, width: 22, height: 22, borderRadius: 11, backgroundColor: C.white, alignItems: 'center', justifyContent: 'center' }}>
            <Verified size={16} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Row gap={8} style={{ justifyContent: 'space-between' }}>
            <T w={800} size={15} numberOfLines={1} style={{ flexShrink: 1 }}>
              {name}
            </T>
            {rank ? (
              <View style={{ backgroundColor: C.sand, borderRadius: 8, paddingHorizontal: 7, paddingVertical: 2 }}>
                <T w={800} size={11}>
                  #{rank}
                </T>
              </View>
            ) : null}
          </Row>
          <T size={12} color={navyA(0.55)} numberOfLines={1}>
            {role}
          </T>
          <Row gap={8} style={{ marginTop: 4 }}>
            <Rating value={rating} count={count} size={12} />
            <T size={12} color={navyA(0.25)}>
              ·
            </T>
            <T w={500} size={12} color={navyA(0.55)}>
              {place}
            </T>
          </Row>
        </View>
      </Row>
      <Row style={{ justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderStyle: 'dashed', borderTopColor: navyA(0.1) }}>
        <Row gap={6} style={{ backgroundColor: 'rgba(46,196,182,0.1)', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 }}>
          <Zap size={14} color={C.seaDark} />
          <T w={700} size={12} color={C.seaDark}>
            {next}
          </T>
        </Row>
        <T size={12} color={navyA(0.5)}>
          od{' '}
          <T w={800} size={15}>
            {price}
          </T>
        </T>
      </Row>
    </Card>
  );
}

export default function Hospitality() {
  const top = useTopInset(10);
  return (
    <Screen tab="hosp" light>
      <WaveHeader style={{ paddingTop: top, paddingBottom: 58, paddingHorizontal: 20 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <Row gap={6}>
            <ConciergeBell size={14} color={whiteA(0.8)} />
            <T w={700} size={12.5} color={whiteA(0.8)}>
              Hospitality
            </T>
          </Row>
          <GlassBtn icon={Bookmark} />
        </Row>
        <T display size={28} color={C.white} style={{ marginTop: 4, lineHeight: 32 }}>
          Specjaliści, którzy{'\n'}dbają o{' '}
          <T display italic size={28} color="#BFF5EE">
            Twoją formę
          </T>
        </T>
        <SearchField placeholder="Trener, fizjo, dietetyk…" mic={Mic} style={{ marginTop: 16 }} />
      </WaveHeader>

      <View style={{ paddingHorizontal: 20, marginTop: -20 }}>
        <Row gap={10} style={{ alignItems: 'stretch' }}>
          <Category icon={Dumbbell} label="Trenerzy" count="128" bg="#E3EFF8" fg={C.ocean} />
          <Category icon={HandHeart} label="Fizjo" count="64" bg="#DDF4F1" fg={C.seaDark} />
          <Category icon={Salad} label="Dietetycy" count="37" bg={C.sand} fg="#9A6A2C" />
          <Category icon={Stethoscope} label="Lekarze" count="22" bg="#FFE6E2" fg="#E5503F" />
        </Row>

        <Pressable
          onPress={() => router.push('/ranking')}
          style={{ marginTop: 16, borderRadius: 22, backgroundColor: C.navy, padding: 14, paddingRight: 16, flexDirection: 'row', alignItems: 'center', gap: 12, overflow: 'hidden' }}>
          <Svg pointerEvents="none" width={150} height={150} style={{ position: 'absolute', right: -24, top: -40 }}>
            <Defs>
              <RadialGradient id="rk" cx="50%" cy="50%" r="50%">
                <Stop offset="0" stopColor={C.sea} stopOpacity={0.4} />
                <Stop offset="1" stopColor={C.sea} stopOpacity={0} />
              </RadialGradient>
            </Defs>
            <Circle cx={75} cy={75} r={75} fill="url(#rk)" />
          </Svg>
          <View style={{ width: 44, height: 44, borderRadius: 16, backgroundColor: whiteA(0.1), alignItems: 'center', justifyContent: 'center' }}>
            <Trophy size={22} color={C.sand} />
          </View>
          <View style={{ flex: 1 }}>
            <T w={800} size={14} color={C.white}>
              Ranking października
            </T>
            <T size={11.5} color={whiteA(0.55)}>
              Top trenerzy w Gdyni · 1 240 wizyt
            </T>
          </View>
          <Row>
            {[
              ['MK', 0],
              ['JM', 1],
              ['KD', 3],
            ].map(([ini, g], i) => (
              <Avatar key={ini} initials={ini as string} g={g as number} size={30} ring={{ width: 2, color: C.navy }} style={{ marginLeft: i ? -10 : 0 }} />
            ))}
          </Row>
        </Pressable>

        <Row style={{ justifyContent: 'space-between', marginTop: 24, marginBottom: 12, alignItems: 'flex-end' }}>
          <T w={800} size={18.5}>
            Polecani w pobliżu
          </T>
          <Row gap={4}>
            <SlidersHorizontal size={14} color={C.ocean} />
            <T w={700} size={13} color={C.ocean}>
              Filtry
            </T>
          </Row>
        </Row>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 8, marginBottom: 12 }}>
        <Chip label="Dostępni dziś" active height={32} />
        <Chip label="Gdynia" height={32} />
        <Chip label="do 200 zł" height={32} />
        <Chip label="Online" height={32} />
      </ScrollView>
      <View style={{ paddingHorizontal: 20, gap: 12 }}>
        <SpecialistCard initials="MK" g={0} name="Michał Kowalczyk" role="Trener personalny · motoryka" rating="4.97" count="214" place="Śródmieście" next="Dziś 17:30" price="180 zł" rank={1} />
        <SpecialistCard initials="AW" g={1} name="mgr Anna Wiśniewska" role="Fizjoterapeutka · urazy sportowe" rating="4.95" count="188" place="Sopot" next="Jutro 9:00" price="200 zł" />
        <SpecialistCard initials="PZ" g={4} name="Paweł Zieliński" role="Dietetyk sportowy · biegacze" rating="4.92" count="96" place="Gdańsk Oliwa" next="Pt 12:00" price="160 zł" />
        <SpecialistCard initials="TL" g={2} name="lek. Tomasz Lewandowski" role="Ortopeda · medycyna sportowa" rating="4.9" count="131" place="Gdynia Redłowo" next="Pn 15:20" price="250 zł" />
      </View>
    </Screen>
  );
}
