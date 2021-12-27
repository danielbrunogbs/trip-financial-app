import { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import style from './style.js';
import Api from '../../services/Api.js';
import MMKVStorage from "react-native-mmkv-storage";

const MMKV = new MMKVStorage.Loader().initialize();

export default function Login(props)
{
	const { navigation } = props;

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const onSubmit = async () =>
	{
		try
		{
			let response = await Api.post('/login', {
				email,
				password
			});

			if(!response.data || response.data.status === 'error')
				throw new Error(response.data.message);

			await MMKV.setMapAsync('session', response.data);

			navigation.navigate('Home');
		}
		catch(e)
		{
			Alert.alert(
				'Opa!',
				e.message,
				[
					{
						text: 'ENTENDI'
					}
				]
			);
		}
	}

	return (

		<View style={ style.container }>

			<Text>E-mail:</Text>

			<TextInput
				style={ style.input }
				onChangeText={ setEmail }
				text={ email }
			/>

			<Text>Senha:</Text>

			<TextInput
				style={ style.input }
				onChangeText={ setPassword }
				text={ password }
			/>

			<Button
				onPress={ () => onSubmit() }
				title="Teste"
			/>

		</View>

	);
}