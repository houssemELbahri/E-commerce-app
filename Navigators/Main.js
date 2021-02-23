import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Stacks
import HomeNavigator from './HomeNavigator';


const Tab = createBottomTabNavigator();

const Main = () => {

    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: "#e91e63"
            }}
        >
            <Tab.Screen 
                name='Home'
                component={HomeNavigator} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="home"
                            style={{position: "relative"}}
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name='Cart'
                component={HomeNavigator} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="shopping-cart"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name='Admin'
                component={HomeNavigator} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="cog"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name='User'
                component={HomeNavigator} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name="user"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Main;