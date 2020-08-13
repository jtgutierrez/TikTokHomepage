import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Video } from "expo-av";
import styles, { videos } from "./styles";
import { ScrollView } from "react-native-gesture-handler";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart,
  faUserCircle,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import comments from "./commentData";
import CommentModal from "./components/Comments";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          uri: videos[0],
          likes: 356,
          comments,
          playing: false,
        },
        {
          uri: videos[1],
          likes: 500,
          comments,
          playing: false,
        },
        {
          uri: videos[2],
          likes: 1000,
          comments,
          playing: false,
        },
      ],
      commentsOpen: false,
    };
    this.videoRefs = [];
    this.handlePress = this.handlePress.bind(this);
    this.handleVideoRef = this.handleVideoRef.bind(this);
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

  handleEndMomentum(e) {
    let idx =
      (e.nativeEvent.contentOffset.y + e.nativeEvent.layoutMeasurement.height) /
        e.nativeEvent.layoutMeasurement.height -
      1;

    this.setState((state) => {
      let copyState = { ...state };
      copyState.videos = copyState.videos.map((video, i) => {
        if (i !== idx) {
          video.playing = false;
          this.videoRefs[i].stopAsync();
        } else {
          video.playing = true;
        }
        return video;
      });
      return { ...copyState };
    });
  }

  handleVideoRef(playbackObj) {
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
        onMomentumScrollEnd={this.handleEndMomentum}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {this.state.videos.map((video, idx) => {
          return (
            <View style={styles.videosContainer} key={idx}>
              <TouchableWithoutFeedback
                onPress={(j) => this.handlePress(j, idx)}
                style={{ zIndex: 0 }}
              >
                <Video
                  ref={(playbackObj) => this.handleVideoRef(playbackObj)}
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

                <CommentModal comments={video.comments} />

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
