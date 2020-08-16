import { StyleSheet } from "react-native";
import { videos } from "./data";

export default StyleSheet.create({
  container: {
    height: `${videos.length}00%`,
    backgroundColor: "#fff",
  },
  videosContainer: {
    position: "relative",
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

  innerModalContainer: {
    marginTop: "60%",
  },
  allCommentsContainer: {
    width: "100%",
  },
  singleCommentContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  author: {
    fontFamily: "AvenirNext-DemiBold",
    fontSize: 10,
  },
  focusedInput: {
    zIndex: 3,
    height: "20%",
    width: "100%",
    padding: 10,
  },
  inputContainer: {
    width: "100%",
    borderTopColor: "black",
    borderTopWidth: 2,
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  regularInput: {
    width: "90%",
    height: 15,
  },
  postButton: {
    backgroundColor: "#95CAFF",
    color: "white",
    borderRadius: 200,
  },
  modalView: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    width: "100%",
  },
  topRow: {
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
  viewReplies: {
    color: "gray",
    fontSize: 10,
  },
  replayButton: {
    position: "absolute",
    alignSelf: "center",
    marginBottom: "50%",
    height: 65,
    width: 65,
    zIndex: 6,
  },
});
