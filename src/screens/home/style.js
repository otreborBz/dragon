import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1 },
  logo: { width: "100%", height: 120, resizeMode: "contain", alignSelf: 'center', marginVertical: 10 },
  list: { flex: 1, paddingHorizontal: 10 },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default styles;