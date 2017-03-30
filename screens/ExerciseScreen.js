import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ExerciseScreen extends React.Component {
    static navigationOptions = {
        tabBar: {
            label: '做题',
            icon: ({ tintColor }) => (
                <Image
                    source={require('./../assets/icons/test.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>来做题吧！</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 26,
        height: 26,
    },
});