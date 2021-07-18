import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SopTextScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Sop Text Screen</Text>
    </View>
  );
};

SopTextScreen.navigationOptions = {
  headerTitle: "SOP Text",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SopTextScreen;
