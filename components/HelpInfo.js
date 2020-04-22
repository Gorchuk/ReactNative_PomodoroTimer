import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../stylesheet';

export default class HelpInfo extends React.Component {
	render() {
		return (
			<View>
				<View style={styles.helpInfoContainer}>{(!this.props.paused && !this.props.playing) &&
					<Text style={styles.smallHelp}>press play to start</Text>}
						{this.props.paused &&
							<Text style={styles.smallHelp}>
							paused
					</Text>}
				</View>
				<Text style={styles.helpInfo}>{this.props.working ? "work time" : "break time"}</Text>
			</View>
		)
	}
}