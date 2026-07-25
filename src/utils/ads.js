// AdMob — banner + interstitial. The native module only exists in dev/standalone
// builds, so everything is lazily required and fails silent in Expo Go.
//
// Currently using Google's TestIds — swap for real ad unit IDs (AD_UNITS below)
// once the AdMob account is created.
let ads = null;
try {
  ads = require('react-native-google-mobile-ads');
} catch (_) {}

export const adsAvailable = !!ads;

export const AD_UNITS = {
  banner: ads?.TestIds?.BANNER,
  interstitial: ads?.TestIds?.INTERSTITIAL,
};

let initialized = false;
export async function initAds() {
  if (!ads || initialized) return;
  initialized = true;
  try {
    await ads.default().initialize();
  } catch (_) {}
}

// Preloaded interstitial — shown after module completion. Reloads itself after
// each show so the next one is instant.
let interstitial = null;
let interstitialLoaded = false;

export function prepareInterstitial() {
  if (!ads || interstitial) return;
  try {
    interstitial = ads.InterstitialAd.createForAdRequest(AD_UNITS.interstitial, {
      requestNonPersonalizedAdsOnly: true,
    });
    interstitial.addAdEventListener(ads.AdEventType.LOADED, () => { interstitialLoaded = true; });
    interstitial.addAdEventListener(ads.AdEventType.CLOSED, () => {
      interstitialLoaded = false;
      try { interstitial.load(); } catch (_) {}
    });
    interstitial.addAdEventListener(ads.AdEventType.ERROR, () => { interstitialLoaded = false; });
    interstitial.load();
  } catch (_) {}
}

export function showInterstitialIfReady() {
  if (!interstitialLoaded || !interstitial) return false;
  try {
    interstitial.show();
    return true;
  } catch (_) {
    return false;
  }
}
