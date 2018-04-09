import { TabNavigator } from 'react-navigation';
import Home from '../views/Home';
import Other from '../views/Other';
const MainTab = TabNavigator({
    home: { screen: Home },
    other: { screen: Other },
});
export default MainTab;
