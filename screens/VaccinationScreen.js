import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TextInput,
} from "react-native";
import { Row, Grid } from "react-native-easy-grid";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { RadioButton } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import * as vaccineActions from "../store/actions/vaccine";
import * as userActions from "../store/actions/user";

const VaccinationScreen = (props) => {
  const myVaccine = useSelector((state) => state.vaccine.myVaccine);
  const myUser = useSelector((state) => state.user.myUser);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await dispatch(vaccineActions.getVaccine());
      await dispatch(userActions.fetchUser());
    }
    fetchData();
  }, []);

  const name = myUser[0].name;

  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");

  const submitHandler = async () => {
    const questions = [Q1, Q2, Q3, Q4];
    for (let i = 0; i < questions.length; i++) {
      if (questions[i] === "") {
        Alert.alert("An error occurred!", "Please answer all the questions", [
          { text: "Okay" },
        ]);
        return;
      }
    }

    await dispatch(vaccineActions.createVaccine("yes"));
    Alert.alert(
      "Form submitted successfully",
      "Please refresh the page again to view vaccine details",
      [{ text: "Okay" }]
    );
  };

  if (myVaccine === "no") {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Grid>
            <Row size={80} style={styles.question}>
              <Text style={styles.text}>1. Are you a citizen of Malaysia?</Text>
            </Row>
            <Row size={20} style={styles.answer}>
              <Text style={styles.text}>No</Text>
              <RadioButton
                value="no"
                status={Q1 === "no" ? "checked" : "unchecked"}
                onPress={() => setQ1("no")}
                color="black"
              />
              <Text style={styles.text}>Yes</Text>
              <RadioButton
                value="yes"
                status={Q1 === "yes" ? "checked" : "unchecked"}
                onPress={() => setQ1("yes")}
                color="black"
              />
            </Row>
            <Row size={80} style={styles.question}>
              <Text style={styles.text}>
                2. Do you have any comorbidities? (eg. diabetes, heart disease,
                stroke)
              </Text>
            </Row>
            <Row size={20} style={styles.answer}>
              <Text style={styles.text}>No</Text>
              <RadioButton
                value="no"
                status={Q2 === "no" ? "checked" : "unchecked"}
                onPress={() => setQ2("no")}
                color="black"
              />
              <Text style={styles.text}>Yes</Text>
              <RadioButton
                value="yes"
                status={Q2 === "yes" ? "checked" : "unchecked"}
                onPress={() => setQ2("yes")}
                color="black"
              />
            </Row>
            <Row size={80} style={styles.question}>
              <Text style={styles.text}>
                3. Are you registered with the Department of Social Welfare
                Malaysia as a Disabled Person (OKU)?
              </Text>
            </Row>
            <Row size={20} style={styles.answer}>
              <Text style={styles.text}>No</Text>
              <RadioButton
                value="no"
                status={Q3 === "no" ? "checked" : "unchecked"}
                onPress={() => setQ3("no")}
                color="black"
              />
              <Text style={styles.text}>Yes</Text>
              <RadioButton
                value="yes"
                status={Q3 === "yes" ? "checked" : "unchecked"}
                onPress={() => setQ3("yes")}
                color="black"
              />
            </Row>
            <Row size={80} style={styles.question}>
              <Text style={styles.text}>
                4. Where is your current place of residence?
              </Text>
            </Row>
            <Row size={20} style={styles.answer}>
              <TextInput style={styles.input} onChangeText={setQ4} value={Q4} />
            </Row>
            <Row>
              <View style={styles.buttonContainer}>
                <Button
                  color={Colors.primaryColor}
                  title="Submit"
                  onPress={submitHandler}
                />
              </View>
            </Row>
          </Grid>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Eligible: Yes</Text>
        <Text>Vaccination Details</Text>
        <Text>Date: 13/10/2021</Text>
        <Text>Location: Utar, Kampar</Text>
      </View>
    );
  }
};

VaccinationScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Covid-19 Vaccination",
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
  container: {
    width: "100%",
    height: "100%",
    padding: 25,
  },
  text: {
    fontSize: 20,
    fontFamily: "open-sans",
  },
  question: {
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accentColor,
  },
  answer: {
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "90%",
    marginBottom: 7,
  },
});

export default VaccinationScreen;
