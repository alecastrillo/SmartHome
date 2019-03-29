import * as React from 'react';
import { ColorPicker } from  'react-native-status-color-picker';

export default class ColorPickerComponent extends React.Component {

    state = {
        colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"],
        selectedColor: '#F44336',
    };

    onSelect(name) {
        this.setState({
            selectedColor: name
        })
        
    }

    render() {
        return (
        <ColorPicker
          colors={this.state.colors}
          selectedColor={this.state.selectedColor}
          onSelect={() => this.onSelect(this.selectedColor)}
        />
        )
    }
}