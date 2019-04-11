import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class LoginContainer extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;

    return (
      <View style={styles.roundContainer}>
        <Text style={styles.welcome}>
          {text}
        </Text>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  roundContainer: {
    height: 60,
    width: "90%",
    backgroundColor: "#EEE",
    borderRadius: 75,
    flexDirection: "column",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})