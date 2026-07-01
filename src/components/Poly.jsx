import React from 'react';
import Svg, { Ellipse, Rect, Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';

// Poly — the PolySpeaker mascot. A sleek, EVE-inspired robot: smooth white
// egg-shaped body with a glowing blue visor for a face, futuristic and
// friendly. The visor shape changes with mood instead of drawing eyes/mouth.
//
// mood: 'happy' (default, completion/success), 'neutral' (general UI),
//       'oops' (errors, empty states)
export default function Poly({ size = 96, mood = 'happy' }) {
  const bodyFill = '#F8F9FB';
  const bodyStroke = '#D7DCE3';
  const shade = '#E4E8ED';
  const visorHousing = '#1C2733';
  const glow = '#3FB6FF';
  const glowDark = '#1B8FE0';

  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Defs>
        <LinearGradient id="polyGlow" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={glowDark} />
          <Stop offset="1" stopColor={glow} />
        </LinearGradient>
      </Defs>

      {/* Ground glow */}
      <Ellipse cx="50" cy="91" rx="18" ry="3.5" fill={glow} opacity="0.22" />

      {/* Body — smooth egg shape */}
      <Ellipse cx="50" cy="54" rx="30" ry="34" fill={bodyFill} stroke={bodyStroke} strokeWidth="1.5" />
      {/* Body shading for a subtle 3D feel */}
      <Path d="M 28 40 Q 26 60 34 80 Q 24 62 26 42 Z" fill={shade} opacity="0.5" />
      {/* Top highlight */}
      <Ellipse cx="40" cy="28" rx="9" ry="5" fill="#FFFFFF" opacity="0.8" />

      {/* Small antenna nub, brand nod */}
      <Rect x="47" y="8" width="3" height="10" rx="1.5" fill={bodyStroke} />
      <Ellipse cx="48.5" cy="7" rx="3" ry="3" fill={glow} />

      {/* Visor housing */}
      <Rect x="22" y="46" width="56" height="22" rx="11" fill={visorHousing} />

      {/* Glowing visor — shape changes with mood */}
      {mood === 'happy' && (
        <Path d="M 28 57 Q 50 68 72 57 Q 50 64 28 57 Z" fill="url(#polyGlow)" />
      )}
      {mood === 'neutral' && (
        <Rect x="28" y="54" width="44" height="7" rx="3.5" fill="url(#polyGlow)" />
      )}
      {mood === 'oops' && (
        <G>
          <Path d="M 30 51 L 46 60" stroke={glow} strokeWidth="5" strokeLinecap="round" />
          <Path d="M 46 51 L 30 60" stroke={glow} strokeWidth="5" strokeLinecap="round" />
          <Path d="M 54 51 L 70 60" stroke={glow} strokeWidth="5" strokeLinecap="round" />
          <Path d="M 70 51 L 54 60" stroke={glow} strokeWidth="5" strokeLinecap="round" />
        </G>
      )}

      {/* Side arm nubs */}
      <Ellipse cx="19" cy="62" rx="5" ry="7" fill={bodyFill} stroke={bodyStroke} strokeWidth="1.2" />
      <Ellipse cx="81" cy="62" rx="5" ry="7" fill={bodyFill} stroke={bodyStroke} strokeWidth="1.2" />
    </Svg>
  );
}
