import { StyleSheet, ViewStyle } from 'react-native';

const CommonStyles = StyleSheet.create<{
    base: ViewStyle;
}>({
    base: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5fcff',
    },
});

export default CommonStyles;
