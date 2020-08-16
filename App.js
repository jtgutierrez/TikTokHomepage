import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import styles from "./styles";
import { videos, replayButton } from "./data";
import { ScrollView } from "react-native-gesture-handler";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart,
  faUserCircle,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import CommentModal from "./components/Comments";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos,
      commentsOpen: false,
    };
    this.videoRefs = [];
    this.handleVideoPress = this.handleVideoPress.bind(this);
    this.handleVideoRef = this.handleVideoRef.bind(this);
    this.handleEndMomentum = this.handleEndMomentum.bind(this);
  }
  async handleVideoPress(idx) {
    let videoRef = this.videoRefs[idx];
    let videoStatus = await videoRef.getStatusAsync();

    if (videoStatus.positionMillis === videoStatus.durationMillis) {
      videoRef.replayAsync();
      this.setState((state) => {
        let copyState = { ...state };
        copyState.videos[idx].finished = false;
        return { ...copyState };
      });
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
          video.finished = false;
        }
        return video;
      });
      return { ...copyState };
    });
  }

  handleVideoRef(playbackObj) {
    this.videoRefs.push(playbackObj);
  }

  handlePost = (comment, videoIdx) => {
    this.setState((state) => {
      let newState = { ...state };
      newState.videos[videoIdx].comments.unshift(comment);
      return { ...newState };
    });
  };

  handlePlaybackUpdate = async (e, idx) => {
    const { positionMillis, durationMillis, isLoaded, isPlaying } = e;
    if (
      positionMillis &&
      durationMillis &&
      positionMillis === durationMillis &&
      isLoaded &&
      isPlaying
    ) {
      this.setState((state) => {
        let copyState = { ...state };
        copyState.videos[idx].finished = true;
        return { ...copyState };
      });
    }
  };
  componentDidMount() {
    this.setState((state) => {
      let copyState = { ...state };
      copyState.videos[0].playing = true;
      return { ...copyState };
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
          console.log(video.finished);
          return (
            <View style={styles.videosContainer} key={idx}>
              {video.finished && (
                <TouchableOpacity
                  onPress={() => this.handleVideoPress(idx)}
                  style={styles.replayButton}
                >
                  <Image
                    source={replayButton}
                    style={styles.replayButton}
                    resizeMode="center"
                  />
                </TouchableOpacity>
              )}
              <TouchableWithoutFeedback
                onPress={() => this.handleVideoPress(idx)}
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
                  onPlaybackStatusUpdate={(e) =>
                    this.handlePlaybackUpdate(e, idx)
                  }
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

                <CommentModal
                  comments={video.comments}
                  handlePost={this.handlePost}
                  videoIdx={idx}
                />

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
