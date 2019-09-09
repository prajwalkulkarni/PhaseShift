import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions ,Image} from 'react-native';
import {createStackNavigator,createAppContainer,createDrawerNavigator, DrawerItems, createSwitchNavigator, createMaterialTopTabNavigator, NavigationEvents} from 'react-navigation';
import { Icon }  from 'react-native-elements';
import Events from './screens/Events';
import Schedule from './screens/Schedule';
import Workshop from './screens/Workshop';
import Map from './screens/Map';
import AboutUs from './screens/AboutUs';
import AboutBMSCE from './screens/AboutBMSCE';
import AboutTheme from './screens/AboutTheme';
import PowerUp from './screens/PowerUp';
import FirstScreen from './screens/FirstScreen';
import Gif from './screens/Gif';
import w0 from './details/w0';
import w1 from './details/w1';
import w2 from './details/w2';
import w3 from './details/w3';
import w4 from './details/w4';
import w5 from './details/w5';
import w6 from './details/w6';
import w7 from './details/w7';
import w8 from './details/w8';
import w9 from './details/w9';
import w10 from './details/w10';
import w11 from './details/w11';
import w12 from './details/w12';
import w13 from './details/w13';
import w14 from './details/w14';
import w15 from './details/w15';
import w16 from './details/w16';
import w17 from './details/w17';
import w18 from './details/w18';
import w19 from './details/w19';
import w20 from './details/w20';
import w21 from './details/w21';
import w22 from './details/w22';
import w23 from './details/w23';
import w24 from './details/w24';
import w25 from './details/w25';
import w26 from './details/w26';
import w27 from './details/w27';
import e81 from './detailsEvents/e81';
import e0 from './detailsEvents/e0';
import e1 from './detailsEvents/e1';
import e2 from './detailsEvents/e2';
import e3 from './detailsEvents/e3';
import e4 from './detailsEvents/e4';
import e5 from './detailsEvents/e5';
import e6 from './detailsEvents/e6';
import e7 from './detailsEvents/e7';
import e8 from './detailsEvents/e8';
import e9 from './detailsEvents/e9';
import e10 from './detailsEvents/e10';
import e11 from './detailsEvents/e11';
import e12 from './detailsEvents/e12';
import e13 from './detailsEvents/e13';
import e14 from './detailsEvents/e14';
import e15 from './detailsEvents/e15';
import e16 from './detailsEvents/e16';
import e17 from './detailsEvents/e17';
import e18 from './detailsEvents/e18';
import e19 from './detailsEvents/e19';
import e20 from './detailsEvents/e20';
import e21 from './detailsEvents/e21';
import e22 from './detailsEvents/e22';
import e23 from './detailsEvents/e23';
import e24 from './detailsEvents/e24';
import e25 from './detailsEvents/e25';
import e26 from './detailsEvents/e26';
import e27 from './detailsEvents/e27';
import e28 from './detailsEvents/e28';
import e29 from './detailsEvents/e29';
import e30 from './detailsEvents/e30';
import e31 from './detailsEvents/e31';
import e32 from './detailsEvents/e32';
import e33 from './detailsEvents/e33';
import e34 from './detailsEvents/e34';
import e82 from './detailsEvents/e82';
import e35 from './detailsEvents/e35';
import e36 from './detailsEvents/e36';
import e37 from './detailsEvents/e37';
import e38 from './detailsEvents/e38';
import e39 from './detailsEvents/e39';
import e40 from './detailsEvents/e40';
import e41 from './detailsEvents/e41';
import e42 from './detailsEvents/e42';
import e43 from './detailsEvents/e43';
import e44 from './detailsEvents/e44';
import e45 from './detailsEvents/e45';
import e46 from './detailsEvents/e46';
import e47 from './detailsEvents/e47';
import e48 from './detailsEvents/e48';
import e49 from './detailsEvents/e49';
import e50 from './detailsEvents/e50';
import e51 from './detailsEvents/e51';
import e52 from './detailsEvents/e52';
import e53 from './detailsEvents/e53';
import e54 from './detailsEvents/e54';
import e55 from './detailsEvents/e55';
import e56 from './detailsEvents/e56';
import e57 from './detailsEvents/e57';
import e58 from './detailsEvents/e58';
import e59 from './detailsEvents/e59';
import e60 from './detailsEvents/e60';
import e61 from './detailsEvents/e61';
import e62 from './detailsEvents/e62';
import e63 from './detailsEvents/e63';
import e64 from './detailsEvents/e64';
import e65 from './detailsEvents/e65';
import e66 from './detailsEvents/e66';
import e67 from './detailsEvents/e67';
import e68 from './detailsEvents/e68';
import e69 from './detailsEvents/e69';
import e70 from './detailsEvents/e70';
import e71 from './detailsEvents/e71';
import e72 from './detailsEvents/e72';
import e73 from './detailsEvents/e73';
import e74 from './detailsEvents/e74';
import e75 from './detailsEvents/e75';
import e76 from './detailsEvents/e76';
import e77 from './detailsEvents/e77';
import e78 from './detailsEvents/e78';
import e79 from './detailsEvents/e79';
import e80 from './detailsEvents/e80';



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

