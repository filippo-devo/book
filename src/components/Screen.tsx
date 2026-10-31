import { LinearGradient } from 'expo-linear-gradient';
import { router, type Href } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Anchor, CalendarCheck2, CircleUserRound, ConciergeBell, Search, type LucideIcon } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { whiteA } from '../theme';
import { useTheme } from './ThemeProvider';
import { T } from './ui';

export type TabKey = 'klub' | 'znajdz' | 'hosp' | 'rez' | 'konto';

const TABS: { key: TabKey; href: Href; label: string; icon: LucideIcon }[] = [
  { key: 'klub', href: '/', label: 'Mój klub', icon: Anchor },
  { key: 'znajdz', href: '/znajdz', label: 'Znajdź', icon: Search },
  { key: 'hosp', href: '/hospitality', label: 'Hospitality', icon: ConciergeBell },
  { key: 'rez', href: '/rezerwacje', label: 'Rezerwacje', icon: CalendarCheck2 },
  { key: 'konto', href: '/konto', label: 'Konto', icon: CircleUserRound },
];

const TAB_BAR_BASE = 64;
const TAB_BAR_GAP = 10;

/** Space the floating tab bar takes at the bottom of the screen, including its gap. */
export function useTabBarHeight() {
  const insets = useSafeAreaInsets();
  return TAB_BAR_BASE + Math.max(insets.bottom - 4, TAB_BAR_GAP) + TAB_BAR_GAP;
}

/** Top padding for content that starts under the status bar. */
export function useTopInset(extra = 8) {
  const insets = useSafeAreaInsets();
  return Math.max(insets.top, 24) + extra;
}

/** Floating deep-sea pill; Hospitality sits in the middle as a raised sea-green button. */
function TabBar({ active }: { active: TabKey }) {
  const t = useTheme();
  const insets = useSafeAreaInsets();
  const bar = t.tabBar;
  return (
    <View
      style={{
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: Math.max(insets.bottom - 4, TAB_BAR_GAP),
        height: TAB_BAR_BASE,
        backgroundColor: bar.bg,
        borderRadius: TAB_BAR_BASE / 2,
        borderWidth: 1,
        borderColor: t.scheme === 'dark' ? whiteA(0.08) : 'transparent',
        boxShadow: t.shadow.tabBar,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
      }}>
      {TABS.map(({ key, href, label, icon: Icon }) => {
        const isActive = key === active;
        if (key === 'hosp') {
          return (
            <Pressable key={key} onPress={() => router.navigate(href)} accessibilityLabel={label} style={{ flex: 1, alignItems: 'center' }}>
              <View style={{ marginTop: -26, borderRadius: 26, borderWidth: 5, borderColor: t.bg, boxShadow: isActive ? `0px 0px 0px 2px ${bar.centerFrom}` : undefined }}>
                <LinearGradient
                  colors={[bar.centerFrom, bar.centerTo]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ width: 54, height: 54, borderRadius: 21, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={25} color={bar.centerIcon} strokeWidth={2} />
                </LinearGradient>
              </View>
              <T w={700} size={10} color={isActive ? bar.active : bar.icon} style={{ marginTop: 1 }}>
                {label}
              </T>
            </Pressable>
          );
        }
        return (
          <Pressable key={key} onPress={() => router.navigate(href)} style={{ flex: 1, alignItems: 'center', gap: 2 }}>
            <View
              style={{
                width: 48,
                height: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isActive ? bar.activeBg : 'transparent',
              }}>
              <Icon size={21} color={isActive ? bar.active : bar.icon} strokeWidth={isActive ? 2.1 : 1.8} />
            </View>
            <T w={700} size={10} color={isActive ? bar.active : bar.icon}>
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
 * `dark` forces light status-bar content for screens that are always dark (My AI).
 */
export function Screen({
  tab,
  children,
  bg,
  dark,
  floating,
  scroll = true,
}: {
  tab: TabKey;
  children: ReactNode;
  bg?: string;
  dark?: boolean;
  floating?: ReactNode;
  scroll?: boolean;
}) {
  const t = useTheme();
  const tabH = useTabBarHeight();
  return (
    <View style={{ flex: 1, backgroundColor: bg ?? t.bg }}>
      <StatusBar style={dark || t.scheme === 'dark' ? 'light' : 'dark'} />
      {scroll ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: tabH + (floating ? 110 : 28) }}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
      {bg ? null : (
        <LinearGradient
          pointerEvents="none"
          colors={[t.bgA(0), t.bgA(0.9), t.bg]}
          locations={[0, 0.45, 1]}
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: tabH + (floating ? 90 : 26) }}
        />
      )}
      {floating ? <View style={{ position: 'absolute', left: 12, right: 12, bottom: tabH + 10 }}>{floating}</View> : null}
      <TabBar active={tab} />
    </View>
  );
}

/** Floating bar with summary on the left and the coral CTA on the right. */
export function CtaBar({ children, action }: { children: ReactNode; action: ReactNode }) {
  const t = useTheme();
  return (
    <View
      style={{
        backgroundColor: t.surface,
        borderRadius: 26,
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: t.scheme === 'dark' ? t.surfaceEdge : t.textA(0.04),
        boxShadow: t.shadow.float,
      }}>
      <View style={{ flexShrink: 1 }}>{children}</View>
      {action}
    </View>
  );
}
