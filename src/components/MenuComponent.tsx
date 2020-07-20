import {MenuItem} from "../Data";
import {StyleProp, StyleSheet, Text, View} from "react-native";
// @ts-ignore
import MyIcon from "../assets/Icon.svg";
import React from "react";
import {DEVICE_HEIGHT} from "../styles/Utils";
import {TruncatedText} from "./TruncatedText";

// Side Menu for main page
export const MenuComponent = (item: MenuItem) => {
  return (
    <View style={styles.menuItem}>
      <MyIcon height={30} width={30}/>
      <View style={styles.menuItemMain}>
        <TruncatedText text={item.title} style={styles.title}/>
        <TruncatedText text={item.subtitle} style={styles.subtitle}/>
      </View>
      <TruncatedText text={item.detail} style={styles.detail}/>
    </View>
  )
}

const styles = StyleSheet.create({
  menuItem: {
    height: DEVICE_HEIGHT / 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d5d5d5',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  menuItemMain: {

  },

  title: {
    fontSize: 14,
  },

  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
  },

  detail: {
    fontSize: 10,
  }
});
