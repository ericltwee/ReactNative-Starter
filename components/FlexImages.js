import React, { Component } from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";

export default class FlexImages extends Component {
  render() {
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <View style={[styles.col2]}>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/mossCharger.png")}
              resizeMode={"contain"}
            />
          </View>
          <View style={[styles.col2]}>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/gruzMother.png")}
              resizeMode={"contain"}
            />
          </View>
        </View>
        <View style={[styles.container]}>
          <View style={[styles.col1]}>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/FalseKnight.png")}
              resizeMode={"contain"}
            />
          </View>
        </View>
        <View style={[styles.container]}>
          <View style={[styles.col2]}>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/flukemarm.png")}
              resizeMode={"contain"}
            />
          </View>
          <View style={[styles.col2]}>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/hornet.png")}
              resizeMode={"contain"}
            />
          </View>
        </View>
        <View style={[styles.container]}>
          <View style={[styles.col3]}>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/SoulMaster.png")}
              resizeMode={"contain"}
            />
          </View>
          <View style={[styles.col2]}>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/MantisLords.png")}
              resizeMode={"contain"}
            />
          </View>
        </View>
        <View style={[styles.container]}>
          <View style={[styles.col2]}>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/brokenVessel.png")}
              resizeMode={"contain"}
            />
          </View>
          <View style={[styles.col2]}>
            <Image
              style={[styles.image]}
              source={require("../assets/HK/crystalGuardian.png")}
              resizeMode={"contain"}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 3,
    backgroundColor: "#404040",
  },
  image: {
    height: 250,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  col1: {
    flex: 1,
    padding: 3,
  },
  col2: {
    flex: 2,
    padding: 2,
  },
  col3: {
    flex: 3,
    padding: 3,
  },
});
