import { router } from 'expo-router';
import { ChevronLeft, ChevronRight, X } from 'lucide-react-native';
import { View } from 'react-native';

import { CtaBar, Screen, useTopInset } from '../components/Screen';
import { useTheme } from '../components/ThemeProvider';
import { Avatar, Card, CoralBtn, Row, T, WhiteBtn } from '../components/ui';
import { C } from '../theme';

// Listopad 2026 zaczyna się w niedzielę; kalendarz od poniedziałku.
const LEAD = 6;
const DAYS = 30;
const AVAILABLE = new Set([2, 3, 5, 6, 9, 10, 12, 13, 16, 17, 19, 20, 23, 24, 26, 27, 30]);
const LAST_SPOTS = new Set([3, 10, 17]);
const SELECTED = 5;

function Day({ d }: { d: number | null }) {
  const t = useTheme();
  if (d === null) return <View style={{ width: `${100 / 7}%`, height: 36 }} />;
  const selected = d === SELECTED;
  const available = AVAILABLE.has(d);
  return (
    <View style={{ width: `${100 / 7}%`, height: 36, alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
      <View
        style={[
          { width: 38, height: 34, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
          selected && { backgroundColor: C.ocean, boxShadow: t.shadow.ocean },
        ]}>
        <T w={700} size={14} color={selected ? C.white : available ? t.text : t.textA(0.22)}>
          {d}
        </T>
        {available && !selected ? (
          <View style={{ position: 'absolute', bottom: 3, width: 4, height: 4, borderRadius: 2, backgroundColor: LAST_SPOTS.has(d) ? C.coral : C.sea }} />
        ) : null}
      </View>
    </View>
  );
}

function Slot({ time, state }: { time: string; state?: 'off' | 'sel' }) {
  const t = useTheme();
  const sel = state === 'sel';
  const off = state === 'off';
  return (
    <View
      style={{
        flex: 1,
        height: 44,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: sel ? C.ocean : off ? 'transparent' : t.surface,
        borderWidth: sel ? 0 : 1,
        borderColor: off ? t.textA(0.06) : t.textA(0.09),
        boxShadow: sel ? t.shadow.ocean : undefined,
      }}>
      <T w={800} size={14} color={sel ? C.white : off ? t.textA(0.25) : t.text} style={off ? { textDecorationLine: 'line-through' } : undefined}>
        {time}
      </T>
    </View>
  );
}

export default function Termin() {
  const t = useTheme();
  const top = useTopInset(4);
  const cells: (number | null)[] = [...Array(LEAD).fill(null), ...Array.from({ length: DAYS }, (_, i) => i + 1)];
  return (
    <Screen
      tab="hosp"
      floating={
        <CtaBar action={<CoralBtn label="Zarezerwuj" onPress={() => router.push('/potwierdzenie')} />}>
          <T w={600} size={11.5} color={t.textA(0.5)}>
            Czw, 5 lis · 18:00–19:00
          </T>
          <T w={800} size={19}>
            180 zł
          </T>
        </CtaBar>
      }>
      <View style={{ paddingTop: top, paddingHorizontal: 20 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <WhiteBtn icon={ChevronLeft} onPress={() => router.back()} />
          <View style={{ alignItems: 'center' }}>
            <T w={800} size={16}>
              Wybierz termin
            </T>
            <T w={600} size={11.5} color={t.textA(0.45)}>
              Krok 2 z 3
            </T>
          </View>
          <WhiteBtn icon={X} onPress={() => router.back()} />
        </Row>

        <Card style={{ marginTop: 16, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Avatar initials="MK" g={0} size={46} radius={15} />
          <View style={{ flex: 1 }}>
            <T w={800} size={14}>
              Trening personalny · 60 min
            </T>
            <T size={12} color={t.textA(0.5)}>
              Michał Kowalczyk · Fit Harbour Gdynia
            </T>
          </View>
          <T w={700} size={12} color={t.oceanInk}>
            Zmień
          </T>
        </Card>

        <Card style={{ marginTop: 12, padding: 16, paddingBottom: 10 }}>
          <Row style={{ justifyContent: 'space-between', marginBottom: 12 }}>
            <View>
              <T display size={20}>
                Listopad{' '}
                <T display size={20} color={t.textA(0.35)}>
                  2026
                </T>
              </T>
              <Row gap={12} style={{ marginTop: 6 }}>
                <Row gap={4}>
                  <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: C.sea }} />
                  <T w={600} size={10.5} color={t.textA(0.45)}>
                    wolne
                  </T>
                </Row>
                <Row gap={4}>
                  <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: C.coral }} />
                  <T w={600} size={10.5} color={t.textA(0.45)}>
                    ostatnie miejsca
                  </T>
                </Row>
              </Row>
            </View>
            <Row gap={6}>
              <View style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: t.textA(0.1), alignItems: 'center', justifyContent: 'center' }}>
                <ChevronLeft size={16} color={t.textA(0.3)} />
              </View>
              <View style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: t.textA(0.1), alignItems: 'center', justifyContent: 'center' }}>
                <ChevronRight size={16} color={t.text} />
              </View>
            </Row>
          </Row>
          <Row style={{ marginBottom: 4 }}>
            {['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'].map((w) => (
              <T key={w} w={700} size={11} color={t.textA(0.4)} style={{ width: `${100 / 7}%`, textAlign: 'center' }}>
                {w}
              </T>
            ))}
          </Row>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {cells.map((d, i) => (
              <Day key={i} d={d} />
            ))}
          </View>
        </Card>

        <Row style={{ justifyContent: 'space-between', marginTop: 16, marginBottom: 10 }}>
          <T w={800} size={14.5}>
            Czwartek, 5 listopada
          </T>
          <T w={700} size={12} color={t.oceanInk}>
            6 wolnych
          </T>
        </Row>
        <Row gap={8}>
          <Slot time="07:00" />
          <Slot time="08:00" state="off" />
          <Slot time="17:00" />
          <Slot time="18:00" state="sel" />
        </Row>
        <Row gap={8} style={{ marginTop: 8 }}>
          <Slot time="19:00" />
          <Slot time="20:00" />
          <Slot time="20:30" state="off" />
          <Slot time="21:00" />
        </Row>
      </View>
    </Screen>
  );
}
