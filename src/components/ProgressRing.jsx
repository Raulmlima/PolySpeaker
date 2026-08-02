import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { C } from '../theme';

// Circular progress ring (Apple-Watch style). pct: 0..1
export default function ProgressRing({ pct = 0, size = 40, stroke = 4, showPct = true }) {
  const r = (size - stroke) / 2;
  const cx = size / 2;
  const circ = 2 * Math.PI * r;
  const filled = Math.min(Math.max(pct, 0), 1) * circ;
  const done = pct >= 1;

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size} height={size} style={{ position: 'absolute', transform: [{ rotate: '-90deg' }] }}>
        <Circle cx={cx} cy={cx} r={r} stroke={C.border} strokeWidth={stroke} fill="none" />
        <Circle
          cx={cx} cy={cx} r={r}
          stroke={done ? C.correct : C.accent}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${filled} ${circ - filled}`}
          strokeLinecap="round"
        />
      </Svg>
      {showPct && (
        <Text style={{ fontSize: size * 0.24, fontWeight: '800', color: done ? C.correct : C.accent }}>
          {done ? '✓' : `${Math.round(pct * 100)}%`}
        </Text>
      )}
    </View>
  );
}
