import React, { useReducer, useEffect, useCallback, useState } from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";

import Input from "../components/Input";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import * as authActions from "../store/actions/auth";

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

const AuthScreen = (props) => {
  const [loginIsLoading, setLoginIsLoading] = useState(false);
  const [signUpIsLoading, setSignUpIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const signupHandler = async () => {
    setSignUpIsLoading(true);
    try {
      await dispatch(
        authActions.signup(
          formState.inputValues.email,
          formState.inputValues.password
        )
      );
      props.navigation.navigate("Module");
    } catch (err) {
      setError(err.message);
      setSignUpIsLoading(false);
    }
  };

  const loginHandler = async () => {
    setLoginIsLoading(true);
    try {
      await dispatch(
        authActions.login(
          formState.inputValues.email,
          formState.inputValues.password
        )
      );
      props.navigation.navigate("Module");
    } catch (err) {
      setError(err.message);
      setLoginIsLoading(false);
    }
  };

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
      <View style={styles.screen}>
        <Card style={styles.authContainer}>
          <ScrollView>
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
            <View style={styles.buttonContainer}>
              {loginIsLoading ? (
                <ActivityIndicator size="small" color={Colors.primaryColor} />
              ) : (
                <Button
                  title="Login"
                  color={Colors.primaryColor}
                  onPress={loginHandler}
                />
              )}
            </View>
            <View style={styles.buttonContainer}>
              {signUpIsLoading ? (
                <ActivityIndicator size="small" color={Colors.primaryColor} />
              ) : (
                <Button
                  title="Register"
                  color="#C2185B"
                  onPress={signupHandler}
                />
              )}
            </View>
          </ScrollView>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Welcome to MySelamat System",
  headerTitleStyle: {
    textAlign: "center",
    flex: 1,
    fontFamily: "open-sans-bold",
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accentColor,
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

export default AuthScreen;
