import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import * as travelActions from "../store/actions/travel";
import Colors from "../constants/Colors";

const TravelHistoryScreen = (props) => {
  const dispatch = useDispatch();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const myArr = data.split(",");
    const location = myArr[0];
    const name = myArr[1];
    const phone = myArr[2];
    const date = myArr[3];
    const time = myArr[4];
    dispatch(travelActions.createTravel(location, name, phone, date, time));
    alert(
      `Location: ${location}\nName: ${name}\nPhone number: ${phone}\nDate: ${date}\nTime: ${time}`
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.buttonContainer}>
        <Button
          color={Colors.primaryColor}
          title="History"
          onPress={() => {
            props.navigation.navigate("TravelHistoryDetail");
          }}
        />
      </View>
      {scanned && (
        <View style={{ padding: 35 }}>
          <Button
            title={"Tap to Scan Again"}
            color={Colors.primaryColor}
            onPress={() => setScanned(false)}
          />
        </View>
      )}
    </View>
  );
};

TravelHistoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Travel History",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flex: 1,
    alignSelf: "flex-end",
    padding: 35,
  },
  barCodeView: {
    width: "100%",
    height: "50%",
    marginBottom: 40,
  },
});

export default TravelHistoryScreen;
