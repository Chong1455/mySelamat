import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from "react-navigation-drawer";
import { Platform, SafeAreaView, Button, View } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import VaccinationScreen from "../screens/VaccinationScreen";
import TravelHistoryScreen from "../screens/TravelHistoryScreen";
import SopScreen from "../screens/SopScreen";
import SopTextScreen from "../screens/SopTextScreen";
import SopVideoScreen from "../screens/SopVideoScreen";
import UpdateStatusScreen from "../screens/UpdateStatusScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const VaccinationNavigator = createStackNavigator(
  {
    Vaccination: VaccinationScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "Covid-19 Vaccination",
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const TravelHistoryNavigator = createStackNavigator(
  {
    TravelHistory: TravelHistoryScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "Travel History",
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const SopNavigator = createStackNavigator(
  {
    Sop: SopScreen,
    SopText: SopTextScreen,
    SopVideo: SopVideoScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "Standard Operating Procedure",
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const UpdateStatusNavigator = createStackNavigator(
  {
    UpdateStatus: UpdateStatusScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "Update Status",
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: HomeNavigator,
    Vaccination: VaccinationNavigator,
    TravelHistory: TravelHistoryNavigator,
    Sop: SopNavigator,
    UpdateStatus: UpdateStatusNavigator,
    Profile: ProfileNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primaryColor,
      labelStyle: {
        marginTop: 20,
      },
    },
    contentComponent: (props) => {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerNavigatorItems {...props} />
            <Button
              title="Logout"
              color={Colors.primaryColor}
              onPress={() => {}}
            />
          </SafeAreaView>
        </View>
      );
    },
  }
);

export default createAppContainer(MainNavigator);
