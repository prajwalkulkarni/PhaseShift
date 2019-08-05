import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions ,Image} from 'react-native';
import {createStackNavigator,createAppContainer,createDrawerNavigator, DrawerItems, createSwitchNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { Icon }  from 'react-native-elements';
import CatalogEvents from './screens/CatalogEvents';
import Schedule from './screens/Schedule';
import Workshop from './screens/Workshop';
import Map from './screens/Map';
import AboutUs from './screens/AboutUs';
import AboutBMSCE from './screens/AboutBMSCE';
import AboutTheme from './screens/AboutTheme';
import TeamPage from './screens/TeamPage';


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
  CatalogEvents: {
    screen:CatalogEvents,
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
       ),
       drawerIcon : (
        <Image source={require('./assets/about.png')} style={{height:24,width:24}} />
      )
       }},
  Schedule: {
    screen : Schedule,
    navigationOption:{
      tabBarLabel: 'Schedule',
      tabBarIcon:({tintColor})=>(
        <Icon name='schedule' color={tintColor} size={25} />
       ),
      
       drawerIcon : (
        <Image source={require('./assets/about.png')} style={{height:24,width:24}} />
      )}}
}, {

    initialRouteName:'Workshop',
    order: ['Workshop', 'CatalogEvents', 'Schedule', 'Map'],
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

const AppDrawerNavigation = createDrawerNavigator({
  AboutUs:AboutUs,
  CatalogEvents:AppTabNavigator,
  Workshop:AppTabNavigator,
  Schedule:AppTabNavigator,
  Map:AppTabNavigator,
  TeamPage:TeamPage,
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
  CatalogEvents:AppDrawerNavigation,
  Workshop:AppDrawerNavigation,
  Schedule:AppDrawerNavigation,
  Map:AppDrawerNavigation,
  TeamPage:AppDrawerNavigation,
  AboutTheme:stackNavigator,
  AboutBMSCE:stackNavigator
  
})



const App = createAppContainer(AppSwitchNavigator);


export default App;
