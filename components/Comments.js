import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import styles from "../styles";
import {
  faComment,
  faUserCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";

class Comments extends React.Component {
  constructor() {
    super();
    this.state = { modalVisible: false, keyboardFocused: false, comment: "" };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  handleFocus = (e) => {
    this.setState({ keyboardFocused: true });
  };
  handleEndEditing = (e) => {
    this.setState({ keyboardFocused: false });
  };
  handleChange = (e) => {
    console.log(e.nativeEvent.text);
    this.setState({ comment: e.nativeEvent.text });
  };

  render() {
    const { comments } = this.props;
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.innerModalContainer}>
            <View style={styles.modalView}>
              <View style={styles.topRow}>
                <Text
                  style={styles.modalText}
                >{`${comments.length} Comments`}</Text>

                <TouchableWithoutFeedback
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>x</Text>
                </TouchableWithoutFeedback>
              </View>
              <ScrollView
                style={styles.allCommentsContainer}
                showsVerticalScrollIndicator={false}
              >
                {comments.map((comment, idx) => (
                  <View style={styles.singleCommentContainer} key={idx}>
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
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <View
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            width: "75%",
                            paddingTop: 5,
                          }}
                        >
                          <Text style={styles.author}>{comment.author}</Text>
                          <View>
                            <Text>{comment.comment}</Text>
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
                            {comment.likes}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
              <View
                style={
                  this.state.keyboardFocused
                    ? {
                        height: "100%",
                        ...styles.inputContainer,
                      }
                    : {
                        ...styles.inputContainer,
                      }
                }
              >
                <TextInput
                  placeholder={"Add comment..."}
                  style={
                    this.state.keyboardFocused
                      ? styles.focusedInput
                      : styles.regularInput
                  }
                  multiline={true}
                  onFocus={this.handleFocus}
                  onEndEditing={this.handleEndEditing}
                  clearTextOnFocus={true}
                  scrollEnabled={true}
                  keyboardType={"default"}
                  onChange={this.handleChange}
                  clearTextOnFocus={false}
                ></TextInput>
                {this.state.comment.length > 0 && !this.state.keyboardFocused && (
                  <TouchableHighlight>
                    <Text style={styles.postButton}>POST</Text>
                  </TouchableHighlight>
                )}
              </View>
            </View>
          </View>
        </Modal>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <FontAwesomeIcon
            icon={faComment}
            style={{ ...styles.tinyPic, color: "#56fc03" }}
            size={32}
          />
        </TouchableWithoutFeedback>
        <Text style={{ ...styles.tinyPicTxt }}>{comments.length}</Text>
      </View>
    );
  }
}
export default Comments;
