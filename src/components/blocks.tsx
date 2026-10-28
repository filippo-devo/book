import { LayoutGrid, Search, Waves, type LucideIcon } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { ScrollView, View, type StyleProp, type ViewStyle } from 'react-native';

import { C, navyA } from '../theme';
import { SportIcon } from './art';
import { Chip, Row, T } from './ui';

export function SearchField({ placeholder, style, mic }: { placeholder: string; style?: StyleProp<ViewStyle>; mic?: LucideIcon }) {
  const Mic = mic;
  return (
    <Row
      gap={10}
      style={[
        {
          height: 52,
          borderRadius: 18,
          backgroundColor: C.white,
          paddingHorizontal: 16,
          boxShadow: '0px 12px 28px -14px rgba(11,37,69,0.3), 0px 0px 0px 1px rgba(11,37,69,0.05)',
        },
        style,
      ]}>
      <Search size={18} color={navyA(0.4)} />
      <T size={14} color={navyA(0.4)} style={{ flex: 1 }}>
        {placeholder}
      </T>
      {Mic ? <Mic size={18} color={C.ocean} /> : null}
    </Row>
  );
}

export function Segmented({ items, active }: { items: { label: string; icon?: LucideIcon; badge?: string }[]; active: number }) {
  return (
    <Row style={{ padding: 4, borderRadius: 999, backgroundColor: '#EAF0F3' }}>
      {items.map(({ label, icon: Icon, badge }, i) => {
        const on = i === active;
        return (
          <Row
            key={label}
            gap={6}
            style={[
              { flex: 1, height: 38, borderRadius: 999, justifyContent: 'center' },
              on && { backgroundColor: C.white, boxShadow: '0px 6px 14px -8px rgba(11,37,69,0.35)' },
            ]}>
            {Icon ? <Icon size={16} color={on ? C.navy : navyA(0.5)} /> : null}
            <T w={700} size={13.5} color={on ? C.navy : navyA(0.5)}>
              {label}
            </T>
            {badge ? (
              <View style={{ backgroundColor: C.coral, borderRadius: 999, paddingHorizontal: 6, paddingVertical: 1 }}>
                <T w={800} size={11} color={C.white}>
                  {badge}
                </T>
              </View>
            ) : null}
          </Row>
        );
      })}
    </Row>
  );
}

export function SportChips({ active = 'tenis' }: { active?: string }) {
  const items: { key: string; label: string; icon: (c: string) => ReactNode }[] = [
    { key: 'all', label: 'Wszystkie', icon: (c) => <LayoutGrid size={16} color={c} /> },
    { key: 'tenis', label: 'Tenis', icon: (c) => <SportIcon sport="tenis" color={c} /> },
    { key: 'padel', label: 'Padel', icon: (c) => <SportIcon sport="padel" color={c} /> },
    { key: 'squash', label: 'Squash', icon: (c) => <SportIcon sport="squash" color={c} /> },
    { key: 'orlik', label: 'Orlik', icon: (c) => <SportIcon sport="orlik" color={c} /> },
    { key: 'basen', label: 'Basen', icon: (c) => <Waves size={16} color={c} /> },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}>
      {items.map((it) => (
        <Chip key={it.key} label={it.label} active={it.key === active} icon={it.icon(it.key === active ? C.white : C.navy)} />
      ))}
    </ScrollView>
  );
}
