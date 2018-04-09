import * as React from 'react';
import { View, Text } from 'react-native';
import CommonStyles from '../common/Styles';
export default class Other extends React.Component {
    render() {
        return (React.createElement(View, { style: CommonStyles.base },
            React.createElement(Text, null, "Other")));
    }
}
Other.navigationOptions = () => {
    return {
        title: 'Other',
    };
};
