import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

// Custom line-icon set for the tab bar — same stroke language across all
// four, so the row reads as one designed set instead of mismatched emoji.
const SIZE = 22;
const STROKE = 2;

export function TrailIcon({ color, active }) {
  return (
    <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
      <Path d="M4 20 L4 14 Q4 11 7 11 L17 11 Q20 11 20 8 L20 4"
        stroke={color} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="4" cy="20" r="2.4" fill={active ? color : 'none'} stroke={color} strokeWidth={STROKE} />
      <Circle cx="20" cy="4" r="2.4" fill={active ? color : 'none'} stroke={color} strokeWidth={STROKE} />
    </Svg>
  );
}

export function ReviewIcon({ color, active }) {
  return (
    <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
      <Path d="M12 3 a9 9 0 1 0 9 9" stroke={color} strokeWidth={STROKE} strokeLinecap="round" fill="none" />
      <Path d="M12 3 L15.5 4.5 L12.5 7" stroke={color} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M12 7.5 L12 12 L15 14" stroke={color} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" fill={active ? color : 'none'} opacity={active ? 0.15 : 1} />
      <Path d="M12 7.5 L12 12 L15 14" stroke={color} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}

export function DialogosIcon({ color, active }) {
  return (
    <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 5 h16 a1 1 0 0 1 1 1 v9 a1 1 0 0 1 -1 1 H9 l-4 4 v-4 H4 a1 1 0 0 1 -1 -1 V6 a1 1 0 0 1 1 -1 Z"
        stroke={color} strokeWidth={STROKE} strokeLinejoin="round"
        fill={active ? color : 'none'} fillOpacity={active ? 0.12 : 0}
      />
      <Circle cx="8.5" cy="10.5" r="1.1" fill={color} />
      <Circle cx="12" cy="10.5" r="1.1" fill={color} />
      <Circle cx="15.5" cy="10.5" r="1.1" fill={color} />
    </Svg>
  );
}

export function ProfileIcon({ color, active }) {
  return (
    <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="8" r="3.6" stroke={color} strokeWidth={STROKE} fill={active ? color : 'none'} fillOpacity={active ? 0.15 : 0} />
      <Path d="M5 20 c0 -4 3.2 -6.5 7 -6.5 s7 2.5 7 6.5"
        stroke={color} strokeWidth={STROKE} strokeLinecap="round" fill="none" />
    </Svg>
  );
}
