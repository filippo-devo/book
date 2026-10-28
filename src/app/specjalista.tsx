import { router } from 'expo-router';
import { Check, ChevronLeft, Heart, MapPin, Plus, Share } from 'lucide-react-native';
import { View } from 'react-native';

import { Hero, Laurel } from '../components/art';
import { CtaBar, Screen, useTopInset } from '../components/Screen';
import { useTheme } from '../components/ThemeProvider';
import { Avatar, Card, CoralBtn, GlassBtn, Row, StarIcon, Stars, T, Verified } from '../components/ui';
import { C } from '../theme';

function Service({ name, meta, price, selected }: { name: string; meta: string; price: string; selected?: boolean }) {
  const t = useTheme();
  return (
    <Card style={[{ padding: 14, flexDirection: 'row', alignItems: 'center', gap: 12 }, selected && { borderWidth: 2, borderColor: 'rgba(27,108,168,0.7)' }]}>
      <View style={{ flex: 1 }}>
        <T w={800} size={14.5}>
          {name}
        </T>
        <T size={12} color={t.textA(0.5)} style={{ marginTop: 2 }}>
          {meta}
        </T>
      </View>
      <T w={800} size={15}>
        {price}
      </T>
      {selected ? (
        <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: C.ocean, alignItems: 'center', justifyContent: 'center', boxShadow: t.shadow.ocean }}>
          <Check size={16} color={C.white} />
        </View>
      ) : (
        <View style={{ width: 36, height: 36, borderRadius: 18, borderWidth: 1, borderColor: t.textA(0.12), alignItems: 'center', justifyContent: 'center' }}>
          <Plus size={16} color={t.text} />
        </View>
      )}
    </Card>
  );
}

function Stat({ value, label, star, border }: { value: string; label: string; star?: boolean; border?: boolean }) {
  const t = useTheme();
  return (
    <View style={[{ flex: 1, alignItems: 'center' }, border && { borderLeftWidth: 1, borderRightWidth: 1, borderColor: t.textA(0.07) }]}>
      <Row gap={4}>
        {star ? <StarIcon size={15} /> : null}
        <T w={800} size={17}>
          {value}
        </T>
      </Row>
      <T w={600} size={11} color={t.textA(0.45)}>
        {label}
      </T>
    </View>
  );
}

export default function Specjalista() {
  const t = useTheme();
  const top = useTopInset(4);
  return (
    <Screen
      tab="hosp"
      floating={
        <CtaBar action={<CoralBtn label="Wybierz termin" onPress={() => router.push('/termin')} />}>
          <T w={600} size={11.5} color={t.textA(0.5)}>
            Trening personalny · 60 min
          </T>
          <T w={800} size={19}>
            180 zł
          </T>
        </CtaBar>
      }>
      <Hero top={top} bottom={0} style={{ height: 126 + top }}>
        <Row style={{ paddingHorizontal: 16, justifyContent: 'space-between' }}>
          <GlassBtn icon={ChevronLeft} onPress={() => router.back()} />
          <Row gap={8}>
            <GlassBtn icon={Share} />
            <GlassBtn icon={Heart} />
          </Row>
        </Row>
      </Hero>

      <View style={{ paddingHorizontal: 20, marginTop: -58 }}>
        <Row gap={14} style={{ alignItems: 'flex-end' }}>
          <View>
            <Avatar initials="MK" g={0} size={96} radius={30} ring={{ width: 5, color: t.bg }} />
            <View style={{ position: 'absolute', right: -4, bottom: -4, width: 28, height: 28, borderRadius: 14, backgroundColor: t.bg, alignItems: 'center', justifyContent: 'center' }}>
              <Verified size={22} />
            </View>
          </View>
          <View style={{ flex: 1, paddingBottom: 6 }}>
            <T w={800} size={10.5} color={t.seaInk} style={{ letterSpacing: 1 }}>
              DOSTĘPNY DZIŚ
            </T>
            <T display size={25}>
              Michał Kowalczyk
            </T>
          </View>
        </Row>
        <T size={13} color={t.textA(0.6)} style={{ marginTop: 8 }}>
          Trener personalny · przygotowanie motoryczne
        </T>
        <Row gap={4} style={{ marginTop: 2 }}>
          <MapPin size={14} color={t.textA(0.5)} />
          <T size={12.5} color={t.textA(0.5)}>
            Fit Harbour, ul. Świętojańska 32, Gdynia
          </T>
        </Row>

        <Row gap={14} style={{ marginTop: 16, borderRadius: 24, backgroundColor: t.sand, padding: 16 }}>
          <Row>
            <Laurel size={58} color={t.oceanInk} />
            <T display size={36} style={{ marginHorizontal: -2 }}>
              #1
            </T>
            <Laurel size={58} color={t.oceanInk} mirror />
          </Row>
          <View style={{ flex: 1 }}>
            <T w={800} size={14.5} style={{ lineHeight: 18 }}>
              Trener personalny w Gdyni
            </T>
            <T size={11.5} color={t.textA(0.55)} style={{ marginTop: 2, lineHeight: 15 }}>
              Ranking październik 2026 · Top 1% na Pomorzu
            </T>
          </View>
        </Row>
        <Card style={{ marginTop: 12, paddingVertical: 12, flexDirection: 'row' }}>
          <Stat value="4.97" label="ocena" star />
          <Stat value="214" label="zweryf. opinii" border />
          <Stat value="9 lat" label="doświadczenia" />
        </Card>

        <Row gap={20} style={{ marginTop: 18, borderBottomWidth: 1, borderBottomColor: t.textA(0.08) }}>
          {['Usługi', 'Opinie 214', 'O mnie', 'Galeria'].map((tab, i) => (
            <View key={tab} style={{ paddingBottom: 10, borderBottomWidth: 3, borderBottomColor: i === 0 ? t.oceanInk : 'transparent', marginBottom: -1 }}>
              <T w={700} size={14} color={i === 0 ? t.text : t.textA(0.45)}>
                {tab}
              </T>
            </View>
          ))}
        </Row>
        <View style={{ gap: 10, marginTop: 12 }}>
          <Service name="Trening personalny" meta="60 min · siłownia lub plener" price="180 zł" selected />
          <Service name="Analiza ruchu + plan" meta="90 min · test FMS, wideo" price="250 zł" />
          <Service name="Pakiet 10 treningów" meta="ważny 3 miesiące · −11%" price="1 600 zł" />
        </View>

        <Row style={{ justifyContent: 'space-between', marginTop: 22, marginBottom: 10 }}>
          <T w={800} size={18.5}>
            Opinie
          </T>
          <Row gap={6}>
            <Stars n={5} size={12} />
            <T w={800} size={13}>
              4.97
            </T>
          </Row>
        </Row>
        <Card style={{ padding: 16 }}>
          <Row gap={12}>
            <Avatar initials="KN" g={1} size={36} />
            <View style={{ flex: 1 }}>
              <T w={800} size={13.5}>
                Kasia N.
              </T>
              <T size={11} color={t.textA(0.45)}>
                Trening personalny · zweryfikowana wizyta
              </T>
            </View>
            <Stars n={5} size={12} />
          </Row>
          <T size={13} color={t.textA(0.75)} style={{ marginTop: 10, lineHeight: 19 }}>
            Michał od pierwszych minut poprawił mi technikę przysiadu i dobrał obciążenia pod kolano po kontuzji.
          </T>
        </Card>
      </View>
    </Screen>
  );
}
