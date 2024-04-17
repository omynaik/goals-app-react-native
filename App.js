import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const pressHandler = (enteredText) => {
    setGoalList((prevGoalList) => [
      ...prevGoalList,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoalList((prevGoalList) => {
      return prevGoalList.filter((goal) => goal.id !== id);
    });
  };

  const showGoalInputHandler = () => {
    setShowModal(true);
  };

  const endGoalInputHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View style={{ padding: 20 }}>
          <Button
            title="Add new goal"
            color="#5e0acc"
            onPress={showGoalInputHandler}
          />
        </View>

        <GoalInput
          addGoal={pressHandler}
          showModal={showModal}
          onCancel={endGoalInputHandler}
        />
        <View style={styles.goalContainer}>
          {/* <ScrollView>
          {goalList.map((goal) => {
            return (
              <View key={goal} style={styles.goalList}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            );
          })}
        </ScrollView> */}
          <FlatList
            data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: "#1e085a",
  },

  goalContainer: {
    flex: 5,
  },
});
