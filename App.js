import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import { ScrollView } from "react-native-gesture-handler";
import { Asset } from "expo-asset";

const cat = Asset.fromModule(require("./videos/cat.mp4")).uri;
const hockey = Asset.fromModule(require("./videos/hockey.mp4")).uri;
const shark = Asset.fromModule(require("./videos/shark.mp4")).uri;

let videos = [cat, hockey, shark];

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {videos.map((video) => (
        <Video
          source={{
            uri: video,
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          style={{ width: "100%", height: "100%" }}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
