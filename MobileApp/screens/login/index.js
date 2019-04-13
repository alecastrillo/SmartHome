import * as React from 'react';
import { Text, Button, TextInput, View, StyleSheet} from 'react-native';


export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  constructor(props){
    super(props)
    this.state = {
      mailString: '',
      passwordString: '',
      message: ''
    }
  }

  onLoginPressed =() => {
    this.setState({
      message: ''
    })
    if(this.state.mailString === 'user@gmail.com' && this.state.passwordString === '12345'){
      this.setState({
        mailString: ''
      })
      this.setState({
        passwordString: ''
      })
      this.state.passwordString=''
      this.props.navigation.navigate('Main')
    }
    else{
      this.setState({
        message: `Usuario o contraseña incorrectos`
      })
    }
  }

  onMailTextChanged = (event) => {
    this.setState ({
      mailString: event.nativeEvent.text
    })
  }

  onPasswordTextChanged = (event) => {
    this.setState ({
      passwordString: event.nativeEvent.text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Iniciar sesión</Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.mailInput}
            placeholder="Correo Electrónico"
            value={this.state.mailString}
            placeholderTextColor="purple"
            onChange={this.onMailTextChanged}
          />
          <TextInput
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}
            style={styles.passwordInput}
            placeholder="Contraseña"
            value={this.state.passwordString}
            placeholderTextColor="purple"
            onChange={this.onPasswordTextChanged}
          />
          <Button 
            onPress={this.onLoginPressed} 
            color="purple" 
            title="Ingresar" 
          />
        </View>
        
        <Text style={styles.description}>{this.state.message}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  paragraph: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  flowRight: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  mailInput: {
    height: 36,
    width: 250,
    padding: 4,
    margin: 5,
    flexGrow: 5,
    fontSize: 18,
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 8,
    color: '#656565',
  },
  passwordInput: {
    height: 36,
    width: 250,
    padding: 4,
    margin: 5,
    flexGrow: 5,
    fontSize: 18,
    borderColor: "purple",
    borderWidth: 1,
    borderRadius: 8,
    color: '#656565',
  },
});