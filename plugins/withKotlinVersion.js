const { withProjectBuildGradle } = require('@expo/config-plugins');

// react-native-google-mobile-ads pulls in play-services-ads 25.4.0, whose
// .kotlin_module metadata requires a Kotlin compiler >= 2.3.0. The default RN
// gradle template resolves `ext.kotlinVersion` to an older pinned version
// (2.1.0), which fails with "Module was compiled with an incompatible
// version of Kotlin" during :react-native-google-mobile-ads:compileReleaseKotlin.
//
// expo-build-properties' `android.kotlinVersion` sets a gradle.properties
// string, but react-native-google-mobile-ads/android/build.gradle reads
// `rootProject.ext.kotlinVersion` directly (via getExtOrDefault) — the
// gradle.properties value never reaches it. So we inject the ext variable
// straight into the root android/build.gradle's buildscript block instead.
const KOTLIN_VERSION = '2.3.0';

function withKotlinVersion(config) {
  return withProjectBuildGradle(config, (config) => {
    let contents = config.modResults.contents;

    if (!contents.includes('kotlinVersion =')) {
      contents = contents.replace(
        /buildscript\s*\{/,
        `buildscript {\n  ext {\n    kotlinVersion = "${KOTLIN_VERSION}"\n  }`
      );
    }

    // The ext.kotlinVersion var above is read by some third-party libraries'
    // own build.gradle (e.g. react-native-google-mobile-ads when built
    // standalone), but NOT by this root project's own classpath dependency
    // below — that one resolves through Gradle's plugin/module resolution
    // with no version pin, and defaults to whatever com.facebook.react's
    // react-native-gradle-plugin constrains it to (2.1.0 here). Pin it
    // explicitly so the compiler used for the whole build tree is new enough
    // to read metadata from newer transitive deps like play-services-ads.
    contents = contents.replace(
      /classpath\(['"]org\.jetbrains\.kotlin:kotlin-gradle-plugin['"]\)/,
      `classpath('org.jetbrains.kotlin:kotlin-gradle-plugin:${KOTLIN_VERSION}')`
    );

    config.modResults.contents = contents;
    return config;
  });
}

module.exports = withKotlinVersion;
