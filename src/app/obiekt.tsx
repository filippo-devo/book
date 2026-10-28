import { router } from 'expo-router';
import { BadgeCheck, ChevronLeft, Coffee, Heart, Image as ImageIcon, LampCeiling, MapPin, Share, Shirt, ShowerHead, SquareParking, Trophy, type LucideIcon } from 'lucide-react-native';
import { View } from 'react-native';

import { Photo, SportIcon } from '../components/art';
import { CtaBar, Screen, useTopInset } from '../components/Screen';
import { Avatar, Card, CoralBtn, GlassBtn, Pill, Row, SectionHeader, Stars, T } from '../components/ui';
import { C, navyA, whiteA } from '../theme';

function Amenity({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <View style={{ alignItems: 'center', gap: 6 }}>
      <View style={{ width: 52, height: 52, borderRadius: 17, backgroundColor: C.sand, alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={22} color={C.navy} />
      </View>
      <T w={600} size={11} color={navyA(0.7)}>
        {label}
      </T>
    </View>
  );
}

function PriceTile({ label, value, hot }: { label: string; value: string; hot?: boolean }) {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 18,
        padding: 12,
        backgroundColor: hot ? C.navy : C.white,
        borderWidth: hot ? 0 : 1,
        borderColor: navyA(0.07),
        boxShadow: hot ? '0px 14px 26px -12px rgba(11,37,69,0.6)' : undefined,
      }}>
      <T w={800} size={10.5} color={hot ? whiteA(0.6) : navyA(0.45)} style={{ letterSpacing: 0.6 }}>
        {label}
      </T>
      <T display size={22} color={hot ? C.white : C.navy} style={{ marginTop: 4 }}>
        {value}
      </T>
      <T w={600} size={11} color={hot ? whiteA(0.6) : navyA(0.45)}>
        kort / h
      </T>
    </View>
  );
}

