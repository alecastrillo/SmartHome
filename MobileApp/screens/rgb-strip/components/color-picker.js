import * as React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { SwatchesPicker, HuePicker  } from 'react-color';
import { ColorPicker } from 'react-native-status-color-picker';
import { ColorWheel } from 'react-native-color-wheel';

export default class ColorPickerComponent extends React.Component {

    state = {
        colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"],
        selectedColor: '#F44336',
    };

    _onSelect(name) {
        this.setState({
            selectedColor: name
        })
        
    }

    _onChange(color){

    }

    render() {  
        return (
            <View>
                <ColorWheel
                initialColor="#00ee00"
                onColorChange={color => console.log({color})}
                onColorChangeComplete={color => _onChange(color)}
                style={{ marginLeft: 20, padding: 40, height: 200, width: 200 }}
                />
                
            </View>
        )
    }
}
/*
<ColorPicker
                colors={this.state.colors}
                selectedColor={this.state.selectedColor}
                onSelect={() => this._onSelect(this.selectedColor)}
                />
                */