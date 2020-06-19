import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import Login from "./Login";
import HKimages from "./HKimages";

export default class SwipePages extends Component {
  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        <View style={[styles.container, styles.greenbox]}>
          <Text style={styles.text}>First Page</Text>
        </View>
        <View style={[styles.container, styles.redbox]}>
          <Text style={styles.text}>Second Page</Text>
        </View>
        <View style={[styles.container, styles.bluebox]}>
          <Text style={styles.text}>Third Page</Text>
        </View>
        <View style={[styles.container, styles.darkbox]}>
          <Login />
        </View>
        <View style={[styles.container2]}>
          <HKimages />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  redbox: {
    backgroundColor: "#fd7272",
  },
  bluebox: {
    backgroundColor: "#8adef9",
  },
  greenbox: {
    backgroundColor: "#c7fca1",
  },
  darkbox: {
    backgroundColor: "#000514",
  },
});
