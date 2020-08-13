import {
  Modal,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import styles from "../styles";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

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
          <View style={styles.commentContainer}>
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
