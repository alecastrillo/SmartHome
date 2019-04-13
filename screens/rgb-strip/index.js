import * as React from 'react';
import { View } from 'react-native';
import ColorPickerComponent from './components/color-picker';
import ModeSelector from './components/mode-selector';

export default class RGBPage extends React.Component {
    render() {
        return (
            <View>
                <ModeSelector/>
                <ColorPickerComponent/>
            </View>
        )
    }
}