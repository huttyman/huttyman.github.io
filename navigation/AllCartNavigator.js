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

// const prefix = Linking.makeUrl('/infinity_app/');
const prefix = 'https://huttyman.github.io/';
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const HeaderOption = {
    headerStyle:{
        backgroundColor: Colors.mainGrey,
        height: 40,
        borderBottomWidth:1,
        borderColor: Colors.mainGrey,
    },
    headerTitleStyle: {
        color: Colors.mainWhite,
        fontSize:18,
    },
    headerTintColor: Colors.mainWhite,
    gestureEnabled: false,

};

const AllArmyTabNavigator = (props) => {
    return (

        <Stack.Navigator
            initialRouteName="Army"
            screenOptions={HeaderOption}
        >
            <Stack.Screen
                name="Army"
                component={ArmyScreen}
                options={{ title: "Army selection [CODE ONE] v2.8b" }}
                initialParams={{ armyId: 'pano' }}
            />
            <Stack.Screen
                name="AllCartScreen"
                component={CollapseMainExample}
                options={{ title: 'Unit' }}
            />
        </Stack.Navigator>
    );
}

const AllSelectedTabNavigator = (props) => {
    return (

        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={HeaderOption}
        >
            <Stack.Screen
                name="Cart"
                component={CollapseExample}
                options={{ title: 'Selected Unit' }}
            />
        </Stack.Navigator>
    );
}

const AllTutorialTabNavigator = (props) => {
    return (

        <Stack.Navigator
            initialRouteName="All"
            screenOptions={{
                headerStyle:{
                    backgroundColor: "white",
                    height: 40, 
                },
                headerTitleStyle: {
                    color: "black",
                    fontSize:18,
                },
                headerTintColor: "black",
                gestureEnabled: false,
            
            }}
        >
            <Stack.Screen
                name="All"
                component={AllOrderScreen}
                options={{ title: 'All Help/Reference' }}
            />
            <Stack.Screen
                name="AllTutorial"
                component={AllTutorialScreen}
                options={{ title: 'All reference' }}
            />
            <Stack.Screen
                name="ExplainStat"
                component={ExplainStat}
                options={{ title: 'Explain unit and weapon' }}
            />
            <Stack.Screen
                name="Order"
                component={SummaryOrderScreen}
                options={{ title: 'Order' }}
            />
            <Stack.Screen
                name="Teaching"
                component={TeachOrderScreen}
                options={{ title: 'Teaching Order' }}
            />
            <Stack.Screen
                name="TurnOrder"
                component={TurnOrderScreen}
                options={{ title: 'Turn Order' }}
            />
            <Stack.Screen
                name="TurnOrderTH"
                component={TurnOrderScreenTH}
                options={{ title: 'Turn Order (Thai)' }}
            />
            <Stack.Screen
                name="ActionOrderTH"
                component={ActionOrderScreenTH}
                options={{ title: 'ActionOrderTH' }}
            />
            <Stack.Screen
                name="ActionOrder"
                component={ActionOrderScreen}
                options={{ title: 'Action Order' }}
            />
            <Stack.Screen
                name="MoveTutorial"
                component={MoveTutorialScreen}
                options={{ title: 'Action Reference' }}
            />
        </Stack.Navigator>
    );
}



export default function AllCartTabNavigator() {
    const [blank, SetBlank] = useState(false);
    const linking = {
        prefixes: ['https://huttyman.github.io/','https://huttyman.github.io/infinity_app/'],
        config : {
            screens: {
              Home: {
                initialRouteName: 'Feed',
                screens: {
                  Profile: 'users/:id',
                  Settings: {
                    path: 'settings',
                    screens: {
                      InvalidSettings: '*',
                    },
                  },
                },
              },
              NotFound: 'army2',
            },
          }
    };


    return (
        <NavigationContainer  linking={linking} fallback={<Text>Loading...</Text>} >
            <Tab.Navigator tabBarPosition="bottom"
                tabBarOptions={{
                    showIcon: true,

                    activeTintColor: "white",
                    pressColor: "black",
                    style: {
                        backgroundColor: Colors.mainGrey,
                        height: 50,
                        borderTopWidth:1,
                        borderColor:Colors.mainWhite,
                    },
                    labelStyle: { fontSize: 10 },
                    tabStyle: {
                        height: 20,
                        padding: 3,
                    },
                    indicatorStyle: {
                        height: '100%',
                        backgroundColor: "#101010",
                    },

                }}
            >
                <Tab.Screen name="Army1"
                    component={AllArmyTabNavigator}
                    options={{
                        tabBarLabel: 'Army',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name='ios-archive' size={24} color={color} />
                        ),

                    }}
                />
                <Tab.Screen name="Cart" component={AllSelectedTabNavigator}
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
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}