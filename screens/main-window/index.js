import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';

import SettingsIcon from './../../assets/settingsicon.png';
import LightBulb from './../../assets/lightbulbicon.png';
import RGBStrip from './../../assets/rgbstrip.png';

const devices = [
    {
        name: 'lights',
        img: LightBulb,
    },
    {
        name: 'rgb-strip',
        img: RGBStrip
    },
    {
        name: 'settings',
        img: SettingsIcon
    },
]

export default class MainWindow extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: {},
        };
    }
    
    static navigationOptions = {
        title: 'MainWindow'
    }
    
    _onPressItem(name) {
        if (name === 'lights') {
            this.props.navigation.navigate('Light')
        } else if (name === 'rgb-strip'){
            this.props.navigation.navigate('RGBStrip')
        } else if(name === 'settings'){
            alert("This will be a configuration page")
        }
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.gridview}>
                    <FlatList
                        data={devices}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this._onPressItem(item.name)}>
                                <View style={{ flex: 1, flexDirection: 'column', margin: 8, alignItems: 'center', padding: 20, backgroundColor: '#A666' }}>
                                    <Image source={item.img} style={styles.grid_image} />
                                </View>
                            </TouchableOpacity>

                        )}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        
    },
    titlecontainer: {
        justifyContent: 'center',
        backgroundColor: '#00cc99',
        height: 100,
        paddingTop: 0,
    },
    title: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 28,
        fontWeight: 'bold',

    },
    gridview: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 20,
        alignItems: 'center'
    },
    grid_image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 110,
        resizeMode: 'contain'
    },
});