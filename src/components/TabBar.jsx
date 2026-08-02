import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname, useFocusEffect } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getReviewCount } from '../db/database';
import { C } from '../theme';

const TABS = [
  { key: 'home', label: 'Trilha', icon: '🏠', path: '/' },
  { key: 'review', label: 'Revisão', icon: '📚', path: '/review' },
  { key: 'dialogos', label: 'Diálogos', icon: '💬', path: '/dialogos' },
  { key: 'profile', label: 'Perfil', icon: '👤', path: '/profile' },
];

// Bottom navigation shared by the four main screens. `active` is which tab the
// current screen belongs to; navigation uses replace to avoid stacking.
export default function TabBar({ active, lang }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const db = useSQLiteContext();
  const [reviewCount, setReviewCount] = useState(0);

  useFocusEffect(useCallback(() => {
    getReviewCount(db).then(setReviewCount).catch(() => {});
  }, []));

  function go(tab) {
    if (tab.key === active) return;
    const suffix = tab.key === 'dialogos' && lang ? `?lang=${lang}` : '';
    if (tab.key === 'home') router.replace('/');
    else router.replace(`${tab.path}${suffix}`);
  }

  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {TABS.map(tab => {
        const isActive = tab.key === active;
        return (
          <TouchableOpacity key={tab.key} style={styles.tab} onPress={() => go(tab)} activeOpacity={0.65}>
            <View style={styles.iconWrap}>
              <Text style={[styles.icon, !isActive && styles.iconMuted]}>{tab.icon}</Text>
              {tab.key === 'review' && reviewCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{reviewCount > 99 ? '99+' : reviewCount}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
            {isActive && <View style={styles.activeDot} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: C.bg,
    borderTopWidth: 1,
    borderTopColor: C.border,
    paddingTop: 8,
  },
  tab: { flex: 1, alignItems: 'center', gap: 2 },
  iconWrap: { position: 'relative' },
  icon: { fontSize: 20 },
  iconMuted: { opacity: 0.45 },
  label: { fontSize: 10, fontWeight: '600', color: C.textMuted },
  labelActive: { color: C.accent },
  activeDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: C.accent, marginTop: 1 },
  badge: {
    position: 'absolute', top: -4, right: -10,
    backgroundColor: C.incorrect, borderRadius: 8, minWidth: 16, height: 16,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4,
  },
  badgeText: { fontSize: 9, fontWeight: '800', color: '#fff' },
});
