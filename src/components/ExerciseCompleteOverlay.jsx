import React, { useEffect, useRef, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { C } from '../theme';

const SIZE = 132;
const STROKE = 8;
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// Shown between exercises (not the final one) inside a module: the ring
// fills to celebrate the block just finished, the number morphs into the
// next exercise's number, then the caller advances state and shows an
// interstitial only once the user taps through.
export default function ExerciseCompleteOverlay({ visible, moduleTitle, completedNum, nextNum, onNext }) {
  const fill = useRef(new Animated.Value(0)).current;
  const numberFade = useRef(new Animated.Value(1)).current;
  const bodyFade = useRef(new Animated.Value(0)).current;
  const [displayNum, setDisplayNum] = useState(completedNum);

  useEffect(() => {
    if (!visible) return;
    setDisplayNum(completedNum);
    fill.setValue(0);
    numberFade.setValue(1);
    bodyFade.setValue(0);

    Animated.timing(fill, {
      toValue: 1,
      duration: 650,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false, // strokeDashoffset isn't supported by the native driver
    }).start(() => {
      Animated.sequence([
        Animated.timing(numberFade, { toValue: 0, duration: 150, useNativeDriver: true }),
      ]).start(() => {
        setDisplayNum(nextNum);
        Animated.timing(numberFade, { toValue: 1, duration: 200, useNativeDriver: true }).start();
      });
      Animated.timing(bodyFade, { toValue: 1, duration: 300, delay: 100, useNativeDriver: true }).start();
    });
  }, [visible, completedNum, nextNum]);

  const strokeDashoffset = fill.interpolate({ inputRange: [0, 1], outputRange: [CIRC, 0] });

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={s.overlay}>
        <View style={s.card}>
          <Text style={s.moduleTitle} numberOfLines={1}>{moduleTitle}</Text>

          <View style={s.ringWrap}>
            <Svg width={SIZE} height={SIZE} style={{ transform: [{ rotate: '-90deg' }] }}>
              <Circle cx={SIZE / 2} cy={SIZE / 2} r={R} stroke={C.border} strokeWidth={STROKE} fill="none" />
              <AnimatedCircle
                cx={SIZE / 2} cy={SIZE / 2} r={R}
                stroke={C.accent} strokeWidth={STROKE} fill="none"
                strokeDasharray={CIRC}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </Svg>
            <Animated.Text style={[s.ringNumber, { opacity: numberFade }]}>{displayNum}</Animated.Text>
          </View>

          <Animated.View style={{ opacity: bodyFade }}>
            <Text style={s.congrats}>Parabéns! Exercício concluído 🎉</Text>
            <TouchableOpacity style={s.nextBtn} activeOpacity={0.85} onPress={onNext}>
              <Text style={s.nextBtnText}>Próximo exercício →</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(12,45,72,0.5)', alignItems: 'center', justifyContent: 'center', padding: 28 },
  card: {
    backgroundColor: C.bg, borderRadius: 22, padding: 28, width: '100%',
    alignItems: 'center',
    shadowColor: '#0C5C99', shadowOpacity: 0.2, shadowRadius: 24, shadowOffset: { width: 0, height: 10 }, elevation: 10,
  },
  moduleTitle: { fontSize: 13, fontWeight: '700', color: C.textMuted, marginBottom: 20, textAlign: 'center' },
  ringWrap: { width: SIZE, height: SIZE, alignItems: 'center', justifyContent: 'center', marginBottom: 22 },
  ringNumber: { position: 'absolute', fontSize: 44, fontWeight: '800', color: C.accent },
  congrats: { fontSize: 16, fontWeight: '700', color: C.text, textAlign: 'center', marginBottom: 20 },
  nextBtn: {
    backgroundColor: C.accent, borderRadius: 14, paddingVertical: 15, paddingHorizontal: 32,
    shadowColor: C.accent, shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 4,
  },
  nextBtnText: { fontSize: 16, fontWeight: '800', color: '#fff' },
});
