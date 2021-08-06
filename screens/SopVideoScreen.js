import React from "react";
import { ScrollView, Button, StyleSheet, Linking } from "react-native";

import Article from "../components/Article";
import Colors from "../constants/Colors";

const SopVideoScreen = (props) => {
  return (
    <ScrollView>
      <Article
        image="https://i.ytimg.com/vi/66KSu2PQ-Mg/maxresdefault.jpg"
        title="Animated SOP for school's reopening"
      >
        <Button
          color={Colors.primaryColor}
          title="See Video"
          onPress={() => {
            Linking.openURL(
              "https://www.youtube.com/watch?v=66KSu2PQ-Mg&ab_channel=ChromosomeChannel"
            );
          }}
        />
      </Article>
      <Article
        image="https://i.ytimg.com/vi/Ji0TR6Q-V-U/mqdefault.jpg"
        title="Cegah COVID-19: Elakkan 3C, Amalkan 3W"
      >
        <Button
          color={Colors.primaryColor}
          title="See Video"
          onPress={() => {
            Linking.openURL("https://www.youtube.com/watch?v=Ji0TR6Q-V-U");
          }}
        />
      </Article>
    </ScrollView>
  );
};

SopVideoScreen.navigationOptions = {
  headerTitle: "SOP Video",
};

export default SopVideoScreen;
