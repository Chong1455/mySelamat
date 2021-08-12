import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import * as statusActions from "../store/actions/status";
import * as userActions from "../store/actions/user";

const ProfileScreen = (props) => {
  const myStatus = useSelector((state) => state.status.myStatus).toUpperCase();
  const myUser = useSelector((state) => state.user.myUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statusActions.getStatus());
    dispatch(userActions.fetchUser());
  }, []);
  const name = myUser[0].name;
  const age = myUser[0].age;
  const address = myUser[0].address;

  return (
    <View style={styles.screen}>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Address: {address}</Text>
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
