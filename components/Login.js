import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";

import Form from "./Form";

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={"padding"}>
        <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

        <View style={styles.wall}>
          <Image source={require("../assets/logo192.png")} />
          <Text style={styles.title}>App Name</Text>
        </View>
        <View>
          <Form />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wall: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000514",
  },

  title: {
    fontSize: 30,
    color: "#1de8f7",
    fontWeight: "bold",
    textAlign: "center",
  },
});
