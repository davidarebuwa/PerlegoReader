// A common style sheet that can be used in more than one component to avoid code duplication
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 3,
    backgroundColor: "white",
  },
});
