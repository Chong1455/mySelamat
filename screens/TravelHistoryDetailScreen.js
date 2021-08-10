import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import TravelItem from "../components/TravelItem";
import * as travelActions from "../store/actions/travel";

const TravelHistoryDetailScreen = (props) => {
  const travelList = useSelector((state) => state.travel.travelList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(travelActions.fetchTravels());
  }, [dispatch]);

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
