import React, { Component } from "react";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";

import Form from "./Form";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.wall}>
        <StatusBar barStyle="light-content" backgroundColor="#1de8f7" />
        <View style={styles.container}>
          <Image source={require("../assets/logo192.png")} />
          <Text style={styles.title}>App Name</Text>
        </View>
        <View style={styles.image}>
          <Form />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wall: {
    backgroundColor: "#000514",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  title: {
    color: "#1de8f7",
    fontWeight: "bold",
  },
});
