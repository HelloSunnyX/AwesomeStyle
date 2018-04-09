var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react/native';
import CommonStyles from '../common/Styles';
let Feature = class Feature extends React.Component {
    constructor() {
        super(...arguments);
        this.remainingTime = 3;
        this.startCountdown = () => {
            const { navigation } = this.props;
            this.timer = setInterval(() => {
                this.remainingTime--;
                if (this.remainingTime <= 0) {
                    navigation.navigate('app_modal');
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }, 1000);
        };
    }
    componentDidMount() {
        this.startCountdown();
    }
    render() {
        return (React.createElement(View, { style: CommonStyles.base },
            React.createElement(Text, { style: styles.name },
                "Aidan's AwesomeStyle Start in ",
                this.remainingTime,
                "!")));
    }
};
__decorate([
    observable
], Feature.prototype, "remainingTime", void 0);
Feature = __decorate([
    observer
], Feature);
export default Feature;
const styles = StyleSheet.create({
    name: {
        fontSize: 17,
        color: 'black',
        paddingHorizontal: 15,
    },
});
