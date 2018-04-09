import * as React from 'react';
import { View, Text } from 'react-native';
import CommonStyles from '../common/Styles';

export default class Other extends React.Component<{}, {}> {

    static navigationOptions = () => {
        return {
            title: 'Other',
        };
    }

    render() {
        return (
            <View style={CommonStyles.base}>
                <Text>Other</Text>
            </View>
        );
    }
}
