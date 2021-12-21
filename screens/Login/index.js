import { View, Text, Button } from 'react-native';

export default function Login(props)
{
	const { navigation } = props;

	return (

		<View>

			<Button
				title="Home"
				onPress={ () => navigation.push('Home') }
			/>

		</View>

	);
}