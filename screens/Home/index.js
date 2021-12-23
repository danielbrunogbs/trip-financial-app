import { StyleSheet, View, Text, Button } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { useState } from 'react';
import styles from './styles.js'

export default function Home()
{
	const [visible, setVisible] = useState(false);

	const [swipeProps, setSwipeProps] = useState({
		fullWidth: true,
		openLarge: true,
		showCloseButton: true,
		onClose: () => setVisible(false)
	});

	return (

		<View style={ styles.container }>

			<SwipeablePanel
				{ ...swipeProps }
				isActive={ visible }
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