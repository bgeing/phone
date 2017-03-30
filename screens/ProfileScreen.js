import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        tabBar: {
            label: '我的',
            icon: ({ tintColor }) => (
                <Image
                    source={require('./../assets/icons/profile.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>个人中心</Text>
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