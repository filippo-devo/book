import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ChevronLeft, Heart, Layers, List, LocateFixed, Search, SlidersHorizontal, Waves } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Defs, G, LinearGradient as SvgLinear, Path, Pattern, Rect, Stop, Text as SvgText } from 'react-native-svg';

import { Photo, SportIcon } from '../components/art';
import { SportChips } from '../components/blocks';
import { Screen, useTabBarHeight, useTopInset } from '../components/Screen';
import { Card, CoralBtn, Rating, Row, T, WhiteBtn } from '../components/ui';
import { C, F, navyA, shadow, whiteA } from '../theme';

const MAP_W = 390;
const MAP_H = 844;
const COAST =
  'M272 0 C 262 120, 302 180, 294 262 C 288 330, 330 362, 320 432 C 308 520, 264 560, 272 640 C 278 720, 242 780, 238 844';
const AVENUE = 'M152 0 C 162 150, 204 262, 198 384 C 192 502, 158 602, 168 844';

function MapArt() {
  const label = { fontFamily: F[700], fontSize: 9.5, letterSpacing: 2, fill: C.navy, fillOpacity: 0.38 };
  return (
    <>
      <Defs>
        <SvgLinear id="sea" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#CBEAF1" />
          <Stop offset="1" stopColor="#9ED4E4" />
        </SvgLinear>
        <Pattern id="grid" width={34} height={34} patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
          <Path d="M34 0H0V34" fill="none" stroke="#fff" strokeWidth={2.2} />
        </Pattern>
      </Defs>
      <Rect width={MAP_W} height={MAP_H} fill="#F1EEE7" />
      <Rect width={MAP_W} height={MAP_H} fill="url(#grid)" opacity={0.9} />
      <Path d="M0 110 C 70 96, 118 160, 96 236 C 76 312, 26 330, 0 318 Z" fill="#D9EBDA" />
      <Path d="M0 500 C 74 480, 124 548, 104 630 C 86 694, 34 716, 0 704 Z" fill="#D9EBDA" />
      <Path d="M232 268 C 262 254, 292 280, 288 318 C 284 352, 246 360, 232 336 C 222 316, 220 280, 232 268 Z" fill="#D2E7D3" />
      <Path d={COAST} fill="none" stroke="#EADCC3" strokeWidth={12} />
      <Path d={`${COAST} L 390 844 L 390 0 Z`} fill="url(#sea)" />
      <Path d="M318 418 L 360 410" stroke="#fff" strokeWidth={5} strokeLinecap="round" />
      <Path d="M244 770 L 300 780" stroke="#fff" strokeWidth={5} strokeLinecap="round" />
      <G fill="none" stroke="#fff" strokeLinecap="round">
        <Path d="M0 196 L 280 232" strokeWidth={7} />
        <Path d="M0 418 L 305 400" strokeWidth={7} />
        <Path d="M30 612 L 268 628" strokeWidth={7} />
        <Path d="M60 0 C 70 300, 40 560, 70 844" strokeWidth={6} />
      </G>
      <Path d={AVENUE} fill="none" stroke="#fff" strokeWidth={13} strokeLinecap="round" />
      <Path d={AVENUE} fill="none" stroke="#FCE3B8" strokeWidth={9} strokeLinecap="round" />
      <Path d="M118 0 C 128 300, 138 500, 120 844" fill="none" stroke="#C3CAD3" strokeWidth={2.5} strokeDasharray="7 5" />
      <SvgText x={176} y={182} {...label}>KAMIENNA GÓRA</SvgText>
      <SvgText x={20} y={300} {...label}>REDŁOWO</SvgText>
      <SvgText x={210} y={470} {...label}>ORŁOWO</SvgText>
      <SvgText x={18} y={520} {...label}>MAŁY KACK</SvgText>
      <SvgText x={186} y={742} {...label}>SOPOT</SvgText>
      <SvgText x={300} y={250} fontFamily={F[600]} fontSize={9} fill={C.navy} fillOpacity={0.38}>
        Kępa Redłowska
      </SvgText>
      <SvgText x={372} y={330} fontFamily={F.displayItalic} fontSize={17} fill="#3E8FB0" fillOpacity={0.75} transform="rotate(-80 372 330)">
        Zatoka Gdańska
      </SvgText>
    </>
  );
}

