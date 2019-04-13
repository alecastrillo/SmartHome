import React from 'react';
import {StyleSheet, Text, View, Slider, Switch, Image} from 'react-native';

import IconLight from '../../assets/lightbulb.png';
import IconLightOff from '../../assets/lightbulbOff.png';

export default class LightsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
      switchValue: false,
      img: IconLightOff,
      lightbulbState: 'Off'
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  toggleSwitch = (value) => {
      this.setState({switchValue: value})
      if(this.state.switchValue === true){
        this.setState({img: IconLightOff})
        this.setState({lightbulbState: 'Off'})
      }else{
        this.setState({img: IconLight})
        this.setState({lightbulbState: 'On'})
      }
   }

  render() {
    const {value} = this.state;
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Light: {this.state.lightbulbState}</Text>
          <Image source={this.state.img} style={styles.image} />
          <Switch
            onValueChange = {this.toggleSwitch}
            value = {this.state.switchValue}/>
          <Text style={styles.text}>Brightness</Text>
          <Text style={styles.slideText}>{String(value)}</Text>
          <Slider
            step={1}
            maximumValue={100}
            onValueChange={this.change.bind(this)}
            value={value}
            style={{marginTop:30}}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  slideText: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
});