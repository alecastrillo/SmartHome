import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Text,
} from 'react-native';
import Dimensions from 'Dimensions';
import SettingsIcon from './../../assets/settingsicon.png';
import LightBulb from './../../assets/lightbulbicon.png';
import RGBStrip from './../../assets/rgbstrip.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const rooms = [
    {
        name: 'Living Room',
        access: true,
        devices: {
            device1: {
                id: 1,
                type: 'light',
                state: {
                    brightness: 50,
                    state: 'on',
                }
            },
            device2: {
                id: 2,
                type: 'light',
                state: {
                    brightness: 70,
                    state: 'on',
                }
            },
            device3: {
                id: 3,
                type: 'rbg-strip',
                state: {
                    mode: 'rainbow',
                    state: 'on',
                }
            }
        },
    },
    {
        name: 'BathRoom',
        access: true,
        devices: {
            device1: {
                id: 1,
                type: 'light',
                state: {
                    brightness: 50,
                    state: 'on',
                }
            },
        },
    },
    {
        name: 'BedRoom1',
        access: true,
        devices: {
            device1: {
                id: 1,
                type: 'light',
                state: {
                    brightness: 50,
                    state: 'on',
                }
            },
        },
    },
    {
        name: 'BedRoom2',
        access: false,
        devices: {
            device1: {
                id: 1,
                type: 'light',
                state: {
                    brightness: 50,
                    state: 'off',
                }
            },
            device2: {
                id: 1,
                type: 'rgb-strip',
                state: {
                    mode: 'rainbow',
                    state: 'off',
                }
            },
        },
    },
]


export default class RoomsTab extends Component {
    
    constructor() {
        super();
        this.state = {
            dataSource: {},
        };
    }
    
    static navigationOptions = {
        title: 'Rooms'
    }
    
    _onPressItem(name) {
        if (name === 'lights') {
            this.props.navigation.navigate('Light');
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
                        data={rooms}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this._onPressItem(item.name)}>
                                <View style={{ flex: 1, flexDirection: 'column', margin: 8, justifyContent: 'space-evenly',alignItems: 'flex-end', padding: 20, backgroundColor: '#00b386' }}>
                                    <Text>
                                        {item.name} 
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