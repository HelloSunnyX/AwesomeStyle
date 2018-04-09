import * as React from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react/native';
import { CommonProps } from '../common/Props';
import CommonStyles from '../common/Styles';

@observer
export default class Feature extends React.Component<CommonProps, {}> {

    private timer: number;
    @observable private remainingTime: number = 3;

    private startCountdown = () => {
        const { navigation } = this.props;
        this.timer = setInterval(() => {
            this.remainingTime--;
            if (this.remainingTime <= 0) {
                clearInterval(this.timer);
                this.timer = null;
                navigation.navigate('app_modal');
            }
        }, 1000);
    }

    componentDidMount() {
        this.startCountdown();
    }

    render() {
        return (
            <View style={CommonStyles.base}>
                <Text style={styles.name}>Aidan's AwesomeStyle Start in {this.remainingTime}!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create<{
    name: TextStyle;
}>({
    name: {
        fontSize: 17,
        color: 'black',
        paddingHorizontal: 15,
    },
});

