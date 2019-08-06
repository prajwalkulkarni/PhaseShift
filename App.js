import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions ,Image} from 'react-native';
import {createStackNavigator,createAppContainer,createDrawerNavigator, DrawerItems, createSwitchNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { Icon }  from 'react-native-elements';
import Events from './screens/Events';
import Schedule from './screens/Schedule';
import Workshop from './screens/Workshop';
import Map from './screens/Map';
import AboutUs from './screens/AboutUs';
import AboutBMSCE from './screens/AboutBMSCE';
import AboutTheme from './screens/AboutTheme';
import TeamPage from './screens/TeamPage';
import CoreNumbers from './screens/CoreNumbers';
import AppTeamNumbers from './screens/AppTeamNumbers';


const {width} = Dimensions.get('window')
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1,backgroundColor:'#213368'}}>
    <View style={{height:100,alignItems:'flex-end',padding:30}}>

      <Image source={require('./assets/PSLOGOWHITE.png')}/> 
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)



const AppTabNavigator = createMaterialTopTabNavigator({
  Events: {
    screen:Events,
    navigationOption:{
      tabBarLabel: 'Events',
      tabBarIcon:({tintColor})=>(
        <Icon name='event' color={tintColor} size={25} />
      )
    }
  },
  Workshop: {
    screen: Workshop,
    navigationOption:{
      tabBarLabel: 'Workshop',
      tabBarIcon:({tintColor})=>(
        <Icon name='store' color={tintColor} size={25} />
       ) }},
  Map: {
    screen: Map,
    navigationOption:{
      tabBarLabel: 'Map',
      tabBarIcon:({tintColor})=>(
        <Icon name='explore' color={tintColor} size={25} />
       )
       }},
  Schedule: {
    screen : Schedule,
    navigationOption:{
      tabBarLabel: 'Schedule',
      tabBarIcon:({tintColor})=>(
        <Icon name='schedule' color={tintColor} size={25} />
       ),
      
      }}
}, {

    initialRouteName:'Workshop',
    order: ['Workshop', 'Events', 'Schedule', 'Map'],
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'rgba(34, 189, 239, 0.99)',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#213368',
        borderTopWidth: 0.5
      },
      indicatorStyle:{
        height:0
      },
      showIcon: true

    }
})

const TabNavigator = createMaterialTopTabNavigator({
  CoreNumbers: {
    screen:CoreNumbers,
    navigationOption:{
      tabBarLabel: 'Core Team'
      
    }
  },
  AppTeamNumbers: {
    screen: AppTeamNumbers,
    navigationOption:{
      tabBarLabel: 'App Team'
     
      }}
  
}, {
    initialRouteName: 'CoreNumbers',
    order: ['CoreNumbers', 'AppTeamNumbers'],
    tabBarOptions: {
      activeTintColor: 'rgba(34, 189, 239, 0.99)',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#213368',
        borderTopWidth: 0.5
      },
      indicatorStyle: {
        height: 0
      }

    }
})


const AppDrawerNavigation = createDrawerNavigator({
  AboutUs:AboutUs,
  Events:AppTabNavigator,
  Workshop:AppTabNavigator,
  Schedule:AppTabNavigator,
  Map:AppTabNavigator,
  CoreNumbers:TabNavigator,
  AboutTheme:AboutTheme,
  AboutBMSCE:AboutBMSCE
  
},{
  contentComponent:CustomDrawerComponent,
  drawerWidth:width,
  contentOptions:{
    activeTintColor:'white',
    inactiveTintColor:'white'
    
  }
})

const stackNavigator = createStackNavigator({
  AboutTheme:AboutTheme,
  AboutBMSCE:AboutBMSCE
})





const AppSwitchNavigator = createSwitchNavigator({

  AboutUs:AppDrawerNavigation,
  Events:AppDrawerNavigation,
  Workshop:AppDrawerNavigation,
  Schedule:AppDrawerNavigation,
  Map:AppDrawerNavigation,
  AboutTheme:stackNavigator,
  AboutBMSCE:stackNavigator,
  AppTeamNumbers:TabNavigator,
  CoreNumbers:TabNavigator
  
})



const App = createAppContainer(AppSwitchNavigator);


export default App;
