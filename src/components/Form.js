import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

const Form = () => {
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder='cantidad a solicitar'
          keyboardType='numeric'
          style={styles.input}
        />
        <TextInput
          placeholder='Interes %'
          keyboardType='numeric'
          style={[styles.input, styles.inputPercentage]}
        />
      </View>
      <Picker
        // selectedValue={this.state.language}
        // style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          // this.setState({language: itemValue})
          console.log('itemValue', itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      {/* <Picker
onValueChange={(value) => console.log(value)}
items={[
                { etiqueta: 'Fútbol', valor: 'fútbol' },
                { etiqueta: 'Béisbol', valor: 'béisbol' },
                { etiqueta: 'Hockey', valor: 'hockey' },
            ]}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -90,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center'
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 20
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5
  }
})

export default Form;