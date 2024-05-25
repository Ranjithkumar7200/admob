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
    ? TestIds.BANNER
    : "ca-app-pub-6359617404766596/5474810968";
  return (
    <View style={styles.container}>
      <Text>Textind Admobs</Text>
      <Text>{adUnitId}</Text>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      <BannerAd
        unitId={"ca-app-pub-6359617404766596/5474810968"}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <BannerAd
        unitId={"ca-app-pub-6359617404766596/5474810968"}
        size={BannerAdSize.BANNER}
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
