import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const inputTextHandler = (text) => {
    setEnteredText(text);
  };

  const goalHandler = () => {
    props.addGoal(enteredText);
    setEnteredText("");
    props.onCancel();
  };

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textHolder}
          placeholder="Enter your goal here"
          onChangeText={inputTextHandler}
          value={enteredText}
        ></TextInput>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={goalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 8,
    alignItems: "center",
    backgroundColor: "#311b6b",
    paddingBottom: 50,
  },
  textHolder: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#120438",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 25,
  },
});

export default GoalInput;
