import { StyleSheet, View, Text, Button } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { useState } from 'react';
import styles from './styles.js'

export default function Home(props)
{
	const [visible, setVisible] = useState(false);

	return (

		<View style={ styles.container }>

			<SwipeablePanel
				fullWidth="true"
				openLarge="true"
				showCloseButton="true"
				isActive={ visible }
				onClose={ () => setVisible(false) }
			>

			</SwipeablePanel>

			<Button
				onPress={ () => setVisible(true) }
				title="Abrir Modal"
			/>

			<Text>Teste</Text>

		</View>

	);
}