export default function Mapa() {
  const { width, height } = useWindowDimensions();
  const top = useTopInset(4);
  const tabH = useTabBarHeight();
  // The map is drawn at 390×844 and scaled with "slice"; pins use the same transform.
  const s = Math.max(width / MAP_W, height / MAP_H);
  const at = (x: number, y: number) => ({ left: (x - MAP_W / 2) * s + width / 2, top: (y - MAP_H / 2) * s + height / 2 });

  const pin = (x: number, y: number, icon: ReactNode, price: string, selected?: boolean) => (
    // Fixed-width wrapper keeps the pin centred on (x, y) with its tail touching the point.
    <View key={`${x}-${y}`} style={{ position: 'absolute', width: 160, alignItems: 'center', left: at(x, y).left - 80, top: at(x, y).top - (selected ? 45 : 37) }}>
      <Row
        gap={5}
        style={{
          height: selected ? 40 : 32,
          paddingHorizontal: selected ? 15 : 11,
          borderRadius: 999,
          backgroundColor: selected ? C.coral : C.white,
          boxShadow: selected ? '0px 14px 26px -8px rgba(255,107,91,0.8), 0px 0px 0px 4px rgba(255,255,255,0.9)' : '0px 10px 20px -8px rgba(11,37,69,0.45)',
        }}>
        {icon}
        <T w={800} size={selected ? 15 : 13} color={selected ? C.white : C.navy}>
          {price}
        </T>
      </Row>
      <View style={{ width: 10, height: 10, marginTop: -6, borderRadius: 2, backgroundColor: selected ? C.coral : C.white, transform: [{ rotate: '45deg' }] }} />
    </View>
  );

  return (
    <Screen tab="znajdz" scroll={false} bg="#F1EEE7">
      <Svg style={StyleSheet.absoluteFill} width="100%" height="100%" viewBox={`0 0 ${MAP_W} ${MAP_H}`} preserveAspectRatio="xMidYMid slice">
        <MapArt />
      </Svg>

      {pin(214, 222, <SportIcon sport="tenis" size={14} color={C.ocean} />, '120 zł')}
      {pin(92, 360, <Waves size={14} color={C.ocean} />, '22 zł')}
      {pin(160, 330, <SportIcon sport="squash" size={14} color={C.ocean} />, '60 zł')}
      {pin(214, 410, <SportIcon sport="padel" size={14} color={C.ocean} />, '140 zł')}
      {pin(74, 468, <SportIcon sport="orlik" size={14} color={C.ocean} />, '150 zł')}
      {pin(244, 520, <SportIcon sport="tenis" size={16} color={C.white} />, '90 zł', true)}
      <View style={[{ position: 'absolute', width: 44, height: 44, marginLeft: -22, marginTop: -22, borderRadius: 22, backgroundColor: C.ocean, borderWidth: 4, borderColor: C.white, alignItems: 'center', justifyContent: 'center', boxShadow: shadow.soft }, at(64, 214)]}>
        <T w={800} size={13} color={C.white}>
          +6
        </T>
      </View>
      <View style={[{ position: 'absolute' }, at(150, 500)]}>
        <View style={{ position: 'absolute', width: 96, height: 96, left: -48, top: -48, borderRadius: 48, backgroundColor: 'rgba(27,108,168,0.15)' }} />
        <View style={{ position: 'absolute', width: 18, height: 18, left: -9, top: -9, borderRadius: 9, backgroundColor: C.ocean, borderWidth: 3, borderColor: C.white }} />
      </View>

      <LinearGradient colors={['rgba(247,251,252,0.95)', 'rgba(247,251,252,0.6)', 'rgba(247,251,252,0)']} locations={[0, 0.6, 1]} style={{ position: 'absolute', left: 0, right: 0, top: 0, height: top + 110 }} />
      <View style={{ paddingTop: top, paddingHorizontal: 16 }}>
        <Row gap={10}>
          <WhiteBtn icon={ChevronLeft} size={50} onPress={() => router.back()} />
          <Row gap={12} style={{ flex: 1, height: 50, borderRadius: 25, backgroundColor: C.white, paddingHorizontal: 16, boxShadow: shadow.soft }}>
            <Search size={18} color={C.ocean} />
            <View style={{ flex: 1 }}>
              <T w={800} size={13.5}>
                Tenis w Gdyni
              </T>
              <T w={600} size={11} color={navyA(0.5)}>
                Jutro · 18:00–21:00 · 2 os.
              </T>
            </View>
            <View style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: navyA(0.1), alignItems: 'center', justifyContent: 'center' }}>
              <SlidersHorizontal size={16} color={C.navy} />
            </View>
          </Row>
        </Row>
      </View>
      <View style={{ marginTop: 12, marginHorizontal: -4 }}>
        <SportChips />
      </View>
      <View style={{ position: 'absolute', right: 16, top: height * 0.39, gap: 10 }}>
        <WhiteBtn icon={Layers} />
        <WhiteBtn icon={LocateFixed} tint={C.ocean} />
      </View>

      <View style={{ position: 'absolute', left: 16, right: 16, bottom: tabH + 12 }}>
        <Row style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }}>
          <View style={{ backgroundColor: whiteA(0.92), borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, boxShadow: shadow.soft }}>
            <T w={700} size={12}>
              14 kortów na tym obszarze
            </T>
          </View>
          <Pressable
            onPress={() => router.navigate('/znajdz')}
            style={{ height: 44, paddingHorizontal: 18, borderRadius: 22, backgroundColor: C.navy, flexDirection: 'row', alignItems: 'center', gap: 7, boxShadow: '0px 14px 28px -10px rgba(11,37,69,0.6)' }}>
            <List size={16} color={C.white} />
            <T w={800} size={14} color={C.white}>
              Lista
            </T>
          </Pressable>
        </Row>
        <ScrollView horizontal pagingEnabled={false} showsHorizontalScrollIndicator={false} snapToInterval={width - 24} decelerationRate="fast" contentContainerStyle={{ gap: 8 }} style={{ marginHorizontal: -16 }}>
          {[
            { kind: 'clay' as const, tag: 'KRYTY · ZIEMNY', name: 'Arena Tenis Redłowo', meta: '1,2 km · 312 zweryfikowanych opinii', price: '90 zł', rating: '4.9' },
            { kind: 'hard' as const, tag: 'KRYTY · TWARDY', name: 'Kort Kamienna Góra', meta: '2,8 km · 141 zweryfikowanych opinii', price: '75 zł', rating: '4.7' },
          ].map((v, i) => (
            <Card key={v.name} onPress={() => router.push('/obiekt')} style={{ width: width - 32, marginLeft: i === 0 ? 16 : 0, padding: 12, borderRadius: 26, flexDirection: 'row', gap: 14, boxShadow: '0px 24px 50px -18px rgba(11,37,69,0.45)' }}>
              <Photo kind={v.kind} radius={18} style={{ width: 104, height: 112 }}>
                <View style={{ position: 'absolute', top: 8, right: 8, width: 28, height: 28, borderRadius: 14, backgroundColor: whiteA(0.9), alignItems: 'center', justifyContent: 'center' }}>
                  <Heart size={14} color={C.coral} fill={i === 0 ? C.coral : 'transparent'} />
                </View>
              </Photo>
              <View style={{ flex: 1, paddingVertical: 2 }}>
                <Row style={{ justifyContent: 'space-between' }}>
                  <T w={800} size={10.5} color={C.seaDark} style={{ letterSpacing: 0.8 }}>
                    {v.tag}
                  </T>
                  <Rating value={v.rating} size={12} />
                </Row>
                <T w={800} size={16} style={{ marginTop: 4 }}>
                  {v.name}
                </T>
                <T size={12} color={navyA(0.5)} style={{ marginTop: 2 }}>
                  {v.meta}
                </T>
                <Row style={{ justifyContent: 'space-between', marginTop: 'auto' }}>
                  <T size={12} color={navyA(0.5)}>
                    <T w={800} size={16}>
                      {v.price}
                    </T>{' '}
                    / h
                  </T>
                  <CoralBtn label="Zarezerwuj" height={36} size={13} onPress={() => router.push('/termin')} />
                </Row>
              </View>
            </Card>
          ))}
        </ScrollView>
        <Row gap={6} style={{ justifyContent: 'center', marginTop: 10 }}>
          <View style={{ width: 16, height: 6, borderRadius: 3, backgroundColor: C.navy }} />
          <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: navyA(0.2) }} />
          <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: navyA(0.2) }} />
        </Row>
      </View>
    </Screen>
  );
}
