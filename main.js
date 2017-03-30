import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator, TabView } from 'react-navigation';
import ExerciseScreen from './screens/ExerciseScreen';
import CollectionScreen from './screens/CollectionScreen';
import ProfileScreen from './screens/ProfileScreen';
import RecommendedScreen from './screens/RecommendedScreen';
import ChineseCourseScreen from './screens/ChineseCourseScreen';
import BiologyCourseScreen from './screens/BiologyCourseScreen';
import MathCourseScreen from './screens/MathCourseScreen';
import EnglishCourseScreen from './screens/EnglishCourseScreen';
import ChemistryCourseScreen from './screens/ChemistryCourseScreen';
import PhysicsCourseScreen from './screens/PhysicsCourseScreen';

const HomeScreen = TabNavigator({
    Recommend: { screen: RecommendedScreen },
    Chinese: { screen: ChineseCourseScreen },
    Biology: { screen: BiologyCourseScreen },
    Math : { screen: MathCourseScreen },
    English: { screen: EnglishCourseScreen },
    Chemistry: { screen: ChemistryCourseScreen },
    Physics: { screen: PhysicsCourseScreen },

}, {
        tabBarComponent: TabView.TabBarTop,
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            scrollEnabled: true,
            labelStyle: {
                fontSize: 15,
            },
            tabStyle: {
                width: 75
            },
            style: {
                backgroundColor: '#6E6EFF',
                paddingTop: 10,
            },
        }
    });

HomeScreen.navigationOptions = {
    tabBar: {
        label: '首页',
        icon: ({ tintColor }) => (
            <Image
                source={require('./assets/icons/home.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    }
};

const App = TabNavigator({
    Home: {
        screen: HomeScreen
    },
    Exercise: {
        screen: ExerciseScreen
    },
    Collection: {
        screen: CollectionScreen
    },
    Profile: {
        screen: ProfileScreen
    }
});

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

Expo.registerRootComponent(App);
