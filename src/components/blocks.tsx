import { LayoutGrid, Search, Waves, type LucideIcon } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { ScrollView, View, type StyleProp, type ViewStyle } from 'react-native';

import { C } from '../theme';
import { SportIcon } from './art';
import { useTheme } from './ThemeProvider';
import { Chip, Row, T } from './ui';

export function SearchField({ placeholder, style, mic }: { placeholder: string; style?: StyleProp<ViewStyle>; mic?: LucideIcon }) {
  const t = useTheme();
  const Mic = mic;
  return (
    <Row
      gap={10}
      style={[
        {
          height: 52,
          borderRadius: 18,
          backgroundColor: t.surface,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: t.scheme === 'dark' ? t.surfaceEdge : t.textA(0.05),
          boxShadow: t.shadow.soft,
        },
        style,
      ]}>
      <Search size={18} color={t.textA(0.4)} />
      <T size={14} color={t.textA(0.4)} style={{ flex: 1 }}>
        {placeholder}
      </T>
      {Mic ? <Mic size={18} color={t.oceanInk} /> : null}
    </Row>
  );
}

export function Segmented({ items, active }: { items: { label: string; icon?: LucideIcon; badge?: string }[]; active: number }) {
  const t = useTheme();
  const onBg = t.scheme === 'dark' ? '#173457' : t.surface;
  return (
    <Row style={{ padding: 4, borderRadius: 999, backgroundColor: t.segment, borderWidth: 1, borderColor: t.surfaceEdge }}>
      {items.map(({ label, icon: Icon, badge }, i) => {
        const on = i === active;
        const ink = on ? t.text : t.textA(0.5);
        return (
          <Row key={label} gap={6} style={[{ flex: 1, height: 38, borderRadius: 999, justifyContent: 'center' }, on && { backgroundColor: onBg, boxShadow: t.shadow.soft }]}>
            {Icon ? <Icon size={16} color={ink} /> : null}
            <T w={700} size={13.5} color={ink}>
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
  const t = useTheme();
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
        <Chip key={it.key} label={it.label} active={it.key === active} icon={it.icon(it.key === active ? t.onInverse : t.text)} />
      ))}
    </ScrollView>
  );
}
