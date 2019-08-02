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

export default class AboutTheme extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <ImageBackground source={require('./assets/imageSolar.png')}  
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
                  <Image source={require('./assets/PSLOGOWHITE.png')} />
              </View>
              
              <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }} >
                  

                <View style={{
                    paddingBottom:45
                }}>
                    <Text style={{
                       height: 30,
                       wigth:25,
                       color: 'rgba(34, 189, 239, 0.99)',
                       fontStyle: 'Monsterrat',
                       fontSize: 25
                     }}>
                          About Theme
                     </Text>
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
                    }}> 
                      With the knowledge of, by far the most sought after perception, 
                      sustainability, holistically considers the need of a fair share of 
                      the generations to come in addition to ours, it's only intellectual
                      of us to channel it into precise mission-critical ventures. The right 
                      forms of Energy utilisation practices - energy derived from the 
                      naturally replenishing resources – sunlight, wind, rain, tides, 
                      waves and geothermal heat undoubtedly has an immense contribution 
                      towards being a changemaker to Sustainability. Let's call the act of 
                      reduction of our environmental footprint a bestowed preference rather 
                      than an obligation. And here just the befitting theme Phase Shift 2019 
                      brings to you - Energy and Sustainability.
                            
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