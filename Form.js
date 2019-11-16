import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight, Alert, Share } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 80,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    width: 150,
    fontSize: 60,
    backgroundColor: "#ffffff"
  },
  button: {
    backgroundColor: "#333333",
    marginTop: 10,
    padding: 10,
    height: 80
  }
});

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kilos: ''
        }
    }

    onChangeText = (text) => {
        this.setState({
            kilos: text
        })
    }

    onPress = async () => {
        if (this.state.kilos !== "") {
          try {
            const result = await Share.share({
              message: this.state.kilos
            });

            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                console.log(result.activityType);
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            Alert.alert(error.message);
          }
        } else {
          Alert.alert("Моля въведете килограми!");
        }
    }
    
    render() {
        return (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={text => this.onChangeText(text)}
              value={this.state.kilos}
              maxLength={3}
            />
            <TouchableHighlight onPress={this.onPress} style={styles.button}>
              <Text
                style={{ color: "#ffffff", textAlign: "center", fontSize: 30, lineHeight: 50 }}
              >
                Изпрати
              </Text>
            </TouchableHighlight>
          </View>
        );
    }
}