import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SopVideoScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Sop Video Screen</Text>
    </View>
  );
};

SopVideoScreen.navigationOptions = {
  headerTitle: "SOP Video",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SopVideoScreen;
