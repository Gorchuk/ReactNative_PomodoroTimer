import React from 'react';
import { Linking, View, Text } from 'react-native';
import { styles } from '../stylesheet';

export default class Info extends React.Component {
	render() {
		return (
			<View style={styles.infoBox}>
				<Text style={styles.infoText}>Created by
					<Text style={{color: 'blue'}}
					      onPress={() => Linking.openURL('https://www.linkedin.com/in/gorchukanatoly/')}> Anatolii Horchuk
					</Text>.
				</Text>
			</View>
		)
	}
}