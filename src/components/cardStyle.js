import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  card: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
    borderWidth: 2,
    borderColor: "#efb92e",
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
  },
  characteristicsContainer: {
    flex: 1,
    gap: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  characteristicText: {
    fontSize: 14,
    color: "#efb92e",
    fontWeight: '500',
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
  },
  info: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 20,
    marginTop: 15,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: '#efb92e20', // mais clean
  },
  textInfo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 5,
    fontStyle: 'italic',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    maxHeight: '80%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  description: {
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
  },
  button: {
    width: "60%",
    backgroundColor: "#efb92e",
    padding: 12,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  }
});

export default styles;