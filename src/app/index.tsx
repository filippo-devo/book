import { router } from 'expo-router';
import { ArrowUpRight, Bell, Calendar, Clock3, CloudSun, Ellipsis, Mic, Navigation, Plus, Sparkles, UserPlus } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { Orb, Photo, WaveHeader } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { Avatar, Card, Pill, RatingTag, Row, SectionHeader, SoftBtn, T } from '../components/ui';
import { C, navyA, whiteA } from '../theme';

function Fav({ children, label }: { children: ReactNode; label: string }) {
  return (
    <View style={{ width: 62, alignItems: 'center', gap: 6 }}>
      <View style={{ width: 60, height: 60, borderRadius: 30, padding: 3, backgroundColor: C.sea }}>
        <View style={{ flex: 1, borderRadius: 27, borderWidth: 2.5, borderColor: C.foam, overflow: 'hidden' }}>{children}</View>
      </View>
      <T w={600} size={11} color={navyA(0.75)} style={{ textAlign: 'center', lineHeight: 13 }}>
        {label}
      </T>
    </View>
  );
}

function Recommended({ kind, name, meta, rating }: { kind: 'pool' | 'pilates' | 'turf'; name: string; meta: string; rating: string }) {
  return (
    <Card style={{ width: 232, overflow: 'hidden' }} onPress={() => router.push('/obiekt')}>
      <Photo kind={kind} style={{ height: 104 }}>
        <RatingTag value={rating} style={{ position: 'absolute', top: 10, left: 10 }} />
      </Photo>
      <View style={{ padding: 12 }}>
        <T w={800} size={14}>
          {name}
        </T>
        <T size={12} color={navyA(0.5)}>
          {meta}
        </T>
      </View>
    </Card>
  );
}

