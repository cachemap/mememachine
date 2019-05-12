/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon 
} from 'native-base';

type Props = {};
export default class App extends Component<Props> {

  onSignIn = () => {
    return;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.welcome}>MemeMachine</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Item style={{backgroundColor: 'white'}} rounded>
              <Icon style={{paddingLeft: 10}}
                    type="FontAwesome"
                    name="at"
                    size={30}
                    color="black" solid/>
              <Input placeholder='Email' autoCapitalize = 'none'/>
            </Item>
            <Item style={{backgroundColor: 'white'}} rounded>
              <Icon style={{paddingLeft: 10}}
                  type="FontAwesome"
                  name="key"
                  size={30}
                  color="black" solid/>
              <Input placeholder='Password' secureTextEntry={true}/>
            </Item>
            <Item style={styles.signInContainer} rounded>
              <TouchableOpacity onPress={this.onSignIn}>
                <Text style={{fontSize: 20}}>Sign In</Text>
              </TouchableOpacity>
            </Item>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: "#BBB",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 25,
  },
  roundContainer: {
    height: 60,
    backgroundColor: "#EEE",
    borderRadius: 75,
    flexDirection: "column",
  },
  topContainer: {
    marginTop: 50,
    height: "15%",
    width: "100%",
    display: "flex",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  bottomContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    paddingHorizontal: 10,
    height: "35%",
    width: "90%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: 'gray'
  },
  signInContainer: {
    marginTop: 40,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC'
  },
  welcome: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
});
