import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Задай килограми за</Text>
      <Text>настройка на кантара</Text>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffbc00",
    alignItems: "center",
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  }
});
