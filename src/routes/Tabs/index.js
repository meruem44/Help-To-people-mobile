import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles';

import Query from '../../pages/Query';
import Home from '../../pages/Home';
import Beware from '../../pages/Beware';
import Help from '../../pages/Help';
import Ajudar from '../../pages/Ajudar';

const Tabs = createBottomTabNavigator({
    Consulta: {
        screen: Query,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon 
                name="medical-bag" 
                color={tintColor}
                size={20} />
            )
        }
    },

    Ajuda: {
        screen: Help,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon 
                name="hand" 
                color={tintColor}
                size={20} />
            )
        }
    },
    
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon 
                name="home" 
                color={tintColor}
                size={20} />
            )
        }
    },

    Ajudar: {
        screen: Ajudar,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon 
                name="account-search" 
                color={tintColor}
                size={20} />
            )
        }
    },

    Precavir: {
        screen: Beware,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon 
                name="information" 
                color={tintColor}
                size={20} />
            )
        }
    }
},{
    initialRouteName:'Home',
    tabBarOptions: {
        activeTintColor: colors.primary
    }
});

export default Tabs;

