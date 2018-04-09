import * as React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import CommonStyles from '../common/Styles';
export default class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.toPreview = () => {
            this.props.navigation.navigate('preview');
        };
    }
    render() {
        return (React.createElement(View, { style: CommonStyles.base },
            React.createElement(TouchableWithoutFeedback, { onPress: this.toPreview },
                React.createElement(View, { style: styles.button },
                    React.createElement(Text, { style: styles.buttonTitle }, "Preview")))));
    }
}
Home.navigationOptions = () => {
    return {
        title: 'Home',
    };
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6b92f2',
        paddingHorizontal: 30,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        shadowColor: '#567bc2',
        shadowRadius: 4,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 5 },
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
