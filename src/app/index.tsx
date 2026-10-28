import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ArrowUpRight, Bell, Calendar, Clock3, CloudSun, Ellipsis, Mic, Navigation, Plus, Sparkles, UserPlus } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { Hero, Orb, Photo, WaveLines } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { useTheme } from '../components/ThemeProvider';
import { Avatar, Card, GlassBtn, Pill, RatingTag, Row, SectionHeader, SoftBtn, T } from '../components/ui';
import { C, OCEAN_GRADIENT, OCEAN_STOPS, whiteA } from '../theme';

function Fav({ children, label }: { children: ReactNode; label: string }) {
  const t = useTheme();
  return (
    <View style={{ width: 62, alignItems: 'center', gap: 6 }}>
      <View style={{ width: 60, height: 60, borderRadius: 30, padding: 3, backgroundColor: C.sea }}>
        <View style={{ flex: 1, borderRadius: 27, borderWidth: 2.5, borderColor: t.bg, overflow: 'hidden' }}>{children}</View>
      </View>
      <T w={600} size={11} color={t.textA(0.75)} style={{ textAlign: 'center', lineHeight: 13 }}>
        {label}
      </T>
    </View>
  );
}

function Recommended({ kind, name, meta, rating }: { kind: 'pool' | 'pilates' | 'turf'; name: string; meta: string; rating: string }) {
  const t = useTheme();
  return (
    <Card style={{ width: 232, overflow: 'hidden' }} onPress={() => router.push('/obiekt')}>
      <Photo kind={kind} style={{ height: 104 }}>
        <RatingTag value={rating} style={{ position: 'absolute', top: 10, left: 10 }} />
      </Photo>
      <View style={{ padding: 12 }}>
        <T w={800} size={14}>
          {name}
        </T>
        <T size={12} color={t.textA(0.5)}>
          {meta}
        </T>
      </View>
    </Card>
  );
}

/** The one vivid element on the home screen: the voice assistant entry point. */
function MyAiCard() {
  const t = useTheme();
  return (
    <Pressable onPress={() => router.push('/my-ai')} style={{ marginTop: 20, borderRadius: 30, boxShadow: t.shadow.ocean }}>
      <LinearGradient
        colors={OCEAN_GRADIENT}
        locations={OCEAN_STOPS}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flexDirection: 'row', alignItems: 'center', gap: 14, padding: 14, borderRadius: 30, overflow: 'hidden' }}>
        <View style={StyleSheet.absoluteFill}>
          <WaveLines opacity={0.12} rows={[70, 130, 190]} />
        </View>
        <View style={{ width: 66, height: 66, borderRadius: 33, alignItems: 'center', justifyContent: 'center', borderWidth: 6, borderColor: whiteA(0.14) }}>
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
              <T w={800} size={10.5} color={C.navy}>
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
      </LinearGradient>
    </Pressable>
  );
}

function Greeting() {
  const t = useTheme();
  return (
    <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <View>
        <Row gap={6}>
          <CloudSun size={14} color={t.textA(0.6)} />
          <T w={700} size={12.5} color={t.textA(0.6)}>
            Śr, 28 października · Gdynia 11°
          </T>
        </Row>
        <T display size={32} color={t.text} style={{ marginTop: 8 }}>
          Cześć, Kasia
        </T>
      </View>
      <Row gap={10} style={{ paddingTop: 4 }}>
        <View>
          <GlassBtn icon={Bell} />
          <View style={{ position: 'absolute', top: 9, right: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: C.coral }} />
        </View>
        <Avatar initials="KN" g={1} size={42} ring={{ width: 2, color: t.textA(0.12) }} />
      </Row>
    </Row>
  );
}

export default function MojKlub() {
  const t = useTheme();
  const top = useTopInset(10);
  return (
    <Screen tab="klub">
      <Hero top={top} bottom={36} style={{ paddingHorizontal: 20 }}>
        <Greeting />
        <MyAiCard />
      </Hero>

      <View style={{ paddingHorizontal: 20, marginTop: -4 }}>
        <SectionHeader title="Najbliższa rezerwacja" link="Wszystkie" onPress={() => router.navigate('/rezerwacje')} />
        <Card style={{ padding: 12 }} onPress={() => router.navigate('/rezerwacje')}>
          <Row gap={14} style={{ alignItems: 'flex-start' }}>
            <Photo kind="clay" radius={18} style={{ width: 92, height: 92 }}>
              <Pill bg={whiteA(0.92)} color={C.navy} size={10} style={{ position: 'absolute', left: 8, bottom: 8, paddingHorizontal: 8, paddingVertical: 2 }}>
                ZA 2 DNI
              </Pill>
            </Photo>
            <View style={{ flex: 1, paddingTop: 2 }}>
              <Row gap={6}>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: C.sea }} />
                <T w={800} size={10.5} color={t.seaInk} style={{ letterSpacing: 0.8 }}>
                  POTWIERDZONA
                </T>
              </Row>
              <T w={800} size={16} style={{ marginTop: 4 }}>
                Arena Tenis Redłowo
              </T>
              <T size={12.5} color={t.textA(0.55)} style={{ marginTop: 2 }}>
                Kort ziemny nr 3 · hala · 90 min
              </T>
              <Row gap={12} style={{ marginTop: 8 }}>
                <Row gap={4}>
                  <Calendar size={14} color={t.oceanInk} />
                  <T w={700} size={12.5}>
                    Pt, 30.10
                  </T>
                </Row>
                <Row gap={4}>
                  <Clock3 size={14} color={t.oceanInk} />
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
            <View style={{ flex: 1, backgroundColor: t.sand, alignItems: 'center', justifyContent: 'center' }}>
              <Plus size={20} color={t.text} />
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
