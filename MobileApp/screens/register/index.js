import * as React from 'react';
import { Text, Button, TextInput, View, StyleSheet} from 'react-native';


export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'Registro'
  }

  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      mailString: '',
      passwordString: '',
      message: '',
      data: ''
    }
  }

  onLoginPressed =async() => {
    this.setState({
      message: ''
    })
    await this.insertUser(this.state.mailString, this.state.passwordString)
    if(this.state.message===''){
      alert("Usuario Insertado")
    }
        //this.props.navigation.navigate('Main')
  }

  insertUser=(usr, pass) => {
    return fetch('http://192.168.43.174:8000/api/v1/users', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify( {
        "username": usr,
        "password": pass
     })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        data: responseJson
      })
    }).catch((error) => {
      console.log(error)
      this.setState({
        message: "Fallo en la conexion"
      })
      alert(this.state.message)
    });
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
        <Text style={styles.paragraph}>Registrar Usuario</Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.mailInput}
            placeholder="Usuario"
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