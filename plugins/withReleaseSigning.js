const { withAppBuildGradle, withGradleProperties } = require('@expo/config-plugins');

// Wires up release signing with the production upload keystore stored OUTSIDE
// android/ (at ../polyspeaker2-keys/), so `expo prebuild --clean` never wipes it
// and every fresh prebuild automatically re-applies this config.
const STORE_FILE = 'C:\\\\p\\\\polyspeaker2-keys\\\\polyspeaker-release.keystore';
const STORE_PASSWORD = '8x2pZq5nti3L3jFprXvAUGNy';
const KEY_ALIAS = 'polyspeaker-upload';
const KEY_PASSWORD = '8x2pZq5nti3L3jFprXvAUGNy';

function withReleaseSigning(config) {
  // Android-only plugin — skip entirely when building for iOS
  if (config.ios && !config.android) return config;

  config = withGradleProperties(config, (config) => {
    config.modResults.push(
      { type: 'comment', value: 'Release signing — see C:\\p\\polyspeaker2-keys\\CREDENTIALS-DO-NOT-LOSE.txt' },
      { type: 'property', key: 'POLYSPEAKER_RELEASE_STORE_FILE', value: STORE_FILE },
      { type: 'property', key: 'POLYSPEAKER_RELEASE_STORE_PASSWORD', value: STORE_PASSWORD },
      { type: 'property', key: 'POLYSPEAKER_RELEASE_KEY_ALIAS', value: KEY_ALIAS },
      { type: 'property', key: 'POLYSPEAKER_RELEASE_KEY_PASSWORD', value: KEY_PASSWORD },
    );
    return config;
  });

  config = withAppBuildGradle(config, (config) => {
    let contents = config.modResults.contents;

    if (!contents.includes('POLYSPEAKER_RELEASE_STORE_FILE')) {
      contents = contents.replace(
        /signingConfigs\s*\{\s*debug\s*\{[^}]*\}\s*\}/,
        (match) => {
          const debugBlock = match.replace(/\s*\}\s*$/, '');
          return `${debugBlock}
        release {
            if (project.hasProperty('POLYSPEAKER_RELEASE_STORE_FILE')) {
                storeFile file(POLYSPEAKER_RELEASE_STORE_FILE)
                storePassword POLYSPEAKER_RELEASE_STORE_PASSWORD
                keyAlias POLYSPEAKER_RELEASE_KEY_ALIAS
                keyPassword POLYSPEAKER_RELEASE_KEY_PASSWORD
            }
        }
    }`;
        }
      );

      contents = contents.replace(
        /release\s*\{\s*\/\/[^\n]*\n\s*\/\/[^\n]*\n\s*signingConfig signingConfigs\.debug/,
        `release {
            signingConfig project.hasProperty('POLYSPEAKER_RELEASE_STORE_FILE') ? signingConfigs.release : signingConfigs.debug`
      );
    }

    config.modResults.contents = contents;
    return config;
  });

  return config;
}

module.exports = withReleaseSigning;
