import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class ChemistryCourseScreen extends React.Component {
    static navigationOptions = {
        tabBar: {
            label: '化学',
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>化学课程</Text>
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