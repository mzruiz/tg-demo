import {StyleProp, StyleSheet, Text} from "react-native";
import React from "react";

type TruncatedTextProps = {
  text: string;
  style: StyleProp<any>,
}

export const TruncatedText = ({text, style}: TruncatedTextProps) => {
  return (
    <Text
      numberOfLines={1}
      ellipsizeMode="tail"
      style={[style, styles.truncatedText]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  truncatedText: {
    fontSize: 12,
    width: 50,
    color: "white",
  },
})
