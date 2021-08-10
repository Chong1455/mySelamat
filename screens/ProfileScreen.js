import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import * as statusActions from "../store/actions/status";

const ProfileScreen = (props) => {
  const myStatus = useSelector((state) => state.status.myStatus);
  const dispatch = useDispatch();

  const refreshHandler = async () => {
    await dispatch(statusActions.getStatus());
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Refresh"
        color={Colors.primaryColor}
        onPress={refreshHandler}
      />
      <Text>My status: {myStatus}</Text>
    </View>
  );
};

ProfileScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Profile",
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
