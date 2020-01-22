import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  item: {
    marginTop: "10px",
    marginBottom: "10px"
  },
  listText: {
    "@media (max-width: 600px)": {
      fontSize: "15px"
    }
  }
});
