var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import CommonStyles from '../common/Styles';
import { observer } from 'mobx-react/native';
import { observable, computed } from 'mobx';
import { SCREEN_WIDTH } from '../common/Utils';
let Preview = class Preview extends React.Component {
    constructor() {
        super(...arguments);
        this.findTargetImg = () => {
            fetch('https://xkcd.com/')
                .then(r => {
                const bodyText = r['_bodyText'];
                const reg = /https:\/\/imgs.xkcd.com\/comics\/([\S]+)/g;
                this.imgUrl = reg.test(bodyText) ? bodyText.match(reg)[0] : null;
            });
        };
        this.closePreview = () => {
            this.props.navigation.goBack(null);
            this.props.navigation.navigate('other');
        };
    }
    componentDidMount() {
        this.findTargetImg();
    }
    get preview() {
        if (this.imgUrl === undefined) {
            return React.createElement(ActivityIndicator, null);
        }
        if (this.imgUrl === null) {
            return React.createElement(Text, null, "No Preview");
        }
        return (React.createElement(Image, { source: { uri: this.imgUrl }, style: styles.img, resizeMode: "contain" }));
    }
    render() {
        return (React.createElement(View, { style: CommonStyles.base },
            React.createElement(View, { style: styles.previewContainer }, this.preview),
            React.createElement(TouchableWithoutFeedback, { onPress: this.closePreview },
                React.createElement(View, { style: styles.button },
                    React.createElement(Text, { style: styles.buttonTitle }, "Close")))));
    }
};
Preview.navigationOptions = () => {
    return {
        header: null,
    };
};
__decorate([
    observable
], Preview.prototype, "imgUrl", void 0);
__decorate([
    computed
], Preview.prototype, "preview", null);
Preview = __decorate([
    observer
], Preview);
export default Preview;
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: '#eb5449',
        paddingHorizontal: 30,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        shadowColor: '#eb5449',
        shadowRadius: 4,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 5 },
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    previewContainer: {
        width: SCREEN_WIDTH,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
