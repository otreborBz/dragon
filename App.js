import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import Routes from "./src/routes/routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground 
        source={require("./src/image/background.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
