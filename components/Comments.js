import {
  Modal,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import styles from "../styles";
import { faComment, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView } from "react-native-gesture-handler";

class Comments extends React.Component {
  constructor() {
    super();
    this.state = { modalVisible: false };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
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
              <ScrollView style={styles.allCommentsContainer}>
                {comments.map((comment) => (
                  <View style={styles.singleCommentContainer}>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      style={{
                        ...styles.tinyPic,
                        color: "black",
                        margin: 0,
                      }}
                      size={16}
                    />
                    <View>
                      <Text style={styles.author}>{comment.author}</Text>
                      <Text>{comment.comment}</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
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
