import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';

let ads = null;
try {
  ads = require('react-native-google-mobile-ads');
} catch (_) {}

import { AD_UNITS } from '../utils/ads';

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 20000;

// Bottom banner ad. Renders nothing while there's no ad loaded, so it never
// leaves an empty gap. A failed load (common for a low-traffic app still
// building AdMob fill) retries a few times instead of giving up forever the
// first time a request comes back empty.
export default function AdBanner() {
  const [attempt, setAttempt] = useState(0);
  const [gaveUp, setGaveUp] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  if (!ads || gaveUp) return null;
  const { BannerAd, BannerAdSize } = ads;

  return (
    <View style={{ alignItems: 'center' }}>
      <BannerAd
        key={attempt}
        unitId={AD_UNITS.banner}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        onAdFailedToLoad={() => {
          if (attempt + 1 >= MAX_RETRIES) { setGaveUp(true); return; }
          timerRef.current = setTimeout(() => setAttempt(a => a + 1), RETRY_DELAY_MS);
        }}
      />
    </View>
  );
}
