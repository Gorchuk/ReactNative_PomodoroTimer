import React from 'react';
import { View, Button } from 'react-native';
import { styles } from '../stylesheet';

export default class Buttons extends React.Component {
  render() {
    return (
      <View style={styles.button}>
        <Button title={this.props.title}
                onPress={this.props.onPress}
                color="white"
                accessibilityLabel={this.props.title}
        />
      </View>
    )
  }
}