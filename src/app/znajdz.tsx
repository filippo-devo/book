import { router } from 'expo-router';
import { ArrowDownUp, Calendar, ChevronDown, Heart, Locate, Map, MapPin, MapPinned, SlidersHorizontal, Sparkles, Trophy, UserRoundCheck, Warehouse, type LucideIcon } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

import { Photo, type PhotoKind } from '../components/art';
import { SearchField, Segmented, SportChips } from '../components/blocks';
import { Screen, useTopInset } from '../components/Screen';
import { Card, Pill, Rating, Row, T } from '../components/ui';
import { C, navyA, shadow, whiteA } from '../theme';

function MiniFilter({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <Row gap={5} style={{ height: 30, paddingHorizontal: 11, borderRadius: 999, backgroundColor: C.sand }}>
      <Icon size={14} color={C.navy} />
      <T w={600} size={12.5}>
        {label}
      </T>
    </Row>
  );
}

function Slot({ t, on }: { t: string; on?: boolean }) {
  return (
    <View
      style={{
        height: 30,
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: on ? 'rgba(46,196,182,0.14)' : C.white,
        borderWidth: on ? 1.5 : 1,
        borderColor: on ? 'rgba(46,196,182,0.6)' : navyA(0.1),
      }}>
      <T w={800} size={12.5} color={on ? C.seaDark : C.navy}>
        {t}
      </T>
    </View>
  );
}

function VenueCard({ kind, name, meta, rating, count, price, badge, isNew }: { kind: PhotoKind; name: string; meta: string; rating: string; count: string; price: string; badge?: string; isNew?: boolean }) {
  return (
    <Card style={{ overflow: 'hidden' }} onPress={() => router.push('/obiekt')}>
      <Photo kind={kind} style={{ height: 148 }}>
        {badge ? <Pill icon={Trophy} style={{ position: 'absolute', top: 12, left: 12 }}>{badge}</Pill> : null}
        {isNew ? (
          <Pill icon={Sparkles} bg="rgba(11,37,69,0.55)" color={C.white} style={{ position: 'absolute', top: 12, left: 12 }}>
            Nowość
          </Pill>
        ) : null}
        <View style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: 18, backgroundColor: whiteA(0.9), alignItems: 'center', justifyContent: 'center' }}>
          <Heart size={18} color={C.coral} fill={badge ? C.coral : 'transparent'} />
        </View>
        <Row gap={4} style={{ position: 'absolute', bottom: 12, right: 12 }}>
          <View style={{ width: 16, height: 6, borderRadius: 3, backgroundColor: C.white }} />
          {[0, 1, 2].map((i) => (
            <View key={i} style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: whiteA(0.55) }} />
          ))}
        </Row>
      </Photo>
      <View style={{ padding: 16, paddingTop: 14 }}>
        <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start' }} gap={8}>
          <View style={{ flex: 1 }}>
            <T w={800} size={17}>
              {name}
            </T>
            <T size={12.5} color={navyA(0.55)} style={{ marginTop: 2 }}>
              {meta}
            </T>
          </View>
          <Rating value={rating} count={count} />
        </Row>
        <Row style={{ justifyContent: 'space-between', marginTop: 12 }}>
          <Row gap={6}>
            <Slot t="18:00" on />
            <Slot t="19:30" />
            <Slot t="20:00" />
            <T w={800} size={12.5} color={navyA(0.45)} style={{ marginLeft: 4 }}>
              +4
            </T>
          </Row>
          <T size={12} color={navyA(0.5)}>
            od{' '}
            <T w={800} size={16}>
              {price}
            </T>
            /h
          </T>
        </Row>
      </View>
    </Card>
  );
}

export default function Znajdz() {
  const top = useTopInset(8);
  return (
    <Screen
      tab="znajdz"
      floating={
        <View style={{ alignItems: 'center' }}>
          <Pressable
            onPress={() => router.navigate('/mapa')}
            style={{ height: 44, paddingHorizontal: 18, borderRadius: 22, backgroundColor: C.navy, flexDirection: 'row', alignItems: 'center', gap: 7, boxShadow: '0px 14px 28px -10px rgba(11,37,69,0.6)' }}>
            <Map size={16} color={C.white} />
            <T w={800} size={14} color={C.white}>
              Mapa
            </T>
          </Pressable>
        </View>
      }>
      <View style={{ paddingTop: top, paddingHorizontal: 20 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <T display size={32}>
            Znajdź
          </T>
          <Row gap={5} style={{ height: 34, paddingHorizontal: 12, borderRadius: 999, backgroundColor: C.white, borderWidth: 1, borderColor: navyA(0.08) }}>
            <MapPin size={14} color={C.coral} />
            <T w={700} size={12.5}>
              Gdynia, Redłowo
            </T>
            <ChevronDown size={14} color={navyA(0.4)} />
          </Row>
        </Row>
        <Row gap={10} style={{ marginTop: 16 }}>
          <SearchField placeholder="Sport, obiekt lub dzielnica" style={{ flex: 1 }} />
          <View style={{ width: 52, height: 52, borderRadius: 18, backgroundColor: C.navy, alignItems: 'center', justifyContent: 'center', boxShadow: shadow.soft }}>
            <SlidersHorizontal size={20} color={C.white} />
          </View>
        </Row>
        <View style={{ marginTop: 16 }}>
          <Segmented
            active={0}
            items={[
              { label: 'Miejsca', icon: MapPinned },
              { label: 'Specjaliści', icon: UserRoundCheck },
            ]}
          />
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <SportChips />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Row gap={8} style={{ marginTop: 12 }}>
          <MiniFilter icon={Calendar} label="Jutro, 18–21" />
          <MiniFilter icon={Locate} label="do 3 km" />
          <MiniFilter icon={Warehouse} label="Kryte" />
        </Row>
        <Row style={{ justifyContent: 'space-between', marginTop: 16, marginBottom: 12 }}>
          <T w={600} size={13} color={navyA(0.55)}>
            <T w={800} size={13}>
              14 kortów
            </T>{' '}
            z wolnym terminem
          </T>
          <Row gap={4}>
            <T w={700} size={13}>
              Polecane
            </T>
            <ArrowDownUp size={14} color={C.navy} />
          </Row>
        </Row>
        <View style={{ gap: 12 }}>
          <VenueCard kind="clay" name="Arena Tenis Redłowo" meta="Tenis · padel · ul. Legionów 130 · 1,2 km" rating="4.9" count="312" price="80 zł" badge="#2 w Trójmieście" />
          <VenueCard kind="hard" name="Padel Bałtyk Gdynia" meta="Padel · tenis · Mały Kack · 2,1 km" rating="4.8" count="96" price="120 zł" isNew />
          <VenueCard kind="squash" name="Squash Point Sopot" meta="Squash · 4 korty · Sopot · 4,6 km" rating="4.7" count="204" price="60 zł" />
        </View>
      </View>
    </Screen>
  );
}
