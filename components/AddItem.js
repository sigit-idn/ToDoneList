import React from 'react';
import {DateTimePicker, StyleSheet, Text, TextInput, View} from 'react-native';

const AddItem = () => {
  return (
    <View style={styles.AddItem}>
      <TextInput style={styles.TextInput} placeholder="Title" />
      <TextInput style={styles.TextInput} placeholder="Subtitle" />
    </View>
  );
};

const styles = StyleSheet.create({
  AddItem: {
    // backgroundColor: '#3333',
    width: '95%',
    padding: 10,
    // height: '60%',
    // position: 'absolute',
    // bottom: '50%',
    // right: '50%',
    // transform: [{translateX: 50}],
  },
  TextInput: {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  },
});

export default AddItem;
