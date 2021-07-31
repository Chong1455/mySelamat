import React from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  Linking,
  StyleSheet,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import CategoryGridTile from "../components/CategoryGridTile";
import Article from "../components/Article";
import Colors from "../constants/Colors";

const SopScreen = (props) => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <CategoryGridTile
          title="SOP TEXT"
          color="#f54242"
          onSelect={() => {
            props.navigation.navigate("SopText");
          }}
        />
        <CategoryGridTile
          title="SOP VIDEO"
          color="#41d95d"
          onSelect={() => {
            props.navigation.navigate("SopVideo");
          }}
        />
      </View>
      <Text style={styles.text}>Articles</Text>
      <Article
        image="https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/15218376/16x9/991/557/fc33c7384ab2ef0d05ceaaa87ccbb1ed/gA/a-cemetery-worker-wearing-a-protective-suit-digs-a-grave-for-the-body-of-a-coronavirus-disease--covid-19--victim-at-a-cemetery-in-shah-alam-2.jpg"
        title="More than 13,000 new COVID-19 cases in Malaysia in 3rd straight day"
      >
        <Button
          color={Colors.primaryColor}
          title="View Details"
          onPress={() => {
            Linking.openURL(
              "https://www.channelnewsasia.com/news/asia/covid-19-malaysia-record-13215-lockdown-mco-klang-valley-testing-15225440"
            );
          }}
        />
      </Article>
      <Article
        image="https://storage.googleapis.com/afs-prod/media/ae5fd393a7934264a35ef1fda7ac31bf/800.jpeg"
        title="Malaysia’s worsening COVID-19 outbreak sparks alarm"
      >
        <Button
          color={Colors.primaryColor}
          title="View Details"
          onPress={() => {
            Linking.openURL(
              "https://apnews.com/article/malaysia-coronavirus-pandemic-business-health-d7c43b2a4a0d9fbfcc464a5102445ee2"
            );
          }}
        />
      </Article>
    </ScrollView>
  );
};

SopScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Standard Operating Procedure",
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
  text: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    paddingTop: 30,
    paddingLeft: 20,
  },
});

export default SopScreen;
