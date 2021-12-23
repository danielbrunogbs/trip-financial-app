import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screens */

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

/* Screens */

const { Navigator, Screen } = createNativeStackNavigator();

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
				headerStyle: {
					backgroundColor: 'red'
				},
				headerRight: () =>
				(
					<Button
						onPress={ () => alert('Teste de alerta!') }
						title="Teste"
						color="#000"
					/>
				)
			}
		}
	];

	return (

		<NavigationContainer>

			<Navigator initialRouteName="Login">

				{
					screens.map((screen, index) => <Screen key={ index } { ...screen } /> )
				}

			</Navigator>

		</NavigationContainer>

	);
}