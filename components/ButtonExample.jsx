import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';

const ButtonExample = () => {
  const [pressing, setPressing] = useState(false);

  const togglePressing = () => {
    setPressing(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPressIn={togglePressing}
        onPressOut={togglePressing}
        style={{borderRadius: 50}}>
        <View style={styles.button}>
          {pressing ? (
            <Image
              source={require('../assets/idiot.jpg')}
              style={styles.button}
            />
          ) : (
            <Text style={styles.welcome}>
              {pressing ? 'Ты думал здесь что-то будет?' : 'Нажми меня!'}
            </Text>
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {fontSize: 20, textAlign: 'center', margin: 10, color: '#FFFFFF'},
  button: {
    backgroundColor: '#cc9631',
    borderRadius: 30,
    height: 300,
    width: 200,
    justifyContent: 'center',
  },
  buttonTouch: {
    backgroundColor: '#7b917b',
    borderRadius: 50,
    height: 300,
    width: 200,
    justifyContent: 'center',
  },
});

export default ButtonExample;