export default function Obiekt() {
  const top = useTopInset(6);
  return (
    <Screen
      tab="znajdz"
      light
      floating={
        <CtaBar action={<CoralBtn label="Zarezerwuj" onPress={() => router.push('/termin')} />}>
          <T w={600} size={11.5} color={navyA(0.5)}>
            Wolne jutro od 18:00
          </T>
          <T size={13} color={navyA(0.6)}>
            od{' '}
            <T w={800} size={19}>
              80 zł
            </T>{' '}
            / h
          </T>
        </CtaBar>
      }>
      <Photo kind="clay" style={{ height: 222 + top - 50 }}>
        <Row style={{ position: 'absolute', top, left: 16, right: 16, justifyContent: 'space-between' }}>
          <GlassBtn icon={ChevronLeft} bg={whiteA(0.85)} tint={C.navy} onPress={() => router.back()} />
          <Row gap={8}>
            <GlassBtn icon={Share} bg={whiteA(0.85)} tint={C.navy} />
            <GlassBtn icon={Heart} bg={whiteA(0.85)} tint={C.coral} />
          </Row>
        </Row>
        <Row gap={6} style={{ position: 'absolute', left: 16, bottom: 40 }}>
          <Photo kind="hard" radius={12} style={{ width: 40, height: 40, borderWidth: 2, borderColor: C.white }} />
          <Photo kind="studio" radius={12} style={{ width: 40, height: 40, borderWidth: 2, borderColor: whiteA(0.6) }} />
          <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(11,37,69,0.55)', borderWidth: 2, borderColor: whiteA(0.6), alignItems: 'center', justifyContent: 'center' }}>
            <T w={800} size={12} color={C.white}>
              +9
            </T>
          </View>
        </Row>
        <Row gap={4} style={{ position: 'absolute', right: 16, bottom: 44, backgroundColor: 'rgba(11,37,69,0.55)', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 }}>
          <ImageIcon size={14} color={C.white} />
          <T w={700} size={11.5} color={C.white}>
            1 / 12
          </T>
        </Row>
      </Photo>

      <View style={{ marginTop: -28, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: C.foam, paddingHorizontal: 20, paddingTop: 20 }}>
        <Row gap={8}>
          <Row gap={5} style={{ height: 26, paddingHorizontal: 10, borderRadius: 999, backgroundColor: 'rgba(27,108,168,0.08)' }}>
            <SportIcon sport="tenis" size={13} color={C.ocean} />
            <T w={800} size={11.5} color={C.ocean}>
              Tenis
            </T>
          </Row>
          <Row gap={5} style={{ height: 26, paddingHorizontal: 10, borderRadius: 999, backgroundColor: 'rgba(27,108,168,0.08)' }}>
            <SportIcon sport="padel" size={13} color={C.ocean} />
            <T w={800} size={11.5} color={C.ocean}>
              Padel
            </T>
          </Row>
          <Pill icon={Trophy}>#2 w Trójmieście</Pill>
        </Row>
        <T display size={27} style={{ marginTop: 10 }}>
          Arena Tenis Redłowo
        </T>
        <Row gap={4} style={{ marginTop: 2 }}>
          <MapPin size={14} color={navyA(0.55)} />
          <T size={12.5} color={navyA(0.55)}>
            ul. Legionów 130, Gdynia · 1,2 km · do 22:00
          </T>
        </Row>

        <Card style={{ marginTop: 14, padding: 14, flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <View style={{ alignItems: 'center', paddingRight: 16, borderRightWidth: 1, borderRightColor: navyA(0.07) }}>
            <T display size={32}>
              4.9
            </T>
            <View style={{ marginTop: 4 }}>
              <Stars n={5} size={10} />
            </View>
            <T w={600} size={10.5} color={navyA(0.45)} style={{ marginTop: 4 }}>
              312 opinii
            </T>
          </View>
          <View style={{ flex: 1 }}>
            <T w={500} size={13} color={navyA(0.8)} style={{ lineHeight: 18 }}>
              „Najlepsza mączka w Trójmieście, korty równe nawet po deszczu.”
            </T>
            <Row gap={8} style={{ marginTop: 8 }}>
              <Avatar initials="PS" g={5} size={22} />
              <T w={700} size={11.5}>
                Piotr S.
              </T>
              <Row gap={3}>
                <BadgeCheck size={14} color={C.seaDark} />
                <T w={700} size={11} color={C.seaDark}>
                  zweryfikowana
                </T>
              </Row>
            </Row>
          </View>
        </Card>

        <SectionHeader title="Udogodnienia" link="Wszystkie 12" style={{ marginTop: 18, marginBottom: 10 }} />
        <Row style={{ justifyContent: 'space-between' }}>
          <Amenity icon={SquareParking} label="Parking" />
          <Amenity icon={ShowerHead} label="Prysznice" />
          <Amenity icon={Shirt} label="Szatnie" />
          <Amenity icon={Coffee} label="Kawiarnia" />
          <Amenity icon={LampCeiling} label="Hala LED" />
        </Row>

        <SectionHeader title="Cennik" link="Pakiety" style={{ marginTop: 18, marginBottom: 10 }} />
        <Row gap={8}>
          <PriceTile label="PN–PT 7–16" value="80 zł" />
          <PriceTile label="PN–PT 16–22" value="110 zł" hot />
          <PriceTile label="WEEKEND" value="100 zł" />
        </Row>

        <SectionHeader title="Opinie" link="Wszystkie 312" style={{ marginTop: 18, marginBottom: 10 }} />
        <Card style={{ padding: 16 }}>
          <Row gap={12}>
            <Avatar initials="MD" g={3} size={36} />
            <View style={{ flex: 1 }}>
              <T w={800} size={13.5}>
                Magda D.
              </T>
              <T size={11} color={navyA(0.45)}>
                Padel · 19.10.2026 · zweryfikowana wizyta
              </T>
            </View>
            <Stars n={5} size={12} />
          </Row>
          <T size={13} color={navyA(0.75)} style={{ marginTop: 10, lineHeight: 19 }}>
            Świetna hala, szatnie czyste, a obsługa pożyczyła nam rakiety. Wrócimy w zimie!
          </T>
        </Card>
      </View>
    </Screen>
  );
}
