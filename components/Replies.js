import React from "react";
import styles from "../styles";
import { View, Text } from "react-native";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Replies = (props) => {
  const { comment, toggleReplies, commentIdx } = props;
  return (
    <View>
      <ScrollView
        style={styles.allCommentsContainer}
        showsVerticalScrollIndicator={false}
      >
        {comment.replies.map((reply, replyIdx) => (
          <View style={styles.singleCommentContainer} key={replyIdx}>
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{
                ...styles.tinyPic,
                color: "black",
                margin: 0,
                textAlign: "center",
              }}
              size={20}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "75%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    paddingTop: 5,
                  }}
                >
                  <Text style={styles.author}>{reply.author}</Text>
                  <View>
                    <Text>{reply.comment}</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    ...styles.tinyPic,
                    color: "black",
                    margin: 0,
                  }}
                  size={10}
                />
                <Text
                  style={{
                    ...styles.tinyPicTxt,
                    color: "black",
                    margin: 0,
                  }}
                >
                  {reply.likes}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableHighlight
        activeOpacity={0}
        underlayColor={"white"}
        onPress={() => toggleReplies(commentIdx)}
      >
        <Text style={styles.viewReplies}>Hide ^</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Replies;
