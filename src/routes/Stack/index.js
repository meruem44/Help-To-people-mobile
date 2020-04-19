import { createStackNavigator } from 'react-navigation-stack';

import { colors, metrics } from '../../styles';

import Initial from '../../pages/Login';
import Register from '../../pages/Register';
import Tabs from '../Tabs';

const RoutesStack = createStackNavigator({
    Initial: {
        screen: Initial,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerTintColor: '#fff',
            title: 'Criar conta',
            headerStyle: {
                backgroundColor: colors.primary
            }
        }
    },
    Home: {
        screen: Tabs,
        navigationOptions: {
            headerTintColor: '#fff',
            title: 'Help To People',
            headerLeft: null,
            headerStyle: {
                backgroundColor: colors.primary,
                
            }
        }
    }
});

export default RoutesStack