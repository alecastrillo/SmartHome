import React, { Component } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Wallpaper from './components/Wallpaper';
import ButtonSubmit from './components/ButtonSubmit';
import SignupSection from './components/SignupSection';

export default class MainPage extends Component {
  render() {
	  return (
			<Wallpaper>
        <Logo />
        <Form />
        <ButtonSubmit navigation={this.props.navigation}/>
        <SignupSection />
      </Wallpaper>
	  );
	}
}