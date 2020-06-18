import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="red"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="blue"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Ckick Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    padding: 10,
    margin: 15,
    borderRadius: 15,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#61DBFB",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 15,
    borderRadius: 15,
  },
});
