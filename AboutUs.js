import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import {Header,Left,Right,Icon} from 'native-base';

export default class AboutUs extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <ImageBackground source={require('./assets/Image2.png')} 
            style={{
              width: '100%',
              flex:1,
              height: '100%',
              resizeMode: 'cover',
              }}>

                  

              <View style={{
        
                flex:1,
                padding:20,
                
                paddingTop:10,
                flexDirection:'row'
              }}>

                <View style={{flex:1,alignItems:'flex-start'}}>
                <Icon name="menu" style={{color:'#fff'}} onPress= {()=>this.props.navigation.openDrawer()}/>  

                </View>

                <View style={{flex:1,alignItems:'flex-end'}}>
                <Image source={require('./assets/PSLOGOWHITE.png')}  />

                </View>
                
                
              </View>
              
              <View style={{
                  flex:3,
                  alignItems: 'center',
                  justifyContent: 'center'
              }} >
                  

                <View style={{
                    paddingBottom:45
                }}>
                    <Image source={require('./assets/aboutUs.png')} />
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
                              padding:35,
                              flex: 1,
                              flexWrap: 'wrap', 
                              justifyContent:'space-between', 
                              flexDirection:'row',
                        }}>
                          <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutTheme')}>
                                <Image source={require('./assets/ButtonCTA.png')} 
                                      style={{alignSelf: 'flex-start'}} />
                            </TouchableOpacity>
                          </View>
                    
                          <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutBMSCE')}>
                                <Image source={require('./assets/ButtonCTA_2.png')} 
                                      style={{alignSelf: 'flex-end'}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
        </ScrollView>
        </SafeAreaView>
      </Fragment>
        
      
    );
  }
}
