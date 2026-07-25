import React, { useState } from 'react';
import { View } from 'react-native';

let ads = null;
try {
  ads = require('react-native-google-mobile-ads');
} catch (_) {}

import { AD_UNITS } from '../utils/ads';

// Bottom banner ad. Renders nothing in Expo Go or if the ad fails to load,
// so it never leaves an empty gap.
export default function AdBanner() {
  const [failed, setFailed] = useState(false);
  if (!ads || failed) return null;
  const { BannerAd, BannerAdSize } = ads;
  return (
    <View style={{ alignItems: 'center' }}>
      <BannerAd
        unitId={AD_UNITS.banner}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        onAdFailedToLoad={() => setFailed(true)}
      />
    </View>
  );
}
