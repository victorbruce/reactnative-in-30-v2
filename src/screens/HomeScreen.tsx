import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Lessons"
        onPress={() => navigation.navigate('Lesson')}
      />
    </View>
  );
}

export default HomeScreen;
