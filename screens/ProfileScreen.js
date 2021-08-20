import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import * as statusActions from "../store/actions/status";
import * as userActions from "../store/actions/user";
import Colors from "../constants/Colors";

const ProfileScreen = (props) => {
  var myStatus = useSelector((state) => state.status.myStatus);
  const myUser = useSelector((state) => state.user.myUser);
  const dispatch = useDispatch();

  async function fetchData() {
    await dispatch(statusActions.getStatus());
    await dispatch(userActions.fetchUser());
  }

  useEffect(() => {
    fetchData();
  }, []);

  try {
    var name = myUser[0].name;
    var age = myUser[0].age;
    var address = myUser[0].address;
    myStatus = myStatus.toUpperCase();
  } catch (err) {
    fetchData();
  }

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.name}>Name:</Text>
          </View>
          <View>
            <Text style={styles.border}>{name}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.age}>Age:</Text>
          </View>
          <View>
            <Text style={styles.border}>{age}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.address}>Address:</Text>
          </View>
          <View>
            <Text style={styles.border}>{address}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.risk}>Risk:</Text>
          </View>
          <View>
            <Text style={styles.border}>{myStatus}</Text>
          </View>
        </View>
      </View>
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
    backgroundColor: Colors.accentColor,
  },
  textContainer: {
    margin: 40,
  },
  border: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 25,
    fontFamily: "open-sans",
    width: 200,
    padding: 3,
    marginLeft: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 25,
    fontFamily: "open-sans",
    paddingLeft: 25,
  },
  age: {
    paddingLeft: 51,
    fontSize: 25,
    fontFamily: "open-sans",
  },
  address: {
    fontSize: 25,
    fontFamily: "open-sans",
  },
  risk: {
    paddingLeft: 47,
    fontSize: 25,
    fontFamily: "open-sans",
  },
});

export default ProfileScreen;
