import { LinearGradient } from 'expo-linear-gradient';
import { router, type Href } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Anchor, CalendarCheck2, CircleUserRound, ConciergeBell, Search, type LucideIcon } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { C, shadow } from '../theme';
import { T } from './ui';

export type TabKey = 'klub' | 'znajdz' | 'hosp' | 'rez' | 'konto';

const TABS: { key: TabKey; href: Href; label: string; icon: LucideIcon }[] = [
  { key: 'klub', href: '/', label: 'Mój klub', icon: Anchor },
  { key: 'znajdz', href: '/znajdz', label: 'Znajdź', icon: Search },
  { key: 'hosp', href: '/hospitality', label: 'Hospitality', icon: ConciergeBell },
  { key: 'rez', href: '/rezerwacje', label: 'Rezerwacje', icon: CalendarCheck2 },
  { key: 'konto', href: '/konto', label: 'Konto', icon: CircleUserRound },
];

const TAB_BAR_BASE = 70;

export function useTabBarHeight() {
  const insets = useSafeAreaInsets();
  return TAB_BAR_BASE + Math.max(insets.bottom, 14);
}

/** Top padding for content that starts under the status bar. */
export function useTopInset(extra = 8) {
  const insets = useSafeAreaInsets();
  return Math.max(insets.top, 24) + extra;
}

function TabBar({ active }: { active: TabKey }) {
  const height = useTabBarHeight();
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height,
        backgroundColor: 'rgba(255,255,255,0.97)',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        boxShadow: '0px -12px 34px -14px rgba(11,37,69,0.18)',
        flexDirection: 'row',
        paddingTop: 9,
        paddingHorizontal: 6,
      }}>
      {TABS.map(({ key, href, label, icon: Icon }) => {
        const isActive = key === active;
        if (key === 'hosp') {
          return (
            <Pressable key={key} onPress={() => router.navigate(href)} style={{ flex: 1, alignItems: 'center' }}>
              <View
                style={{
                  marginTop: -31,
                  marginBottom: 3,
                  borderRadius: 24,
                  borderWidth: 6,
                  borderColor: C.white,
                  boxShadow: isActive ? `0px 0px 0px 2px rgba(46,196,182,0.35), ${shadow.ocean}` : shadow.ocean,
                }}>
                <LinearGradient
                  colors={[C.ocean, '#1E8FB8', C.sea]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ width: 58, height: 58, borderRadius: 19, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={26} color={C.white} strokeWidth={1.9} />
                </LinearGradient>
              </View>
              <T w={700} size={10.5} color={isActive ? C.ocean : C.navy}>
                {label}
              </T>
            </Pressable>
          );
        }
        return (
          <Pressable key={key} onPress={() => router.navigate(href)} style={{ flex: 1, alignItems: 'center', gap: 3 }}>
            <View
              style={{
                width: 52,
                height: 32,
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isActive ? 'rgba(27,108,168,0.1)' : 'transparent',
              }}>
              <Icon size={22} color={isActive ? C.ocean : C.muted} strokeWidth={1.9} />
            </View>
            <T w={700} size={10.5} color={isActive ? C.ocean : C.muted}>
              {label}
            </T>
          </Pressable>
        );
      })}
    </View>
  );
}

/**
 * Frame shared by every screen: background, status bar style, scrollable content,
 * an optional floating bar above the tab bar (e.g. „Zarezerwuj”) and the tab bar itself.
 */
export function Screen({
  tab,
  children,
  bg = C.foam,
  light,
  floating,
  scroll = true,
}: {
  tab: TabKey;
  children: ReactNode;
  bg?: string;
  light?: boolean;
  floating?: ReactNode;
  scroll?: boolean;
}) {
  const tabH = useTabBarHeight();
  return (
    <View style={{ flex: 1, backgroundColor: bg }}>
      <StatusBar style={light ? 'light' : 'dark'} />
      {scroll ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: tabH + (floating ? 110 : 28) }}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
      {floating ? <View style={{ position: 'absolute', left: 12, right: 12, bottom: tabH + 10 }}>{floating}</View> : null}
      <TabBar active={tab} />
    </View>
  );
}

/** Floating white bar with summary on the left and the coral CTA on the right. */
export function CtaBar({ children, action }: { children: ReactNode; action: ReactNode }) {
  return (
    <View
      style={{
        backgroundColor: C.white,
        borderRadius: 26,
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: `${shadow.float}, 0px 0px 0px 1px rgba(11,37,69,0.04)`,
      }}>
      <View style={{ flexShrink: 1 }}>{children}</View>
      {action}
    </View>
  );
}
