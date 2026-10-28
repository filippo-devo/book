import { LinearGradient } from 'expo-linear-gradient';
import { Anchor, Bell, ChevronRight, CreditCard, Gift, LogOut, Pencil, Plus, QrCode, Settings, Star, UserRound, Waves, type LucideIcon } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { SportIcon, WaveHeader } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { Avatar, Card, Chip, Eyebrow, GlassBtn, Row, T } from '../components/ui';
import { C, navyA, whiteA } from '../theme';

function Stat({ value, label, border }: { value: string; label: string; border?: boolean }) {
  return (
    <View style={[{ flex: 1, alignItems: 'center' }, border && { borderLeftWidth: 1, borderRightWidth: 1, borderColor: navyA(0.07) }]}>
      <T display size={24}>
        {value}
      </T>
      <T w={600} size={11} color={navyA(0.45)} style={{ marginTop: 2 }}>
        {label}
      </T>
    </View>
  );
}

function SettingRow({ icon: Icon, label, right, tint = C.ocean, bg = 'rgba(27,108,168,0.08)', last }: { icon: LucideIcon; label: string; right?: ReactNode; tint?: string; bg?: string; last?: boolean }) {
  return (
    <Row gap={12} style={{ paddingVertical: 12, borderBottomWidth: last ? 0 : 1, borderBottomColor: navyA(0.06) }}>
      <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={18} color={tint} />
      </View>
      <T w={700} size={14} style={{ flex: 1 }}>
        {label}
      </T>
      {right}
      <ChevronRight size={18} color={navyA(0.25)} />
    </Row>
  );
}

function Tag({ children, tint }: { children: ReactNode; tint?: boolean }) {
  return (
    <View style={{ backgroundColor: tint ? 'rgba(46,196,182,0.25)' : whiteA(0.1), borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 }}>
      <T w={700} size={11} color={tint ? '#BFF5EE' : C.white}>
        {children}
      </T>
    </View>
  );
}

export default function Konto() {
  const top = useTopInset(4);
  return (
    <Screen tab="konto" light>
      <WaveHeader style={{ paddingTop: top, paddingBottom: 70, paddingHorizontal: 20 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <GlassBtn icon={QrCode} />
          <GlassBtn icon={Settings} />
        </Row>
        <Row gap={16} style={{ marginTop: 8 }}>
          <View>
            <Avatar initials="KN" g={1} size={78} ring={{ width: 4, color: whiteA(0.4) }} />
            <View style={{ position: 'absolute', right: 0, bottom: 0, width: 28, height: 28, borderRadius: 14, backgroundColor: C.white, alignItems: 'center', justifyContent: 'center' }}>
              <Pencil size={14} color={C.ocean} />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <T display size={26} color={C.white}>
              Katarzyna Nowicka
            </T>
            <T size={12.5} color={whiteA(0.7)} style={{ marginTop: 2 }}>
              Gdynia · w Przystani od 2024
            </T>
            <Row gap={6} style={{ marginTop: 8, alignSelf: 'flex-start', backgroundColor: C.sand, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 }}>
              <Anchor size={14} color={C.navy} />
              <T w={800} size={11.5}>
                Poziom Kapitan · 1 240 pkt
              </T>
            </Row>
          </View>
        </Row>
      </WaveHeader>

      <View style={{ paddingHorizontal: 20, marginTop: -52 }}>
        <Card style={{ flexDirection: 'row', paddingVertical: 14 }}>
          <Stat value="27" label="rezerwacji" />
          <Stat value="12" label="opinii" border />
          <Stat value="41 h" label="aktywności" />
        </Card>

        <LinearGradient colors={[C.navy, '#16457A']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ marginTop: 12, borderRadius: 24, padding: 16, overflow: 'hidden' }}>
          <Svg pointerEvents="none" width={200} height={90} viewBox="0 0 200 90" style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.25 }} fill="none">
            <Path d="M0 60 C 40 30, 80 90, 120 60 S 180 30, 200 50" stroke={C.sea} strokeWidth={1.5} />
            <Path d="M0 75 C 40 45, 80 105, 120 75 S 180 45, 200 65" stroke={C.sea} strokeWidth={1.5} />
          </Svg>
          <Row style={{ justifyContent: 'space-between' }}>
            <View>
              <T w={700} size={11.5} color={whiteA(0.6)} style={{ letterSpacing: 1 }}>
                PORTFEL PRZYSTANI
              </T>
              <T display size={28} color={C.white} style={{ marginTop: 2 }}>
                120,00 zł
              </T>
            </View>
            <Row gap={6} style={{ height: 36, paddingHorizontal: 16, borderRadius: 18, backgroundColor: C.white }}>
              <Plus size={16} color={C.navy} />
              <T w={800} size={13}>
                Doładuj
              </T>
            </Row>
          </Row>
          <Row gap={8} style={{ marginTop: 12 }}>
            <Tag>BLIK</Tag>
            <Tag>Visa •• 4821</Tag>
            <Tag tint>Multisport ✓</Tag>
          </Row>
        </LinearGradient>

        <Eyebrow style={{ marginTop: 20, marginBottom: 8 }}>Moje sporty</Eyebrow>
        <Row gap={8} style={{ flexWrap: 'wrap' }}>
          <Chip height={32} label="Tenis · NTRP 3.5" icon={<SportIcon sport="tenis" />} />
          <Chip height={32} label="Pływanie" icon={<Waves size={16} color={C.navy} />} />
          <Chip height={32} icon={<Plus size={16} color={C.ocean} />} />
        </Row>

        <Card style={{ marginTop: 16, paddingHorizontal: 16, paddingVertical: 4 }}>
          <SettingRow icon={UserRound} label="Dane osobowe" />
          <SettingRow
            icon={Star}
            label="Moje opinie"
            tint={C.seaDark}
            bg="rgba(46,196,182,0.12)"
            right={
              <T w={700} size={12} color={navyA(0.4)} style={{ marginRight: 4 }}>
                12
              </T>
            }
          />
          <SettingRow
            icon={Gift}
            label="Zaproś znajomych"
            tint="#E5503F"
            bg="rgba(255,107,91,0.12)"
            right={
              <View style={{ backgroundColor: 'rgba(255,107,91,0.1)', borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2, marginRight: 4 }}>
                <T w={800} size={11} color={C.coral}>
                  +20 zł
                </T>
              </View>
            }
          />
          <SettingRow icon={CreditCard} label="Płatności i BLIK" />
          <SettingRow icon={Bell} label="Powiadomienia" last />
        </Card>
        <Row gap={8} style={{ justifyContent: 'center', marginTop: 18 }}>
          <LogOut size={16} color={navyA(0.45)} />
          <T w={700} size={13} color={navyA(0.45)}>
            Wyloguj się
          </T>
        </Row>
      </View>
    </Screen>
  );
}
