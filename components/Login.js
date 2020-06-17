import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require("../assets/logo192.png")} />
        </View>
        <View style={styles.image}>
          <Text style={styles.text}>asdfgh</Text>
          <Text style={styles.text}>asdfgh</Text>
          <Text style={styles.text}>asdfgh</Text>
          <Text style={styles.text}>asdfgh</Text>
          <Text style={styles.text}>asdfgh</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
