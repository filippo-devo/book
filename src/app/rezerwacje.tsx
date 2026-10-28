import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { CalendarDays, ChevronRight, Navigation, RotateCcw, Star } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Pressable, View } from 'react-native';

import { Photo } from '../components/art';
import { Segmented } from '../components/blocks';
import { Screen, useTopInset } from '../components/Screen';
import { useTheme } from '../components/ThemeProvider';
import { Card, Eyebrow, Pill, Row, T, WhiteBtn } from '../components/ui';
import { C, whiteA } from '../theme';

function DateTile({ dow, day, month, accent }: { dow: string; day: string; month: string; accent?: boolean }) {
  const t = useTheme();
  const fg = accent ? C.white : t.text;
  const content = (
    <>
      <T w={800} size={10} color={fg} style={{ opacity: 0.7, letterSpacing: 0.8 }}>
        {dow.toUpperCase()}
      </T>
      <T display size={24} color={fg} style={{ lineHeight: 26 }}>
        {day}
      </T>
      <T w={700} size={10} color={fg} style={{ opacity: 0.7 }}>
        {month.toUpperCase()}
      </T>
    </>
  );
  const box = { width: 58, height: 66, borderRadius: 18, alignItems: 'center' as const, justifyContent: 'center' as const };
  return accent ? (
    <LinearGradient colors={[C.ocean, C.sea]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={box}>
      {content}
    </LinearGradient>
  ) : (
    <View style={[box, { backgroundColor: t.sand }]}>{content}</View>
  );
}

function BookingRow({ tile, title, sub, status, time, color, onPress }: { tile: ReactNode; title: string; sub: string; status: string; time: string; color: string; onPress?: () => void }) {
  const t = useTheme();
  return (
    <Card style={{ padding: 12, flexDirection: 'row', alignItems: 'center', gap: 14 }} onPress={onPress}>
      {tile}
      <View style={{ flex: 1 }}>
        <T w={800} size={14.5} numberOfLines={1}>
          {title}
        </T>
        <T size={12} color={t.textA(0.5)} numberOfLines={1}>
          {sub}
        </T>
        <Row gap={6} style={{ marginTop: 4 }}>
          <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: color }} />
          <T w={700} size={11.5} color={color}>
            {status}
          </T>
          <T w={600} size={11.5} color={t.textA(0.35)}>
            · {time}
          </T>
        </Row>
      </View>
      <ChevronRight size={18} color={t.textA(0.3)} />
    </Card>
  );
}

function PastRow({ kind, title, sub, rated }: { kind: 'squash' | 'pool'; title: string; sub: string; rated?: boolean }) {
  const t = useTheme();
  return (
    <Card style={{ padding: 12, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
      <Photo kind={kind} radius={18} style={{ width: 58, height: 66, opacity: 0.9 }} />
      <View style={{ flex: 1 }}>
        <T w={800} size={14.5}>
          {title}
        </T>
        <T size={12} color={t.textA(0.5)}>
          {sub}
        </T>
      </View>
      {rated ? (
        <Row gap={4} style={{ height: 32, paddingHorizontal: 12, borderRadius: 16, backgroundColor: t.oceanTint }}>
          <RotateCcw size={14} color={t.oceanInk} />
          <T w={800} size={12} color={t.oceanInk}>
            Ponów
          </T>
        </Row>
      ) : (
        <Pressable onPress={() => router.push('/opinia')} style={{ height: 32, paddingHorizontal: 12, borderRadius: 16, borderWidth: 1.5, borderColor: C.coral, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Star size={14} color={C.coral} />
          <T w={800} size={12} color={C.coral}>
            Oceń
          </T>
        </Pressable>
      )}
    </Card>
  );
}

export default function Rezerwacje() {
  const t = useTheme();
  const top = useTopInset(8);
  return (
    <Screen tab="rez">
      <View style={{ paddingTop: top, paddingHorizontal: 20 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <T display size={32}>
            Rezerwacje
          </T>
          <WhiteBtn icon={CalendarDays} />
        </Row>
        <View style={{ marginTop: 16 }}>
          <Segmented active={0} items={[{ label: 'Nadchodzące', badge: '3' }, { label: 'Historia' }]} />
        </View>

        <Eyebrow style={{ marginTop: 20, marginBottom: 10 }}>W tym tygodniu</Eyebrow>
        <Card style={{ overflow: 'hidden' }}>
          <Photo kind="clay" style={{ height: 104 }}>
            <Row style={{ position: 'absolute', left: 14, right: 14, bottom: 14, justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <View>
                <Pill bg={whiteA(0.9)} color={C.navy} size={10.5} style={{ paddingHorizontal: 8, paddingVertical: 2 }}>
                  ZA 2 DNI
                </Pill>
                <T w={800} size={17} color={C.white} style={{ marginTop: 6, textShadowColor: 'rgba(11,37,69,0.4)', textShadowRadius: 6 }}>
                  Arena Tenis Redłowo
                </T>
              </View>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: whiteA(0.9), alignItems: 'center', justifyContent: 'center' }}>
                <Navigation size={16} color={C.navy} />
              </View>
            </Row>
          </Photo>
          <Row style={{ padding: 14, justifyContent: 'space-between' }}>
            <View>
              <T w={800} size={13.5}>
                Pt, 30 października · 18:00
              </T>
              <T size={12} color={t.textA(0.5)}>
                Kort ziemny nr 3 · 90 min · z Bartkiem
              </T>
            </View>
            <T w={800} size={15}>
              135 zł
            </T>
          </Row>
        </Card>

        <Eyebrow style={{ marginTop: 20, marginBottom: 10 }}>Listopad</Eyebrow>
        <View style={{ gap: 10 }}>
          <BookingRow
            tile={<DateTile dow="Czw" day="5" month="lis" accent />}
            title="Trening personalny"
            sub="Michał Kowalczyk · Fit Harbour"
            status="Opłacone"
            time="18:00"
            color={t.seaInk}
            onPress={() => router.push('/potwierdzenie')}
          />
          <BookingRow tile={<DateTile dow="Wt" day="10" month="lis" />} title="Fizjoterapia – kolano" sub="mgr Anna Wiśniewska · Sopot" status="Płatność na miejscu" time="9:00" color={t.oceanInk} />
        </View>

        <Eyebrow style={{ marginTop: 20, marginBottom: 10 }}>Historia</Eyebrow>
        <View style={{ gap: 10 }}>
          <PastRow kind="squash" title="Squash Point Sopot" sub="Sob, 24.10 · kort 2 · 60 min" />
          <PastRow kind="pool" title="Morska Pływalnia Orłowo" sub="Śr, 21.10 · tor 4 · 45 min" rated />
        </View>
      </View>
    </Screen>
  );
}
