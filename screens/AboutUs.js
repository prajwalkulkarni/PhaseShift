import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  ImageBackground,
  WebView
} from 'react-native';

import {Icon} from 'react-native-elements';
import { TouchableRipple} from 'react-native-paper';
import { Linking } from 'expo';

export default class AboutUs extends React.Component {

  static navigationOptions ={
    drawerIcon : (
      <Image source={require('../assets/about.png')} style={{height:24,width:24}} />
    )
  }
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () =>
  {
  Animated.sequence([
  Animated.timing(this.state.animation , {
  toValue: 360,
  duration: 1000,
  easing:Easing.linear,
  }),
  Animated.timing(this.state.animation , {
  toValue: 0,
  duration: 0,
  }),
  ]).start();
  
  }
  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "1080deg"]
      
      })
      
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('../assets/grad.jpg')} 
            style={{
              width: '100%',
              flex:1,
              height: '100%',
              resizeMode: 'cover',
              }}>

      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            
                  

              <View style={{
        
                flex:1,
                padding:20,
                
                paddingTop:20,
                flexDirection:'row'
              }}>

                <View style={{flex:1,alignItems:'flex-start',paddingTop:10}}>
                  <Icon name='sort' color='#ffffff' size={35}  onPress= {()=>this.props.navigation.openDrawer()}/>  

                </View>

                <View style={{flex:1,alignItems:'flex-end'}}>
                

                </View>
                
                
              </View>
              
              <View style={{
                  padding:10,
                  paddingBottom:0,
                  alignItems: 'center',
                  justifyContent: 'center'
              }} >
                  

                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableWithoutFeedback onPress=
                {this.startAnimation}>
                <Animated.View style={{paddingBottom:28,
                transform : [
                  {
                     rotateY: rotateInterpolate
                  } ] }}>
                    <Text style={{fontSize: 45, letterSpacing: 0.3, color:'white', justifyContent: 'center', alignItems: 'center'}}>
                    About Us</Text>
                </Animated.View>

                </TouchableWithoutFeedback>
                </View>

                <View style={{
                    padding:25,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                 
                    <Text style={{
                    letterSpacing:0.16,
                    textAlign:'justify',
                    paddingLeft: 9,
                    fontSize: 18,
                    color: '#fff',
                    lineHeight:28
                    }}>
                            Phase Shift is an annual tech 
                            symposium of BMS College Of 
                            Engineering and is one of the 
                            largest of its kind in South India. 
                            It encourages budding 
                            engineering students to exhibit 
                            their talents and demonstrate 
                            skills through competitions and 
                            workshops. It aims to coalesce 
                            ideas from industry in order to 
                            achieve high level of skill to help 
                            the students emerge as globally 
                            competent professionals. 
                            Participation of many industry 
                            experts and professionals 
                            creates a congenial 
                            atmosphere that knits learning
                            and fun.

                        </Text>
                        
                  </View>
                </View>
                    <View style={{
                              padding:28,
                              flex: 1,
                              flexWrap: 'wrap', 
                              justifyContent:'space-between', 
                              flexDirection:'row',
                        }}>
                          <View style={{flex:1}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutTheme')}>
                                <Image source={require('../assets/AbtTheme.png')} 
                                      style={{alignSelf: 'flex-start',height:50,width:130,borderRadius:10}} />
                            </TouchableOpacity>
                          </View>
                    
                          <View style={{flex:1}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutBMSCE')}>
                                <Image source={require('../assets/Abtbms.png')} 
                                      style={{alignSelf: 'flex-end',height:50,width:130,borderRadius:10}} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                    style={{flex:1,alignItems:'center',paddingBottom:8,}}>
                      <Text style={{color:'#fff',textDecorationLine:'underline'}} onPress={()=> Linking.openURL('http://www.bmscephaseshift.com')}>
                        Visit website
                      </Text>
                    </View>
                
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
      </Fragment>
        
      
    );
  }
}