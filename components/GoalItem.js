import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  const deleteItem = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <View style={styles.goalList}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteItem}
        // below code for iOS as alternative to android_ripple
        // style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalList: {
    margin: 4,
    padding: 4,
    backgroundColor: "#9932cc",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "black",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
