import React from 'react';
import Home from './components/Main';
import News from './components/News';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigator() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'News',
                    headerStyle: { backgroundColor: '#f73901' }
                }}
            />
            <Stack.Screen
                name="Contact"
                component={News}
                options={{
                    title: 'News list',
                    headerStyle: { backgroundColor: '#008ae9' }
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}