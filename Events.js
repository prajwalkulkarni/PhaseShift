import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground
} from 'react-native';
import {Icon} from 'react-native-elements';



export default class Events extends React.Component {

  static navigationOptions ={
    drawerIcon : (
      <Image source={require('../assets/events_1.png')} style={{height:20,width:20}} />
    ),
    tabBarIcon:({tintColor})=>(
      <Icon name="event" color={tintColor} size={25} />
     ) 
     
    
  }
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <ImageBackground source={require('../assets/imageSolar.png')} 
            style={{
              width: '100%',
              flex:1,
              height: '100%',
              resizeMode: 'cover',
              }}>
              <View style={{
                alignItems:'flex-end',
                resizeMode: 'contain',
                padding:10,
                paddingRight:0,
                paddingTop:10
              }}>
                <Image source={require('../assets/PSLOGOWHITE.png')} />
              </View>
              
              <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }} >
                  

                <View style={{
                    paddingBottom:45
                }}>
                    <Image source={require('../assets/Events.png')} />
                </View>

                <View style={{
                    padding:28,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                    letterSpacing:0.16,
                    textAlign:'auto',
                    fontStyle: 'Poppins-ExtraLight',
                    paddingLeft: 9,
                    fontSize: 18,
                    color: '#fff',
                    lineHeight: 28
                    }}> Info will be updated soon......
                            
                        </Text>
                    </View>
               </View>

                </ImageBackground>
        </ScrollView>
        </SafeAreaView>
      </Fragment>
        
      
    );
  }
}