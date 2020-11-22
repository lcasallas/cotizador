import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';

const ViewExample = () => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [isVisible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <Text>{value2}</Text>
        <Button title="comment" onPress={() => setVisible(true)} />
      </ScrollView>
      { isVisible && (
        <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize inSafeAreaView>
          {({ isKeyboardVisible }) => (
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Write your message"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                multiline={true}
                value={value}
                onChangeText={(text) => setValue(text)}
                autoFocus={true}
              />
              {isKeyboardVisible && (
                <Button
                  style={styles.textInputButton}
                  title="Send"
                  onPress={() => {
                    setValue2(value);
                    setVisible(false);
                  }}
                />
              )}
            </View>
          )}
        </KeyboardAccessoryView>
      )}
        
    </SafeAreaView>
  );
};

ViewExample.navigationOptions = {
  title: 'View Example',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputView: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CCC',
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: 'top',
  },
  textInputButton: {
    flexShrink: 1,
  },
});

export default ViewExample;


// import React from 'react';
// import { View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// import Form from './src/components/Form';

// import colors from './src/utils/colors';

// export default function App () {
//   return(
//     <>
//       <StatusBar barStyle="light-content" />
//       <SafeAreaView style={styles.safeArea}>
//         <Text style={styles.title}>Cotizador de prestamso</Text>
//         <Form />
//       </SafeAreaView>
//       <View>
//         <Text>Resultado</Text>
//       </View>
//       <View>
//         <Text>Footer</Text>
//       </View>
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     backgroundColor: colors.PRIMARY_COLOR,
//     height: 200,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     alignItems: 'center'
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 15
//   }
// });