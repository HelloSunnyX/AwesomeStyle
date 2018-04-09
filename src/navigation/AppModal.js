import { StackNavigator } from 'react-navigation';
import MainTab from './MainTab';
import Preview from '../views/Preview';
const AppModal = StackNavigator({
    app: MainTab,
    preview: {
        screen: Preview,
        navigationOptions: {
            gesturesEnabled: false,
        },
    },
}, {
    mode: 'modal',
});
export default AppModal;
