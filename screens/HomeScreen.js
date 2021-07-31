import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>About us</Text>
      <Text style={styles.description}>
        MySelamat is a Covid-19 contact tracing app developed by 4 Computer
        Science students from UTAR to assist users in updating their Covid-19
        status, registering for vaccination, getting to know the SOP and
        checking-in to every location.
      </Text>
      <Text style={styles.title}>Volunteer</Text>
      <Text style={styles.description}>
        Those who wish to volunteer at vaccine centres can visit
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("https://www.myvac.com.my")}
        >
          {" "}
          MyVac{" "}
        </Text>
        to become volunteers in assisting frontliners to administer vaccines to
        the population. This programme is open to all Malaysian citizens who are
        18 years old and above and in good health.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/volunteer.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Donation</Text>
      <Text style={styles.description}>
        Our team's main goal is to help other people to the best of our
        abilities. In this section, we provide links for any volunteers to help
        people who are having difficulties. Volunteers could help others by
        donating food or money. The source of this link is organized by Yayasan
        Food Bank Malaysia.
        {"\n"}
        <Text style={{ fontFamily: "open-sans-bold" }}>
          The secret to happiness is helping others.
        </Text>
        {"\n"}
        Link:
        <Text
          style={{ color: "blue" }}
          onPress={() =>
            Linking.openURL("https://www.foodbankmalaysia.org/donate/")
          }
        >
          {" "}
          https://www.foodbankmalaysia.org/donate/
        </Text>
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/donation.png")}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "MySelamat",
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
  screen: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontFamily: "open-sans-bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    marginVertical: 2,
    fontFamily: "open-sans",
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    width: 215,
    height: 200,
    overflow: "hidden",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
