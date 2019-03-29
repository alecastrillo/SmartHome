import * as React from 'react';
import { Text, FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';


const modes = [
    {
        name: 'Still',
        mode_url: '/still'
    },
    {
      name: 'Fade',
      mode_url: '/wave?fade=5000'
    },
    {
      name: 'Wheel',
      mode_url: '/wave?fade=5000'
    },
    {
        name: 'Party',
        mode_url: '/party?party=5000'
      },
]

export default class ModeSelector extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>Mode</Text>
                <FlatList
                    data={modes}
                    renderItem={({item}) => 
                    <TouchableOpacity style={styles.item}>
                        <View >
                            <Text style={styles.item_text}>{item.name} </Text>
                        </View>
                    </TouchableOpacity>
                    }
                    />
                <Text style={styles.title}>Color</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'normal',
        paddingVertical: 10,
    },

    item: {
        height: 50,
        padding: 10,
    },
    item_text: {
        fontSize: 20,
    }

})