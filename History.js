import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function History({route}) {
    
  return (
    <View>
        <View>
          <Text style={{fontSize: 30, textAlign: 'center'}}>History:</Text>
          <FlatList
          data={route.params}
          renderItem={({item}) => <Text style={{fontSize: 20, textAlign: 'center'}}>{item}</Text> }
          />
          </View>
    </View>
  );
  }

  const historyStyle = StyleSheet.create({
    container2: {
      flex:5, 
      alignItems: 'center', 
      justifyContent: 'flex-start',
  
    }
  });
