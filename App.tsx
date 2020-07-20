import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
// @ts-ignore
import MyIcon from './src/assets/Icon.svg';
import {MenuComponent} from "./src/components/MenuComponent";
import {PaginationButton} from "./src/components/PaginationButton";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "./src/styles/Utils";
import {MENU_DATA, MenuItem} from "./src/Data";

// Items to be displayed on the sideMenu - ideally this would be dependent upon caller and the props they pass
const menuItemComponents = MENU_DATA.map((item: MenuItem, index) => {
  return <MenuComponent  {...item} key={index} />
});

const App = () => {
  const [currentToggle, setCurrentToggle] = useState(0);                // The Green/Red toggle that has been selected
  const [toggleBorderColor, setToggleBorderColor] = useState('green');  // Used by toggles to display border color
  const [numberOfColumns, setNumberOfColumns] = useState(3);            // changing this will cause NaN to be supplied
  const [boxHeight, setBoxHeight] = useState(500);

  const handleToggleSelection = (page: number) => {
    setToggleBorderColor(page === 0 ? 'green' : 'red');
    setCurrentToggle(page);
  };

  // Boxes to display as a result of user input for columns and size
  const boxes = () => {
    const boxWidth = (mainBodyWidth / 1.25) / numberOfColumns;                   // somewhat dynamically set width based on # of columns
    const boxesToReturn = [];
    for(let i = 0; i < numberOfColumns; i++) {
      boxesToReturn.push(
        <View
          style={[
            styles.mainBox,
            {
              height: boxHeight,
              width: boxWidth,
            }
          ]}
          key={i} />
      );
    }
    return boxesToReturn;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./src/assets/MyAppGreen.png')} // should be dynamic based on color selected
          />
        </View>
        <View style={styles.toggleContainer}>
          <PaginationButton
            onPress={(page: number) => handleToggleSelection(page)}
            currentPage={currentToggle}
            pageToCheck={0}
            text='Green'
            selectedToggleStyles={styles.greenToggle}
            borderColor={toggleBorderColor} />
          <PaginationButton
            onPress={(page: number) => handleToggleSelection(page)}
            currentPage={currentToggle}
            pageToCheck={1}
            text='Red'
            selectedToggleStyles={styles.redToggle}
            borderColor={toggleBorderColor} />
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={require('./src/assets/face.jpg')}
          />
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.sideMenu}>
          <View>
            {menuItemComponents}
          </View>
          <Text style={styles.fixedText}>Fixed to the bottom</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.control}>
            <Text style={styles.controlText}>Columns</Text>
            <TextInput
              style={styles.input}
              onChangeText={number => setNumberOfColumns(parseInt(number))}
              value={numberOfColumns.toString()}
              keyboardType='numeric'
            />
            <Text style={styles.controlText}>Row height</Text>
            <TextInput
              style={styles.input}
              onChangeText={height => setBoxHeight(parseInt(height))}
              value={boxHeight.toString()}
              keyboardType='numeric'
            />
            {/*React Native doesn't use px so this would need to better represented*/}
            <Text style={styles.controlText}>px</Text>
          </View>
          <View style={styles.bodyMain}>
            {boxes()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const profileImageSize = DEVICE_WIDTH / 8;
const sideMenuWidthPercentage = .35;
export const sideMenuWidth = DEVICE_WIDTH * sideMenuWidthPercentage;
const mainBodyWidth = DEVICE_WIDTH * (1 - sideMenuWidthPercentage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },

  logoContainer: {
    height: DEVICE_HEIGHT / 20,
    width: DEVICE_WIDTH / 5,
    alignSelf: "center",
  },

  // Resize image to fit parent container so that it does not get truncated
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },

  toggleContainer: {
    flexDirection: "row",
  },

  greenToggle: {
    backgroundColor: "green"
  },

  redToggle: {
    backgroundColor: "red"
  },

  profileImageContainer: {
  },

  profileImage: {
    width: profileImageSize,
    height: profileImageSize,
    borderRadius: profileImageSize / 1.5,
  },

  main: {
    flex: 1,
    flexDirection: "row",
  },

  sideMenu: {
    width: sideMenuWidth,
    backgroundColor: "gray",
    justifyContent: "space-between",
  },

  fixedText: {
    color: "white",
    textAlign: "center",
  },

  body: {
    width: mainBodyWidth,
  },

  bodyMain: {
    flex: 1,
    width: mainBodyWidth / 1.1,
    marginVertical: 10, // not very dynamic and a workaround due to the above not being static
    backgroundColor: "#eeeeee",
    alignSelf: "center",
    flexDirection: "row",
    padding: 10,
  },

  control: {
    flexDirection: "row",
  },

  controlText: {
    flex: 1,
    fontSize: 12,
    alignSelf: "center",
  },

  input: {
    height: 40,
    // backgroundColor: 'blue',
    fontSize: 14,
    borderBottomWidth: 1,
  },

  mainBox: {
    backgroundColor: 'green',
    marginRight: 5,
  },
});

export default App;
