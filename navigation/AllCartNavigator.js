import React, { useState } from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator, } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator, } from '@react-navigation/material-top-tabs';

import CollapseExample from '../screens/CollapseExample';
import CollapseMainExample from '../screens/CollapseMainExample';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../templates/Colors';
import ArmyScreen from '../screens/ArmyScreen';
import SummaryOrderScreen from '../screens/SummaryOrderScreen';
import TeachOrderScreen from '../screens/TeachOrderScreen';
import AllOrderScreen from '../screens/AllOrderScreen';
import TurnOrderScreen from '../screens/TurnOrderScreen';
import TurnOrderScreenTH from '../screens/TurnOrderScreenTH';
import ActionOrderScreen from '../screens/ActionOrderScreen';
import ActionOrderScreenTH from '../screens/ActionOrderScreenTH';
import ExplainStat from '../screens/teaching/ExplainStat';
import MoveTutorialScreen from '../screens/teaching/MoveTutorialScreen'
import AllTutorialScreen from '../screens/teaching/AllTutorialScreen';
import * as Linking from 'expo-linking';

const prefix = Linking.makeUrl('/');
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const AllArmyTabNavigator = (props) => {
    return (

        <Stack.Navigator
            initialRouteName="Army"
            
        >
            <Stack.Screen
                name="Army"
                component={ArmyScreen}
                options={{ title: 'My app' }}
                initialParams={{ armyId: 'pano' }}
            />
            <Stack.Screen
                name="AllCartScreen"
                component={CollapseMainExample}
                options={{ title: 'My app' }}
            />
        </Stack.Navigator>
    );
}

const AllSelectedTabNavigator = (props) => {
    return (

        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="Cart"
                component={CollapseExample}
                options={{ title: 'cart' }}
            />
        </Stack.Navigator>
    );
}

const AllTutorialTabNavigator = (props) => {
    return (

        <Stack.Navigator
            initialRouteName="All"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="All"
                component={AllOrderScreen}
                options={{ title: 'All' }}
            />
            <Stack.Screen
                name="AllTutorial"
                component={AllTutorialScreen}
                options={{ title: 'AllTutorial' }}
            />
            <Stack.Screen
                name="ExplainStat"
                component={ExplainStat}
                options={{ title: 'ExplainStat' }}
            />
            <Stack.Screen
                name="Order"
                component={SummaryOrderScreen}
                options={{ title: 'Order' }}
            />
            <Stack.Screen
                name="Teaching"
                component={TeachOrderScreen}
                options={{ title: 'Teaching' }}
            />
            <Stack.Screen
                name="TurnOrder"
                component={TurnOrderScreen}
                options={{ title: 'TurnOrder' }}
            />
            <Stack.Screen
                name="TurnOrderTH"
                component={TurnOrderScreenTH}
                options={{ title: 'TurnOrderTH' }}
            />
            <Stack.Screen
                name="ActionOrderTH"
                component={ActionOrderScreenTH}
                options={{ title: 'ActionOrderTH' }}
            />
            <Stack.Screen
                name="ActionOrder"
                component={ActionOrderScreen}
                options={{ title: 'ActionOrder' }}
            />
            <Stack.Screen
                name="MoveTutorial"
                component={MoveTutorialScreen}
                options={{ title: 'MoveTutorial' }}
            />
        </Stack.Navigator>
    );
}



export default function AllCartTabNavigator() {
    const [blank,SetBlank] = useState(false);
    const linking = {
        prefixes: [prefix],
    };


    return (
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            <Tab.Navigator swipeEnabled="false" tabBarPosition="bottom">
                <Tab.Screen name="Army1"
                    component={AllArmyTabNavigator}
                    options={{
                        tabBarLabel: 'Army',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='ios-archive' size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen name="Cart" component={AllSelectedTabNavigator}
                    listeners={({ navigation, route }) => ({
                        tabPress: e => {
                            // Prevent default action
                            console.log(navigation);
                            console.log(route);
                            console.log('fff');
                        },
                    })}
                    options={{
                        tabBarLabel: 'Choosen List',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='ios-star' size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen name="Tutor" component={AllTutorialTabNavigator}
                    options={{
                        tabBarLabel: 'Help',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name='ios-book' size={24} color={color} />
                        ),
                    }}
                    activeColor={Colors.mainBlack}
                    inactiveColor={Colors.mainGrey}
                    barStyle={{ backgroundColor: 'red' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}