import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

export default function CalculatorHome({navigation}) {
    const [firstNum, setFirstNum] = React.useState();
    const [secondNum, setSecondNum] = React.useState();
    const [result, setResult] = React.useState();
    const[history, setHistory] = React.useState([]);
    let total;
    const alert = "Type a number to both fields, please"

    const add = () => {
        if(!firstNum || !secondNum) {
            Alert.alert(alert)
        } else {
        total = parseInt(firstNum) + parseInt(secondNum)
        setResult(`Result: ${total}`)
        setHistory([...history, firstNum + " + " + secondNum + " = " + total])
        setFirstNum();
        setSecondNum();
        }
    }

    const decrement = () => {
        if(!firstNum || !secondNum) {
            Alert.alert(alert)
        } else {
        total = parseInt(firstNum) - parseInt(secondNum)
        setResult(`Result: ${total}`)
        setHistory([...history, firstNum + " - " + secondNum + " = " + total])
        setFirstNum();
        setSecondNum();
        }
    }
    
  return (
    <View style={{flex: 2}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Calculator</Text>
        <View style={styles.container}>
        <Text>{result}</Text>
        <TextInput
            style={{width: 210, borderColor: 'gray', borderWidth: 1}}
            keyboardType='numeric'
            value={firstNum}
            onChangeText={text => setFirstNum(text)}/>
        <TextInput
            style={{width: 210, borderColor: 'gray', borderWidth: 1}}
            keyboardType='numeric'
            value={secondNum}
            onChangeText={text => setSecondNum(text)}/>
        </View>
      <View style={buttonStyles.container1}>
        <Button
        onPress={add}
        title=" + "/>
        <Button
        onPress={decrement}
        title=" - "/>
        <Button
        title="History"
        onPress={() => navigation.navigate('History', history)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10
    
  },
});

const buttonStyles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft: 70,
    marginRight: 70
  },
});