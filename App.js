import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Video } from "expo-av";
import { ScrollView } from "react-native-gesture-handler";
import { Asset } from "expo-asset";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart,
  faUserCircle,
  faComment,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";

const cat = Asset.fromModule(require("./videos/cat.mp4")).uri;
const hockey = Asset.fromModule(require("./videos/hockey.mp4")).uri;
const shark = Asset.fromModule(require("./videos/shark.mp4")).uri;
let videos = [cat, hockey, shark];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          uri: cat,
          likes: 356,
          comments: 110,
          playing: false,
        },
        {
          uri: hockey,
          likes: 500,
          comments: 53,
          playing: false,
        },
        {
          uri: shark,
          likes: 1000,
          comments: 600,
          playing: false,
        },
      ],
    };
    this.videoRefs = [];
    this.handlePress = this.handlePress.bind(this);
    this.handleVideoRef = this.handleVideoRef.bind(this);
  }
  async handlePress(j, idx) {
    let videoRef = this.videoRefs[idx];
    let videoStatus = await videoRef.getStatusAsync();

    if (videoStatus.positionMillis === videoStatus.durationMillis) {
      await videoRef.replayAsync();
    } else {
      this.setState((state) => {
        state.videos[idx].playing = !state.videos[idx].playing;
        return { ...state };
      });
    }
  }
  handleVideoRef(playbackObj, idx) {
    this.videoRefs.push(playbackObj);
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.videos.map((video, idx) => {
          return (
            <View style={styles.videosContainer} key={idx}>
              <TouchableWithoutFeedback
                onPress={(j) => this.handlePress(j, idx)}
                pagingEnabled={true}
                style={{ zIndex: 0 }}
              >
                <Video
                  ref={(playbackObj) => this.handleVideoRef(playbackObj, idx)}
                  source={{
                    uri: video.uri,
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  shouldPlay={video.playing}
                  style={{ height: "100%" }}
                />
              </TouchableWithoutFeedback>
              <View style={styles.picContainer}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={styles.tinyPic}
                  size={32}
                />

                <FontAwesomeIcon
                  icon={faHeart}
                  style={styles.tinyPic}
                  size={32}
                />
                <Text style={{ ...styles.tinyPicTxt }}>{video.likes}</Text>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ ...styles.tinyPic, color: "#56fc03" }}
                  size={32}
                />
                <Text style={{ ...styles.tinyPicTxt }}>{video.comments}</Text>
                <FontAwesomeIcon
                  icon={faShareSquare}
                  style={{ ...styles.tinyPic, marginBottom: 25 }}
                  size={32}
                ></FontAwesomeIcon>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
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
});
