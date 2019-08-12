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
import PowerUp from './screens/PowerUp';
import LandingPage from './screens/LandingPage'

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
    navigationOptions:{
      tabBarLabel: 'Events',
      tabBarIcon:({tintColor})=>(
        <Icon name='event' color='#fff' size={25} />
      ),
     
    }
  },
  Workshop: {
    screen: Workshop,
    navigationOptions:{
      tabBarLabel: 'Workshop',
      tabBarIcon:({tintColor})=>(
        <Icon name='store' color={tintColor} size={25} />
       ) }},
  Map: {
    screen: Map,
    navigationOptions:{
      tabBarLabel: 'Map',
      tabBarIcon:({tintColor})=>(
        <Icon name='explore' color={tintColor} size={25} />
       )
       }},
  Schedule: {
    screen : Schedule,
    navigationOptions:{
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
    navigationOptions:{
      tabBarLabel: 'Core Team',
    }
  },
  AppTeamNumbers: {
    screen: AppTeamNumbers,
    navigationOptions:{
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
  Events:{
    screen:AppTabNavigator,
    navigationOptions:{
       drawerIcon : (
        <Image source={require('./assets/events_1.png')} style={{height:24,width:24}}/>
      )
    }},
  Workshop:{
    screen:AppTabNavigator,
    navigationOptions:{
      drawerIcon : (
        <Image source={require('./assets/workshop.png')} style={{height:24,width:24}}/>

      )
    }},
  Schedule:{
    screen:AppTabNavigator,
    navigationOptions:{
      drawerIcon : (
        <Image source={require('./assets/schedule_i.png')} style={{height:24,width:24}}/>
      )
    }},
  Map:{
    screen:AppTabNavigator,
    navigationOptions:{
      drawerIcon : (
        <Image source={require('./assets/map_white.png')} style={{height:24,width:24}}/>
      )
    }},
  CoreNumbers:{
    screen:TabNavigator,
    navigationOptions:{
      drawerLabel:'Team',
      drawerIcon:(
        <Image source={require('./assets/team-icon-white.png')} style={{height:24,width:24}}/>
      )
    }},
  AboutTheme:{
    screen:AboutTheme,
    drawerLabel:'Theme'},
  AboutBMSCE:{
    screen:AboutBMSCE,
    drawerLabel:'About BMSCE'},
  
},{
  contentComponent:CustomDrawerComponent,
  drawerWidth:width,
  contentOptions:{
    activeTintColor:'white',
    inactiveTintColor:'white',
    labelStyle:{
      fontSize:20,
      fontStyle:'Poppins-ExtraLight'
    }
    
  }
})

const stackNavigator = createStackNavigator({
  PowerUp:PowerUp,
  AboutTheme:AboutTheme,
  AboutBMSCE:AboutBMSCE
})





const AppSwitchNavigator = createSwitchNavigator({
  PowerUp:stackNavigator,
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
