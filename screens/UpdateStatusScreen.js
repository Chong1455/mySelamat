import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { RadioButton } from "react-native-paper";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const UpdateStatusScreen = (props) => {
  const [Q1, setQ1] = useState();
  const [Q2, setQ2] = useState();
  const [Q3, setQ3] = useState();
  const [Q4, setQ4] = useState();
  const [Q5, setQ5] = useState();
  const [Q6, setQ6] = useState();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Grid>
          <Row size={80} style={styles.question}>
            <Text style={styles.text}>
              1. Are you exhibiting 2 or more symptoms as listed below?
              {"\n"}
              {"\u2022"}Fever
              {"\n"}
              {"\u2022"}Chills
              {"\n"}
              {"\u2022"}Shivering
              {"\n"}
              {"\u2022"}Body ache
              {"\n"}
              {"\u2022"}Headache
              {"\n"}
              {"\u2022"}Sore throat
              {"\n"}
              {"\u2022"}Nausea or vomiting
              {"\n"}
              {"\u2022"}Diarrhea
              {"\n"}
              {"\u2022"}Fatigue
              {"\n"}
              {"\u2022"}Runny nose or nasal congestion
            </Text>
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
              2. Besides the above, are you exhibiting any of the symptoms
              listed below?
              {"\n"}
              {"\u2022"} Cough
              {"\n"}
              {"\u2022"}Difficulty breathing
              {"\n"}
              {"\u2022"}Loss of smell
              {"\n"}
              {"\u2022"}Loss of taste
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
              3. Have you attended any event / areas associated with known
              COVID-19 cluster?
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
              4. Have you travelled to any country outside Malaysia within 14
              days before onset of symptoms?
            </Text>
          </Row>
          <Row size={20} style={styles.answer}>
            <Text style={styles.text}>No</Text>
            <RadioButton
              value="no"
              status={Q4 === "no" ? "checked" : "unchecked"}
              onPress={() => setQ4("no")}
              color="black"
            />
            <Text style={styles.text}>Yes</Text>
            <RadioButton
              value="yes"
              status={Q4 === "yes" ? "checked" : "unchecked"}
              onPress={() => setQ4("yes")}
              color="black"
            />
          </Row>
          <Row size={80} style={styles.question}>
            <Text style={styles.text}>
              5. Have you had close contact to confimred or suspected case of
              COVID-19 within 14 days before onset of illness?
            </Text>
          </Row>
          <Row size={20} style={styles.answer}>
            <Text style={styles.text}>No</Text>
            <RadioButton
              value="no"
              status={Q5 === "no" ? "checked" : "unchecked"}
              onPress={() => setQ5("no")}
              color="black"
            />
            <Text style={styles.text}>Yes</Text>
            <RadioButton
              value="yes"
              status={Q5 === "yes" ? "checked" : "unchecked"}
              onPress={() => setQ5("yes")}
              color="black"
            />
          </Row>
          <Row size={80} style={styles.question}>
            <Text style={styles.text}>
              6. Are you a MOH COVID-19 volunteer in the last 14 days?
            </Text>
          </Row>
          <Row size={20} style={styles.answer}>
            <Text style={styles.text}>No</Text>
            <RadioButton
              value="no"
              status={Q6 === "no" ? "checked" : "unchecked"}
              onPress={() => setQ6("no")}
              color="black"
            />
            <Text style={styles.text}>Yes</Text>
            <RadioButton
              value="yes"
              status={Q6 === "yes" ? "checked" : "unchecked"}
              onPress={() => setQ6("yes")}
              color="black"
            />
          </Row>
          <Row>
            <View style={styles.buttonContainer}>
              <Button
                color={Colors.primaryColor}
                title="Submit"
                onPress={() => {}}
              />
            </View>
          </Row>
        </Grid>
      </View>
    </ScrollView>
  );
};

UpdateStatusScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Update Status",
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
});

export default UpdateStatusScreen;
