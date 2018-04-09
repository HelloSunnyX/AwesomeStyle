import * as React from 'react';
import { StyleSheet, View, Text, ViewStyle, TextStyle, TouchableWithoutFeedback } from 'react-native';
import CommonStyles from '../common/Styles';
import { CommonProps } from '../common/Props';

export default class Home extends React.Component<CommonProps, {}> {

    static navigationOptions = () => {
        return {
            title: 'Home',
        };
    }

    private toPreview = () => {
        this.props.navigation.navigate('preview');
    }

    render() {
        return (
            <View style={CommonStyles.base}>
                <TouchableWithoutFeedback onPress={this.toPreview}>
                    <View style={styles.button}>
                        <Text style={styles.buttonTitle}>Preview</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create<{
    button: ViewStyle;
    buttonTitle: TextStyle;
}>({
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
