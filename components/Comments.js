import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import React from "react";
import styles from "../styles";
import {
  faComment,
  faUserCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import Replies from "./Replies";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      keyboardFocused: false,
      comment: "",
      repliesOpen: new Array(this.props.comments.length).fill(false),
    };
    this.textInput = React.createRef();
    this.scrollView = React.createRef();
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
    this.setState({ comment: e.nativeEvent.text });
  };
  handlePostPress = () => {
    const { handlePost, videoIdx } = this.props;
    let comment = this.state.comment;

    this.setState(
      (state) => {
        let newState = { ...state };
        newState.comment = "";
        newState.repliesOpen.unshift(false);
        newState.repliesOpen = newState.repliesOpen.map(() => false);
        return { ...newState };
      },
      () =>
        handlePost(
          {
            author: "Anonymous",
            comment,
            likes: 0,
            replies: [],
          },
          videoIdx
        )
    );

    this.scrollView.current.scrollTo({ x: 0, y: 0 });
    this.textInput.current.clear();
  };

  toggleReplies = (commentIdx) => {
    this.setState((state) => {
      let newState = { ...state };
      newState.repliesOpen[commentIdx] = !newState.repliesOpen[commentIdx];
      return newState;
    });
  };

  render() {
    const { comments } = this.props;
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
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
                ref={this.scrollView}
                style={styles.allCommentsContainer}
                showsVerticalScrollIndicator={false}
              >
                {comments.map((comment, commentIdx) => (
                  <View style={styles.singleCommentContainer} key={commentIdx}>
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
                            width: "75%",
                            paddingTop: 5,
                          }}
                        >
                          <Text style={styles.author}>{comment.author}</Text>
                          <View>
                            <Text>{comment.comment}</Text>
                          </View>
                          {!this.state.repliesOpen[commentIdx] ? (
                            <TouchableHighlight
                              activeOpacity={0}
                              underlayColor={"white"}
                              onPress={() => this.toggleReplies(commentIdx)}
                            >
                              <Text style={styles.viewReplies}>
                                View replies({comment.replies.length})
                              </Text>
                            </TouchableHighlight>
                          ) : (
                            <Replies
                              comment={comment}
                              toggleReplies={this.toggleReplies}
                              commentIdx={commentIdx}
                            />
                          )}
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
                  ref={this.textInput}
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
                  <TouchableHighlight onPress={this.handlePostPress}>
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
