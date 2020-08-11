import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Video } from "expo-av";
import { ScrollView } from "react-native-gesture-handler";
import { Asset } from "expo-asset";

const cat = Asset.fromModule(require("./videos/cat.mp4")).uri;
const hockey = Asset.fromModule(require("./videos/hockey.mp4")).uri;
const shark = Asset.fromModule(require("./videos/shark.mp4")).uri;

let videos = [cat, hockey, shark];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      0: false,
      1: false,
      2: false,
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(j, idx) {
    this.setState({ [idx]: !this.state[idx] });
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {videos.map((video, idx) => {
          return (
            <TouchableWithoutFeedback
              onPress={(j) => this.handlePress(j, idx)}
              pagingEnabled={true}
            >
              <Video
                source={{
                  uri: video,
                }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={this.state[idx]}
                style={{ flex: 1 }}
                on
              />
            </TouchableWithoutFeedback>
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
    // alignItems: "center",
    // justifyContent: "center",
  },
});
