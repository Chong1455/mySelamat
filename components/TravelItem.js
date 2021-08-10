import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Card from "./Card";

const TravelItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.details}>
              <Text>Location: {props.location}</Text>
              <Text>Name: {props.name}</Text>
              <Text>Phone number: {props.phone}</Text>
              <Text>Date: {props.date}</Text>
              <Text>Time: {props.time}</Text>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 120,
    margin: 15,
  },
  touachable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  details: {
    alignItems: "flex-start",
    height: "15%",
    padding: 10,
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default TravelItem;
