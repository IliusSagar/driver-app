import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreenTwo({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Two Screen</Text>

        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
};

