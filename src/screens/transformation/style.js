import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  header: {
    padding: 20,
    backgroundColor: "#000",
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 20,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 20,
  },
  mainInfo: {
    alignItems: "center",
    marginTop: 30,
  },
  characterImageContainer: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: (width * 0.5) / 2,
    borderWidth: 3,
    borderColor: "#efb810",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  characterImage: {
    width: "100%",
    height: "220%",
    resizeMode: "cover",
    alignSelf: "flex-start",
  },
  characterName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 15,
    textShadowColor: "#efb810",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
    backgroundColor: "rgba(239, 184, 16, 0.1)",
    padding: 15,
    borderRadius: 10,
  },
  infoBox: {
    alignItems: "center",
  },
  infoLabel: {
    color: "#efb810",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoValue: {
    color: "#FFF",
    fontSize: 16,
  },
  transformationsList: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#efb810",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "#efb810",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  transformationCard: {
    backgroundColor: "#333",
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#efb810",
    elevation: 5,
    shadowColor: "#efb810",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  transformationImage: {
    width: 180,
    height: 280,
  },
  transformationInfo: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  transformationName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  transformationKi: {
    fontSize: 16,
    color: "#efb810",
    fontWeight: "500",
  },
  noTransformations: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(239, 184, 16, 0.1)",
    borderRadius: 10,
    marginTop: 20,
  },
  noTransformationsText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;