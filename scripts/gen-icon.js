const sharp = require('sharp');
const path = require('path');

// Matches src/components/Poly.jsx (happy mood) — EVE-inspired robot.
const bodyFill = '#F8F9FB';
const bodyStroke = '#D7DCE3';
const shade = '#E4E8ED';
const visorHousing = '#1C2733';
const glowDark = '#1B8FE0';
const glow = '#3FB6FF';

function polyArt(extraScale = 1, extraTranslateX = 0, extraTranslateY = 0) {
  return `
  <g transform="translate(${extraTranslateX}, ${extraTranslateY}) scale(${extraScale})">
    <ellipse cx="50" cy="54" rx="30" ry="34" fill="${bodyFill}" stroke="${bodyStroke}" stroke-width="1.5" />
    <path d="M 28 40 Q 26 60 34 80 Q 24 62 26 42 Z" fill="${shade}" opacity="0.5" />
    <ellipse cx="40" cy="28" rx="9" ry="5" fill="#FFFFFF" opacity="0.8" />
    <rect x="47" y="8" width="3" height="10" rx="1.5" fill="${bodyStroke}" />
    <ellipse cx="48.5" cy="7" rx="3" ry="3" fill="${glow}" />
    <rect x="22" y="46" width="56" height="22" rx="11" fill="${visorHousing}" />
    <path d="M 28 57 Q 50 68 72 57 Q 50 64 28 57 Z" fill="${glow}" />
    <ellipse cx="19" cy="62" rx="5" ry="7" fill="${bodyFill}" stroke="${bodyStroke}" stroke-width="1.2" />
    <ellipse cx="81" cy="62" rx="5" ry="7" fill="${bodyFill}" stroke="${bodyStroke}" stroke-width="1.2" />
  </g>`;
}

const assetsDir = path.join(__dirname, '..', 'assets');

async function run() {
  // Foreground: Poly on black, centered within adaptive-icon safe zone
  const fgSvg = `
<svg width="1024" height="1024" viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg">
  <rect width="108" height="108" fill="#000000"/>
  ${polyArt(0.72, 20, 18)}
</svg>
`;
  await sharp(Buffer.from(fgSvg)).resize(1024, 1024).png().toFile(path.join(assetsDir, 'android-icon-foreground.png'));

  // Background layer: solid black
  const bgSvg = `<svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg"><rect width="1024" height="1024" fill="#000000"/></svg>`;
  await sharp(Buffer.from(bgSvg)).resize(1024, 1024).png().toFile(path.join(assetsDir, 'android-icon-background.png'));

  // Main app icon (used for launcher fallback / notifications / Play Store) —
  // Poly centered on black, slightly larger since no adaptive-icon cropping here.
  const mainIconSvg = `
<svg width="1024" height="1024" viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg">
  <rect width="108" height="108" fill="#000000"/>
  ${polyArt(0.84, 16, 12)}
</svg>
`;
  await sharp(Buffer.from(mainIconSvg)).resize(1024, 1024).png().toFile(path.join(assetsDir, 'icon.png'));

  // Also update the adaptive icon background color hint in app.json
  console.log('Icons generated (black background, Poly centered).');
}

run().catch(e => { console.error(e); process.exit(1); });
