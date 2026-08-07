import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getReviewCount } from '../db/database';
import { C } from '../theme';
import { t } from '../utils/uiLang';
import { TrailIcon, ReviewIcon, DialogosIcon, ProfileIcon } from './TabIcons';

// Tab bar chrome follows the device's system language (not the language
// being studied) — a first-time user should recognize these labels even
// before picking a course.
const TABS = [
  { key: 'home', label: t({ pt: 'Trilha', en: 'Path', ar: 'المسار' }), Icon: TrailIcon, path: '/' },
  { key: 'review', label: t({ pt: 'Revisão', en: 'Review', ar: 'المراجعة' }), Icon: ReviewIcon, path: '/review' },
  { key: 'dialogos', label: t({ pt: 'Diálogos', en: 'Dialogues', ar: 'حوارات' }), Icon: DialogosIcon, path: '/dialogos' },
  { key: 'profile', label: t({ pt: 'Perfil', en: 'Profile', ar: 'الملف الشخصي' }), Icon: ProfileIcon, path: '/profile' },
];

function TabButton({ tab, isActive, reviewCount, onPress }) {
  const scale = useRef(new Animated.Value(isActive ? 1 : 0.88)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: isActive ? 1 : 0.88,
      friction: 5,
      tension: 140,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  const { Icon } = tab;
  const color = isActive ? C.accent : C.textMuted;

  return (
    <TouchableOpacity style={styles.tab} onPress={onPress} activeOpacity={0.65}>
      <Animated.View style={[styles.iconWrap, { transform: [{ scale }] }]}>
        <Icon color={color} active={isActive} />
        {tab.key === 'review' && reviewCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{reviewCount > 99 ? '99+' : reviewCount}</Text>
          </View>
        )}
      </Animated.View>
      <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
      {isActive && <View style={styles.activeDot} />}
    </TouchableOpacity>
  );
}

// Bottom navigation shared by the four main screens. `active` is which tab the
// current screen belongs to; navigation uses replace to avoid stacking.
export default function TabBar({ active, lang }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const db = useSQLiteContext();
  const [reviewCount, setReviewCount] = useState(0);

  useFocusEffect(useCallback(() => {
    getReviewCount(db, lang ?? 'es').then(setReviewCount).catch(() => {});
  }, [lang]));

  function go(tab) {
    if (tab.key === active) return;
    const suffix = tab.key === 'dialogos' && lang ? `?lang=${lang}` : '';
    if (tab.key === 'home') router.replace('/');
    else router.replace(`${tab.path}${suffix}`);
  }

  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {TABS.map(tab => (
        <TabButton
          key={tab.key}
          tab={tab}
          isActive={tab.key === active}
          reviewCount={reviewCount}
          onPress={() => go(tab)}
        />
      ))}
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
  tab: { flex: 1, alignItems: 'center', gap: 3 },
  iconWrap: { position: 'relative' },
  label: { fontSize: 10, fontWeight: '600', color: C.textMuted },
  labelActive: { color: C.accent, fontWeight: '700' },
  activeDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: C.accent, marginTop: 1 },
  badge: {
    position: 'absolute', top: -6, right: -12,
    backgroundColor: C.incorrect, borderRadius: 8, minWidth: 16, height: 16,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4,
  },
  badgeText: { fontSize: 9, fontWeight: '800', color: '#fff' },
});
