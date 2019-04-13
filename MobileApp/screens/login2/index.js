import React, { Component } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Wallpaper from './components/Wallpaper';
import ButtonSubmit from './components/ButtonSubmit';
import SignupSection from './components/SignupSection';

export default class MainPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      mailString: '',
      passwordString: ''
    }
  }

  myCallback = (dataFromUsr, dataFromPass) => {
    this.setState({
      mailString: dataFromUsr,
      passwordString: dataFromPass
    })
  }

  render() {
	  return (
			<Wallpaper>
        <Logo />
        <Form callbackFromParent={this.myCallback}/>
        <ButtonSubmit navigation={this.props.navigation} usrData={this.state.mailString} passData={this.state.passwordString}/>
        <SignupSection navigation={this.props.navigation}/>
      </Wallpaper>
	  );
	}
}