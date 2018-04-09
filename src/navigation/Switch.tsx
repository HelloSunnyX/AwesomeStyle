import { SwitchNavigator } from 'react-navigation';
import AppModal from './AppModal';
import Feature from '../views/Feature';

const Switch = SwitchNavigator(
    {
        feature: Feature,
        app_modal: AppModal,
    },
);

export default Switch;