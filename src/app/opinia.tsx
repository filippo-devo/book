import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Award, BadgeCheck, Camera, Check, Coins, Lock, Smile, Timer, TrendingUp, X, type LucideIcon } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

import { Wave } from '../components/art';
import { Screen, useTopInset } from '../components/Screen';
import { Avatar, Card, Chip, CoralBtn, Row, Stars, T, WhiteBtn } from '../components/ui';
import { C, navyA, whiteA } from '../theme';

function Criterion({ icon: Icon, label, n }: { icon: LucideIcon; label: string; n: number }) {
  return (
    <Row gap={12} style={{ paddingVertical: 7 }}>
      <Icon size={16} color={C.ocean} />
      <T w={700} size={13} style={{ width: 112 }}>
        {label}
      </T>
      <Row gap={4} style={{ flex: 1 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <View key={i} style={{ flex: 1, height: 8, borderRadius: 4, backgroundColor: i < n ? C.sea : navyA(0.08) }} />
        ))}
      </Row>
      <T w={800} size={12.5} style={{ width: 16, textAlign: 'right' }}>
        {n}
      </T>
    </Row>
  );
}

export default function Opinia() {
  const top = useTopInset(4);
  return (
    <Screen tab="rez" floating={<CoralBtn label="Opublikuj opinię" height={54} size={16} full onPress={() => router.navigate('/rezerwacje')} />}>
      <View style={{ backgroundColor: C.sand, paddingTop: top, paddingBottom: 44, paddingHorizontal: 20 }}>
        <Svg pointerEvents="none" style={StyleSheet.absoluteFill} width="100%" height="100%" viewBox="0 0 390 300" preserveAspectRatio="none">
          <G fill="none" stroke={C.navy} strokeOpacity={0.05} strokeWidth={1.2}>
            <Path d="M-10 60 C 80 20, 160 100, 240 60 S 360 20, 400 50" />
            <Path d="M-10 100 C 80 60, 160 140, 240 100 S 360 60, 400 90" />
          </G>
        </Svg>
        <Row style={{ justifyContent: 'space-between' }}>
          <WhiteBtn icon={X} onPress={() => router.back()} />
          <T w={800} size={16}>
            Wystaw opinię
          </T>
          <View style={{ width: 44 }} />
        </Row>
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <Avatar initials="MK" g={0} size={58} radius={20} ring={{ width: 4, color: C.white }} />
          <T display size={23} style={{ marginTop: 12, textAlign: 'center' }}>
            Jak było z Michałem?
          </T>
          <View style={{ marginTop: 12 }}>
            <Stars n={5} size={36} gap={8} />
          </View>
          <T w={800} size={13} color={C.seaDark} style={{ marginTop: 6 }}>
            Rewelacyjnie!
          </T>
        </View>
        <Wave height={30} />
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: -16 }}>
        <LinearGradient colors={[C.seaDark, C.sea]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ borderRadius: 20, padding: 12, paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center', gap: 12, boxShadow: '0px 16px 30px -14px rgba(14,140,128,0.7)' }}>
          <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: whiteA(0.15), alignItems: 'center', justifyContent: 'center' }}>
            <BadgeCheck size={20} color={C.white} />
          </View>
          <View style={{ flex: 1 }}>
            <T w={800} size={13.5} color={C.white}>
              Zweryfikowana wizyta
            </T>
            <T size={11.5} color={whiteA(0.75)}>
              Trening personalny · 5 lis 2026 · PRZ-48213
            </T>
          </View>
          <Lock size={16} color={whiteA(0.6)} />
        </LinearGradient>

        <Card style={{ marginTop: 12, paddingHorizontal: 16, paddingVertical: 8 }}>
          <Criterion icon={Award} label="Profesjonalizm" n={5} />
          <Criterion icon={Timer} label="Punktualność" n={5} />
          <Criterion icon={Smile} label="Atmosfera" n={5} />
          <Criterion icon={TrendingUp} label="Efekty" n={4} />
          <Criterion icon={Coins} label="Jakość do ceny" n={4} />
        </Card>

        <T w={800} size={13.5} style={{ marginTop: 16, marginBottom: 8 }}>
          Co wyróżniało trening?
        </T>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          <Chip active height={32} label="Indywidualne podejście" icon={<Check size={14} color={C.white} />} />
          <Chip active height={32} label="Technika" icon={<Check size={14} color={C.white} />} />
          <Chip height={32} label="Motywacja" />
          <Chip height={32} label="Czysta sala" />
        </View>

        <Card style={{ marginTop: 12, padding: 14 }}>
          <T size={13} color={navyA(0.8)} style={{ lineHeight: 20 }}>
            Michał od pierwszych minut poprawił mi technikę przysiadu i dobrał obciążenia pod kolano po kontuzji. Konkretnie, z humorem i bez pośpiechu.
          </T>
          <T w={600} size={11} color={navyA(0.35)} style={{ textAlign: 'right', marginTop: 6 }}>
            152 / 500
          </T>
        </Card>
        <Row gap={10} style={{ marginTop: 12 }}>
          <View style={{ width: 72, height: 72, borderRadius: 18, borderWidth: 1.5, borderStyle: 'dashed', borderColor: navyA(0.2), alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <Camera size={20} color={C.ocean} />
            <T w={700} size={10.5} color={C.ocean}>
              Dodaj
            </T>
          </View>
          <T size={12} color={navyA(0.5)} style={{ flex: 1 }}>
            Zdjęcia są opcjonalne. Opinia pojawi się z oznaczeniem „Zweryfikowana wizyta”.
          </T>
        </Row>
      </View>
    </Screen>
  );
}
