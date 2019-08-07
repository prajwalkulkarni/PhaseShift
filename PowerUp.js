import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground
} from 'react-native';

export default class PowerUp extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <ImageBackground source={require('../assets/Image2.png')} 
            style={{
              width: '100%',
              flex:1,
              height: '100%',
              resizeMode: 'cover',
              }}>

              <View style={{
                alignItems:'center',
                justifyContent: 'center',
                resizeMode: 'contain',
                padding:10,
                flex:1,
                paddingRight:0,
                paddingTop:10
              }}>
                <Image source={require('../assets/adtl_logo_white.png')} />
              </View>
              
              <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }} >
                  

                <View style={{
                    
                    flex:2
                }}>
                    <Image source={require('../assets/PSLOGOWHITE.png')} />
                </View>
                <View style={{
                   
                    flex:1
                }}>
                    <Image source={require('../assets/phase_shift_2019.png')} />
                </View>
                <View style={{
                    flex:1
                }}>
                    <Image source={require('../assets/september_14_th_15_th.png')} />
                </View>
                <View style={{
                    flex:1,
                    alignItems:'center'
                }}>
                    <Image source={require('../assets/energy_sustainability.png')} />
                </View>
      
                <View style={{
                    paddingBottom:45,
                    flex:1
                }}>

                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('AboutUs')} >
                    <Image source={require('../assets/button_cta.png')}/>
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