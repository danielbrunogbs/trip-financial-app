import { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MMKVStorage from "react-native-mmkv-storage";

/* Screens */

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

/* Screens */

const { Navigator, Screen } = createNativeStackNavigator();

const MMKV = new MMKVStorage.Loader().initialize();

export default function Routes()
{
	const screens = [
		{
			name: 'Home',
			component: HomeScreen
		},
		{
			name: 'Login',
			component: LoginScreen,
			options: {
				headerTitle: 'Entrar'
			}
		}
	];

	return (

		<NavigationContainer>

			<Navigator initialRouteName="Login">

				{ screens.map((screen, index) => <Screen key={ index } { ...screen } /> ) }

			</Navigator>

		</NavigationContainer>

	);
}