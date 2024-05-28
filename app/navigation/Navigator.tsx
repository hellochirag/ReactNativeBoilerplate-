/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, AboutScreen, ArticleScreen} from '../container';
import {AppConstants} from '../constants';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
import {Colors} from '../theme';
import ArticleDetailScreen from '../container/articleDetail/ArticleDetailScreen';

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={AppConstants.NAV_HOME}
      activeColor={Colors.primary}
      barStyle={{backgroundColor: Colors.white}}>
      <Tab.Screen
        name={AppConstants.NAV_HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: AppConstants.TAB_NAV_TODAY,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={AppConstants.NAV_ARTICLES}
        component={ArticleScreen}
        options={{
          tabBarLabel: AppConstants.TAB_NAV_ARTICLES,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={AppConstants.NAV_ABOUT}
        component={AboutScreen}
        options={{
          tabBarLabel: AppConstants.TAB_NAV_ABOUT,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="book-information-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppConstants.NAV_HOME} component={Tabs} />
      <Stack.Screen
        name={AppConstants.NAV_ARTICLE_DETAIL}
        component={ArticleDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
