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
      currentVideo: 0,
      height: 0,
    };
    this.videoRefs = [];
    this.handlePress = this.handlePress.bind(this);
    this.handleVideoRef = this.handleVideoRef.bind(this);
    // this.handleEndDrag = this.handleEndDrag.bind(this);
    this.handleEndMomentum = this.handleEndMomentum.bind(this);
  }
  async handlePress(j, idx) {
    let videoRef = this.videoRefs[idx];
    let videoStatus = await videoRef.getStatusAsync();

    if (videoStatus.positionMillis === videoStatus.durationMillis) {
      await videoRef.replayAsync();
    } else {
      this.setState((state) => {
        let copyState = { ...state };
        copyState.videos[idx].playing = !copyState.videos[idx].playing;
        return { ...copyState };
      });
    }
  }

  // handleEndDrag(e) {
  //   let direction;
  //   let currentVideo = this.state.currentVideo;
  //   let verticalVelocity = e.nativeEvent.velocity.y;
  //   // console.log(e);
  //   if (verticalVelocity === 0) return;
  //   verticalVelocity < 0 ? (direction = "back") : (direction = "forward");

  //   if (direction === "forward" && currentVideo !== videos.length - 1) {
  //     this.setState(
  //       (state) => {
  //         let copyState = { ...state };
  //         copyState.currentVideo++;
  //         copyState.videos[currentVideo + 1].playing = true;
  //         return { ...copyState };
  //       },
  //       () => {
  //         let idx = this.state.currentVideo;
  //         let prevVideoRef = this.videoRefs[idx - 1];
  //         let currentVideoRef = this.videoRefs[idx];
  //         prevVideoRef.stopAsync();
  //         currentVideoRef.playAsync();
  //       }
  //     );
  //   } else if (direction === "back" && currentVideo !== 0) {
  //     this.setState(
  //       (state) => {
  //         let copyState = { ...state };
  //         copyState.currentVideo--;
  //         copyState.videos[currentVideo - 1].playing = true;
  //         return { ...copyState };
  //       },
  //       () => {
  //         let idx = this.state.currentVideo;
  //         let prevVideoRef = this.videoRefs[idx + 1];
  //         let currentVideoRef = this.videoRefs[idx];
  //         prevVideoRef.stopAsync();
  //         currentVideoRef.playAsync();
  //       }
  //     );
  //   }
  // }
  handleEndMomentum(e) {
    let prevHeight = this.state.height;
    let currentHeight = e.nativeEvent.contentOffset.y;
    let currentVideo = this.state.currentVideo;
    console.log(e);

    this.setState({ height: currentHeight }, () => {
      if (currentHeight > prevHeight) {
        this.setState(
          (state) => {
            let copyState = { ...state };
            copyState.currentVideo++;
            copyState.videos[currentVideo + 1].playing = true;
            return { ...copyState };
          },
          () => {
            let idx = this.state.currentVideo;
            let prevVideoRef = this.videoRefs[idx - 1];
            let currentVideoRef = this.videoRefs[idx];
            prevVideoRef.stopAsync();
            currentVideoRef.playAsync();
          }
        );
      } else if (currentHeight < prevHeight) {
        this.setState(
          (state) => {
            let copyState = { ...state };
            copyState.currentVideo--;
            copyState.videos[currentVideo - 1].playing = true;
            return { ...copyState };
          },
          () => {
            let idx = this.state.currentVideo;
            let prevVideoRef = this.videoRefs[idx + 1];
            let currentVideoRef = this.videoRefs[idx];
            prevVideoRef.stopAsync();
            currentVideoRef.playAsync();
          }
        );
      }
    });
  }

  handleVideoRef(playbackObj, idx) {
    this.videoRefs.push(playbackObj);
  }
  componentDidMount() {
    this.setState((state) => {
      let copyState = { ...state };
      copyState.videos[0].playing = true;
      return copyState;
    });
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        pagingEnabled={true}
        // onScrollEndDrag={this.handleEndDrag}
        // onMomentumScrollBegin={(e) => console.log("BEGIN", e)}
        onMomentumScrollEnd={this.handleEndMomentum}
        showsVerticalScrollIndicator={false}
        bounces={false}
        snapToAlignment={"start"}
        disableIntervalMomentum={true}
        canCancelContentTouches={false}
      >
        {this.state.videos.map((video, idx) => {
          return (
            <View style={styles.videosContainer} key={idx}>
              <TouchableWithoutFeedback
                onPress={(j) => this.handlePress(j, idx)}
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
