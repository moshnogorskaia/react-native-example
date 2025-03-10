import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

  return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image source={require('../assets/images/goal.jpg')} style={styles.image} />
            <TextInput
                placeholder="Your goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
                </View>
                <View style={styles.button}>
                    <Button title="Add goal" onPress={addGoalHandler} color='#b180f8' />
                </View>
            </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '100',
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
});
