import React from 'react';
import {StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Text} from 'react-native';

import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class LightsControl extends React.Component {
    
  constructor() {
      super();
      this.state = {
          dataSource: {},
          lights: []
      };
  }
  
  static navigationOptions = {
      title: 'Lights'
  }

  componentWillMount = async() => {
      await this.getRooms()
  }

  getRooms=() => {
      return fetch('http://192.168.43.174:8000/api/v1/lights')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          rooms: responseJson
        })
      }).catch((error) => {
        this.setState({
          message: "Fallo en la conexion"
        })
      });
  }
  
  onPressItem(state, brightness) {
    this.props.navigation.navigate('Light', {'state': state, 'brightness': brightness});
  }
  
  render() {
      return (
          <View style={styles.container}>
              <View style={styles.grid_view}>
                  <FlatList
                      data={this.state.rooms}
                      renderItem={({ item }) => (
                          <TouchableOpacity onPress={() => this.onPressItem(item.state, item.brightness)}>
                              <View style={{ flex: 1, flexDirection: 'column', margin: 8, justifyContent: 'space-evenly',alignItems: 'flex-end', padding: 20, backgroundColor: '#00b386' }}>
                                  <Text>
                                      {item.lightName} 
                                  </Text>
                              </View>
                          </TouchableOpacity>
                      )}
                      numColumns={2}
                  />
              </View>
          </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'space-evenly',
      flex: 1,
      
  },
  title: {
      textAlign: 'center',
      color: '#00b386',
      fontSize: 28,
      fontWeight: 'bold',
  },
  grid_view: {
      justifyContent: 'space-between',
      flex: 1,
      paddingTop: 20,
      alignItems: 'center'
      
  },
  grid_image: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: DEVICE_WIDTH/2 - 60,
      resizeMode: 'contain'
  },
});