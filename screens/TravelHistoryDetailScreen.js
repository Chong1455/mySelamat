import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import TravelItem from "../components/TravelItem";

const TravelHistoryDetailScreen = (props) => {
  const travelList = useSelector((state) => state.travel.travelList);

  return (
    <FlatList
      data={travelList}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <TravelItem
          location={itemData.item.location}
          name={itemData.item.name}
          phone={itemData.item.phone}
          date={itemData.item.date}
          time={itemData.item.time}
        ></TravelItem>
      )}
    />
  );
};

TravelHistoryDetailScreen.navigationOptions = {
  headerTitle: "History",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TravelHistoryDetailScreen;
