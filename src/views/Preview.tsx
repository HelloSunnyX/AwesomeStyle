import * as React from 'react';
import { StyleSheet, View, Text, ViewStyle, Image, ActivityIndicator, TouchableWithoutFeedback, TextStyle } from 'react-native';
import CommonStyles from '../common/Styles';
import { CommonProps } from '../common/Props';
import { observer } from 'mobx-react/native';
import { observable, computed } from 'mobx';
import { SCREEN_WIDTH } from '../common/Utils';

@observer
export default class Preview extends React.Component<CommonProps, {}> {

    static navigationOptions = () => {
        return {
            header: null,
        };
    }

    @observable private imgUrl: string;

    private findTargetImg = () => {
        fetch('https://xkcd.com/')
            .then(r => {
                const bodyText = r['_bodyText'] as string;
                const reg = /https:\/\/imgs.xkcd.com\/comics\/([\S]+)/g;
                this.imgUrl = reg.test(bodyText) ? bodyText.match(reg)[0] : null;
            });
    }

    componentDidMount() {
        this.findTargetImg();
    }

    @computed private get preview() {
        if (this.imgUrl === undefined) {
            return <ActivityIndicator />;
        }
        if (this.imgUrl === null) {
            return <Text>No Preview</Text>;
        }
        return (
            <Image
                source={{ uri: this.imgUrl }}
                style={styles.img}
                resizeMode="contain"
            />
        );
    }

    private closePreview = () => {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('other');
    }

    render() {
        return (
            <View style={CommonStyles.base}>
                <View style={styles.previewContainer}>
                    {this.preview}
                </View>
                <TouchableWithoutFeedback onPress={this.closePreview}>
                    <View style={styles.button}>
                        <Text style={styles.buttonTitle}>Close</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create<{
    button: ViewStyle;
    buttonTitle: TextStyle;
    previewContainer: ViewStyle;
    img: ViewStyle;
}>({
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
