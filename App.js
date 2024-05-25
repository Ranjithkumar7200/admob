import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "expo-dev-client";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

export default function App() {
  const adUnitId = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : "ca-app-pub-6359617404766596/8171093237";
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
