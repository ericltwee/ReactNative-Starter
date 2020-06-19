import React, { Component } from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import FlexImages from "./FlexImages";

export default class HKimages extends Component {
  render() {
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <View>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/heroHK.jpg")}
            />
          </View>
          <FlexImages />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  container2: {
    // flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 3,
    backgroundColor: "#404040",
  },
  col1: {
    flex: 1,
    padding: 3,
  },
  col2: {
    flex: 2,
    padding: 3,
  },
  col3: {
    flex: 3,
    padding: 3,
  },
});