const detailStackNavigator = createStackNavigator({
  Workshop:Workshop,
  w0:w0,
  w1:w1,
  w2:w2,
  w3:w3,
  w4:w4,
  w5:w5,
  w6:w6,
  w7:w7,
  w8:w8,
  w10:w10,
  w11:w11,
  w12:w12,
  w13:w13,
  w14:w14,
  w15:w15,
  w16:w16,
  w17:w17,
  w18:w18,
  w19:w19,
  w20:w20,
  w21:w21,
  w22:w22,
  w23:w23,
  w24:w24,
  w25:w25,
  w26:w26,
  w27:w27

  
})

const detailsEventsNavigator = createStackNavigator({

  Events:Events,
  e81:e81,
  e0:e0,
  e1:e1,
  e2:e2,
  e3:e3,
  e4:e4,
  e5:e5,
  e6:e6,
  e7:e7,
  e8:e8,
  e9:e9,
  e10:e10,
  e11:e11,
  e12:e12,
  e13:e13,
  e14:e14,
  e15:e15,
  e16:e16,
  e17:e17,
  e18:e18,
  e19:e19,
  e20:e20,
  e21:e21,
  e22:e22,
  e23:e23,
  e24:e24,
  e25:e25,
  e26:e26,
  e27:e27,
  e28:e28,
  e29:e29,
  e30:e30,
  e31:e31,
  e32:e32,
  e33:e33,
  e34:e34,
  e82:e82,
  e35:e35,
  e36:e36,
  e37:e37,
  e38:e38,
  e39:e39,
  e40:e40,
  e41:e41,
  e42:e42,
  e43:e43,
  e44:e44,
  e45:e45,
  e46:e46,
  e47:e47,
  e48:e48,
  e49:e49,
  e50:e50,
  e51:e51,
  e52:e52,
  e53:e53,
  e54:e54,
  e55:e55,
  e56:e56,
  e70:e70,
  e57:e57,
  e58:e58,
  e59:e59,
  e60:e60,
  e61:e61,
  e63:e63,
  e64:e64,
  e65:e65,
  e66:e66,
  e67:e67,
  e68:e68,
  e69:e69,
  e71:e71,
  e72:e72,
  e73:e73,
  e74:e74,
  e75:e75,
  e76:e76,
  e77:e77,
  e78:e78,
  e79:e79,
  e80:e80





})


const AppTabNavigator = createMaterialTopTabNavigator({
  Events: {
    screen:detailsEventsNavigator,
    navigationOptions:{
      header:null,
      tabBarLabel: 'Events  ',
      tabBarIcon:({tintColor})=>(
        <Icon name='event' color={tintColor} size={25} />
      ),
     
    }
  },
  Workshop: {
    screen: detailStackNavigator,
    navigationOptions:{
      header:null,
      tabBarLabel: 'Workshop  ',
      tabBarIcon:({tintColor})=>(
        <Icon name='store' color={tintColor} size={25} />
       ) }},
  Map: {
    screen: Map,
    navigationOptions:{
      tabBarLabel: 'Map  ',
      tabBarIcon:({tintColor})=>(
        <Icon name='explore' color={tintColor} size={25} />
       )
       }},
  Schedule: {
    screen : Schedule,
    navigationOptions:{
      tabBarLabel: 'Schedule  ',
      tabBarIcon:({tintColor})=>(
        <Icon name='schedule' color={tintColor} size={25} />
       ),
      
      }}
}, {

    initialRouteName:'Workshop',
    order: ['Workshop','Events', 'Schedule', 'Map'],
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
        borderTopWidth: 0.5,
        padding:20
      },
      indicatorStyle: {
        height: 0
      }

    }
})


const AppDrawerNavigation = createDrawerNavigator({
  AboutUs:{
    screen:AboutUs,
    navigationOptions:{
      drawerLabel:'About Us '
    }
  },
  Workshop:{
    screen:AppTabNavigator,
    navigationOptions:{
      drawerIcon : (
        <Image source={require('./assets/workshop.png')} style={{height:24,width:24}}/>

      )
    }},
  Events:{
    screen:AppTabNavigator,
    navigationOptions:{
       drawerIcon : (
        <Image source={require('./assets/events_1.png')} style={{height:24,width:24}}/>
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
      drawerLabel:'Team ',
      drawerIcon:(
        <Image source={require('./assets/team-icon-white.png')} style={{height:24,width:24}}/>
      )
    }},
  AboutTheme:{
    screen:AboutTheme,
    drawerLabel:'Theme '},
  AboutBMSCE:{
    screen:AboutBMSCE,
    drawerLabel:'About BMSCE '},
  
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
  AboutBMSCE:AboutBMSCE,
  
  
})




const AppSwitchNavigator = createSwitchNavigator({
  Gif:Gif,
  PowerUp:stackNavigator,
  AboutUs:AppDrawerNavigation,
  Workshop:AppDrawerNavigation,
  Events:AppDrawerNavigation,
  Schedule:AppDrawerNavigation,
  Map:AppDrawerNavigation,
  AboutTheme:stackNavigator,
  AboutBMSCE:stackNavigator,
  AppTeamNumbers:TabNavigator,
  CoreNumbers:TabNavigator,
  

  
})



const App = createAppContainer(AppSwitchNavigator);


export default App;