export default function MojKlub() {
  const top = useTopInset(10);
  return (
    <Screen tab="klub" light>
      <WaveHeader style={{ paddingTop: top, paddingBottom: 48, paddingHorizontal: 20 }}>
        <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View>
            <Row gap={6}>
              <CloudSun size={14} color={whiteA(0.8)} />
              <T w={700} size={12.5} color={whiteA(0.8)}>
                Śr, 28 października · Gdynia 11°
              </T>
            </Row>
            <T display size={32} color={C.white} style={{ marginTop: 8 }}>
              Cześć, Kasia
            </T>
          </View>
          <Row gap={10} style={{ paddingTop: 4 }}>
            <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: whiteA(0.16), borderWidth: 1, borderColor: whiteA(0.28), alignItems: 'center', justifyContent: 'center' }}>
              <Bell size={18} color={C.white} />
              <View style={{ position: 'absolute', top: 9, right: 10, width: 9, height: 9, borderRadius: 5, backgroundColor: C.coral, borderWidth: 2, borderColor: '#1D7AAE' }} />
            </View>
            <Avatar initials="KN" g={1} size={42} ring={{ width: 2, color: whiteA(0.7) }} />
          </Row>
        </Row>

        <Pressable
          onPress={() => router.push('/my-ai')}
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 14,
            padding: 14,
            borderRadius: 30,
            backgroundColor: whiteA(0.15),
            borderWidth: 1,
            borderColor: whiteA(0.3),
            boxShadow: '0px 20px 40px -20px rgba(11,37,69,0.6)',
          }}>
          <View
            style={{
              width: 66,
              height: 66,
              borderRadius: 33,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 6,
              borderColor: whiteA(0.14),
              boxShadow: '0px 14px 30px -8px rgba(11,37,69,0.6)',
            }}>
            <View style={{ position: 'absolute' }}>
              <Orb size={54} />
            </View>
            <Mic size={26} color={C.white} />
          </View>
          <View style={{ flex: 1 }}>
            <Row gap={8}>
              <T w={800} size={20} color={C.white}>
                My AI
              </T>
              <Row gap={4} style={{ backgroundColor: '#BFF5EE', borderRadius: 999, paddingHorizontal: 7, paddingVertical: 2 }}>
                <Sparkles size={12} color={C.navy} />
                <T w={800} size={10.5}>
                  głosowo
                </T>
              </Row>
            </Row>
            <T size={13} color={whiteA(0.8)} style={{ marginTop: 2, lineHeight: 17 }}>
              „Znajdź kort w Orłowie{'\n'}na jutro po 18:00”
            </T>
          </View>
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: C.white, alignItems: 'center', justifyContent: 'center' }}>
            <ArrowUpRight size={18} color={C.ocean} />
          </View>
        </Pressable>
      </WaveHeader>

      <View style={{ paddingHorizontal: 20, marginTop: -8 }}>
        <SectionHeader title="Najbliższa rezerwacja" link="Wszystkie" onPress={() => router.navigate('/rezerwacje')} />
        <Card style={{ padding: 12 }} onPress={() => router.navigate('/rezerwacje')}>
          <Row gap={14} style={{ alignItems: 'flex-start' }}>
            <Photo kind="clay" radius={18} style={{ width: 92, height: 92 }}>
              <Pill bg={whiteA(0.92)} size={10} style={{ position: 'absolute', left: 8, bottom: 8, paddingHorizontal: 8, paddingVertical: 2 }}>
                ZA 2 DNI
              </Pill>
            </Photo>
            <View style={{ flex: 1, paddingTop: 2 }}>
              <Row gap={6}>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: C.sea }} />
                <T w={800} size={10.5} color={C.seaDark} style={{ letterSpacing: 0.8 }}>
                  POTWIERDZONA
                </T>
              </Row>
              <T w={800} size={16} style={{ marginTop: 4 }}>
                Arena Tenis Redłowo
              </T>
              <T size={12.5} color={navyA(0.55)} style={{ marginTop: 2 }}>
                Kort ziemny nr 3 · hala · 90 min
              </T>
              <Row gap={12} style={{ marginTop: 8 }}>
                <Row gap={4}>
                  <Calendar size={14} color={C.ocean} />
                  <T w={700} size={12.5}>
                    Pt, 30.10
                  </T>
                </Row>
                <Row gap={4}>
                  <Clock3 size={14} color={C.ocean} />
                  <T w={700} size={12.5}>
                    18:00
                  </T>
                </Row>
              </Row>
            </View>
          </Row>
          <Row gap={8} style={{ marginTop: 12 }}>
            <SoftBtn icon={Navigation} label="Nawiguj" style={{ flex: 1 }} />
            <SoftBtn icon={UserPlus} label="Zaproś" style={{ flex: 1 }} />
            <SoftBtn icon={Ellipsis} style={{ width: 44, paddingHorizontal: 0 }} />
          </Row>
        </Card>

        <SectionHeader title="Ulubione" link="Edytuj" style={{ marginTop: 24 }} />
        <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Fav label={'Squash\nPoint'}>
            <Photo kind="squash" style={{ flex: 1 }} gloss={false} />
          </Fav>
          <Fav label={'Michał\nKowalczyk'}>
            <Avatar initials="MK" g={0} size={50} />
          </Fav>
          <Fav label={'Pływalnia\nOrłowo'}>
            <Photo kind="pool" style={{ flex: 1 }} gloss={false} />
          </Fav>
          <Fav label={'Anna\nWiśniewska'}>
            <Avatar initials="AW" g={1} size={50} />
          </Fav>
          <Fav label="Dodaj">
            <View style={{ flex: 1, backgroundColor: C.sand, alignItems: 'center', justifyContent: 'center' }}>
              <Plus size={20} color={C.navy} />
            </View>
          </Fav>
        </Row>

        <SectionHeader title="Polecane w okolicy" link="Mapa" style={{ marginTop: 24 }} onPress={() => router.navigate('/mapa')} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 12, paddingBottom: 18 }}>
        <Recommended kind="pool" name="Morska Pływalnia Orłowo" meta="Basen 25 m · 1,4 km · od 22 zł" rating="4.8" />
        <Recommended kind="pilates" name="Studio Bryza Pilates" meta="Reformer · Sopot · od 75 zł" rating="4.9" />
        <Recommended kind="turf" name="Orlik Gdynia Obłuże" meta="Sztuczna trawa · 3,1 km · od 150 zł" rating="4.6" />
      </ScrollView>
    </Screen>
  );
}
