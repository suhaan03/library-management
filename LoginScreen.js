import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as firebase from 'firebase';
export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = { EmailId: null, Password: null };
  }

  login = async (e, p) => {
    if (e && p) {
      try {
        const Respone = await firebase.auth().signInWithEmailAndPassword(e, p);
        if (Respone) {
          this.props.navigation.navigate('Transaction');
        }
      } catch (error) {
        if (error.code == 'auth/user-not-found') {
          Alert.alert('user does not exist');
          console.log("Alert")
        }
        else if (error.code == 'auth/invalid-email'){
          Alert.alert('invalid user')
          console.log("Alert")
        }
      }
    }
  };
  render() {
    return (
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 200,
          }}>
          <TextInput
            style={{
              width: 120,
              height: 20,
              borderColor: 'black',
              borderWidth: 2,
            }}
            keyboardType="email-address"
            placeholder="LoginId"
            onChangeText={(text) => {
              this.setState({
                EmailId: text,
              });
            }}
          />

          <TextInput
            style={{
              width: 120,
              height: 20,
              marginTop: 10,
              borderColor: 'black',
              borderWidth: 2,
            }}
            secureTextEntry={true}
            keyboardType="email-address"
            placeholder="Password"
            onChangeText={(text) => {
              this.setState({
                Password: text,
              });
            }}
          />

          <TouchableOpacity style={{ backgroundColor: 'red', marginTop: 10 }} onPress={()=>{this.login(this.state.EmailId,this.state.Password)}}>
            <Text> Sumbit </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
