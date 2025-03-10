import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const addGoalHandler = (enteredGoalText) => {
    setGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  return (
    <>
    <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add new goal' color='#a065ec' onPress={startAddGoalHandler}/>
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={itemData => (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            )}
            keyExtractor={item => item.id}
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
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
