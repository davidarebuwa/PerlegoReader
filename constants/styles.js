// A common style sheet that can be used in more than one component to avoid code duplication
import { StyleSheet } from "react-native";

const common = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 3,
    backgroundColor: "white",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  coverImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default common;
