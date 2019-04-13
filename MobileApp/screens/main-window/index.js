import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';
import SettingsIcon from './../../assets/settingsicon.png';
import LightBulb from './../../assets/lightbulbicon.png';
import RGBStrip from './../../assets/rgbstrip.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
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
        title: 'Connected devices'
    }
    
    onPressItem(name) {
        if (name === 'lights') {
            this.props.navigation.navigate('Lights');
        } else if (name === 'rgb-strip'){
            this.props.navigation.navigate('RGBStrip');
        } else if(name === 'settings'){
            alert("This will be a configuration page");
        }
        
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.grid_view}>
                    <FlatList
                        data={devices}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this.onPressItem(item.name)}>
                                <View style={{ flex: 1, flexDirection: 'column', margin: 8, justifyContent: 'space-evenly',alignItems: 'flex-end', padding: 20, backgroundColor: '#00b386' }}>
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