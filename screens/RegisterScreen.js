import React, { useReducer, useEffect, useCallback, useState } from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Input from "../components/Input";
import * as authActions from "../store/actions/auth";
import * as userActions from "../store/actions/user";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValues: updatedValues,
      inputValidities: updatedValidities,
    };
  }
  return state;
};

const RegisterScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
      name: "",
      age: "",
      address: "",
    },
    inputValidities: {
      email: false,
      password: false,
      name: false,
      age: false,
      address: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const submitHandler = useCallback(async () => {
    if (!formState.formIsValid) {
      Alert.alert("Wrong input!", "Please check the errors in the form.", [
        { text: "Okay" },
      ]);
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(
        authActions.signup(
          formState.inputValues.email,
          formState.inputValues.password
        )
      );
      await dispatch(
        userActions.createUser(
          formState.inputValues.name,
          formState.inputValues.age,
          formState.inputValues.address
        )
      );
      props.navigation.navigate("Auth");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, [dispatch, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      //   behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <ScrollView>
        <View style={styles.form}>
          <Input
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
          <Input
            id="name"
            label="Name"
            keyboardType="default"
            required
            autoCapitalize="none"
            errorText="Please enter a valid name."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
          <Input
            id="age"
            label="Age"
            keyboardType="decimal-pad"
            required
            autoCapitalize="none"
            errorText="Please enter a valid age."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
          <Input
            id="address"
            label="Address"
            keyboardType="default"
            required
            autoCapitalize="none"
            errorText="Please enter a valid age."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

RegisterScreen.navigationOptions = (navData) => {
  const submitFn = navData.navigation.getParam("submit");
  return {
    headerTitle: "Registration",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    minWidth: 200,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default RegisterScreen;
