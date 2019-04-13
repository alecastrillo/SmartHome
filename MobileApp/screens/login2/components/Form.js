import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import UserInput from './UserInput';
import usernameImg from '../../../images/username.png';
import passwordImg from '../../../images/password.png';
import eyeImg from '../../../images/eye_black.png';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      mailString: '',
      passwordString: ''
    };
    this._showPass = this._showPass.bind(this);
  }

  myUserCallback = (dataFromChild) => {
    this.setState({
      mailString: dataFromChild
    })
    this.myCallback(this.state.mailString, this.state.passwordString)
  }

  myPassCallback = (dataFromChild) => {
    this.setState({
      passwordString: dataFromChild
    })
    this.myCallback(this.state.mailString, this.state.passwordString)
  }

  myCallback = (dataFromUsr, dataFromPass) => {
    this.props.callbackFromParent(dataFromUsr, dataFromPass);
  }

  _showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          callbackFromParent={this.myUserCallback}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          callbackFromParent={this.myPassCallback}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this._showPass}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
