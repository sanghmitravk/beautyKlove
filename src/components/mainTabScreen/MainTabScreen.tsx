import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { BookAnAppoinment } from '../bookAnAppoinment/BookAnAppoinment';
import { WhatsApp } from '../whatsApp/WhatsApp';
import { Home } from '../home/Home';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

export const MainTabScreen = () => {
    return (

        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen
                name="BookAnAppoinment"
                component={BookAnAppoinment}
                options={{
                    tabBarLabel: 'Book',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-calendar" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="WhatsApp"
                component={WhatsApp}
                options={{
                    tabBarLabel: 'Support',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="logo-whatsapp" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <HomeStack.Screen
            name="Home"
            component={Home}
            options={{
                title: 'Overview',
                headerTitle: () => (
                    <Image source={{ uri: "https://salonathome.in/wp-content/uploads/2021/12/logo_bk-1.png", width: 150, height: 20 }} />
                ),
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        size={25}
                        color="#000"
                        backgroundColor="#fff"
                        onPress={() => navigation.openDrawer()}></Icon.Button>
                ),
                headerRight: () => (
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 0.5 }}>
                            <Icon name="search-outline" color="black" size={26} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Icon name="cart-outline" color="black" size={26} />
                        </View>
                    </View>
                )
            }}
        />
    </HomeStack.Navigator>
);
