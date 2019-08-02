import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createAppContainer,createDrawerNavigator, DrawerItems, createSwitchNavigator, createNavigationContainer} from 'react-navigation';

import CatalogEvents from './screens/CatalogEvents';
import AboutUs from './screens/AboutUs';
import AboutBMSCE from './screens/AboutBMSCE';
import AboutTheme from './screens/AboutTheme';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';






const AppDrawerNavigation = createDrawerNavigator({
  AboutUs:AboutUs,
  CatalogEvents:CatalogEvents,
  AboutTheme:AboutTheme,
  AboutBMSCE:AboutBMSCE
  
})

const stackNavigator = createStackNavigator({
  AboutTheme:AboutTheme,
  AboutBMSCE:AboutBMSCE
})



const AppSwitchNavigator = createSwitchNavigator({

  AboutUs:AppDrawerNavigation,
  CatalogEvents:AppDrawerNavigation,
  AboutTheme:stackNavigator,
  AboutBMSCE:stackNavigator

})



const App = createAppContainer(AppSwitchNavigator);


export default App;
