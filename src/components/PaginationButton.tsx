import {StyleProp, StyleSheet, Text, TouchableHighlight} from "react-native";
import React from "react";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../styles/Utils";

type Props = {
  onPress: (pageToCheck: number) => void;
  currentPage: number;
  pageToCheck: number; // Ideally, the calling component should check that a toggle should be selected
  text: string;
  selectedToggleStyles: StyleProp<any>;
  borderColor: string;
}

export function PaginationButton(props: Props) {
  const {onPress, currentPage, pageToCheck, text, selectedToggleStyles, borderColor} = props;
  const isSelected = currentPage === pageToCheck;

  return (
    <TouchableHighlight
      style={[
        styles.pageToggle,
        {borderColor: borderColor}, // inline styling is bad but we need to do this as a workaround
        isSelected ? selectedToggleStyles : null,
      ]}
      underlayColor='gray'
      activeOpacity={1}
      onPress={() => onPress(pageToCheck)}>
      <Text
        style={[
          styles.paginationText,
          currentPage === pageToCheck ? styles.selectedToggle : null,
        ]}>
        {text}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  pageToggle: {
    width: DEVICE_WIDTH / 5,
    height: DEVICE_HEIGHT / 20,
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 1,
  },

  paginationText: {
    textAlign: "center",
    color: "black",
  },

  selectedToggle: {
    color: "white",
  },
});
