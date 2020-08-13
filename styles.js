import { StyleSheet } from "react-native";
import { Asset } from "expo-asset";

const cat = Asset.fromModule(require("./videos/cat.mp4")).uri;
const hockey = Asset.fromModule(require("./videos/hockey.mp4")).uri;
const shark = Asset.fromModule(require("./videos/shark.mp4")).uri;

export let videos = [cat, hockey, shark];

export default StyleSheet.create({
  container: {
    height: `${videos.length}00%`,
    backgroundColor: "#fff",
  },
  videosContainer: {
    flex: 1,
    zIndex: -1,
    flexDirection: "column-reverse",
  },
  picContainer: {
    position: "absolute",
    zIndex: 2,
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    height: "50%",
  },
  tinyPic: {
    zIndex: 1,
    color: "white",
    marginLeft: 20,
    marginTop: 20,
    marginRight: 10,
  },
  tinyPicTxt: {
    fontSize: 9,
    color: "white",
    textAlign: "right",
    fontFamily: "Futura",
    marginRight: 5,
  },
  commentContainer: {
    marginTop: "60%",
  },
  modalView: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // alignSelf: "flex-start",
    // justifyContent: "flex-start",
    width: "100%",
    // alignSelf: "baseline",
  },
  topRow: {
    // justifyContent: "space-between",
    padding: 20,
    width: "100%",
  },
  textStyle: {
    position: "absolute",
    color: "black",
    fontWeight: "bold",
    textAlign: "right",
    top: 0,
    right: 10,
    padding: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
