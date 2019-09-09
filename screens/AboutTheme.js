import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  ImageBackground
} from 'react-native';

import {Icon} from 'react-native-elements';
import { TouchableRipple } from 'react-native-paper';

export default class AboutTheme extends React.Component {

  static navigationOptions = {
    drawerLabel:'Theme ',
    drawerIcon:(
      <Icon name='colorize' color='#ffffff' size={25}/>
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
                alignItems: 'center',
              justifyContent: 'center',
              padding:10,
              paddingBottom:0
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
                    About Theme</Text>
                </Animated.View>

                </TouchableWithoutFeedback>
                </View>

                <View style={{
                    padding:28,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                  

                    <Text style={{
                    letterSpacing:0.16,
                    textAlign:'justify',
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

               
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
      </Fragment>
        
      
    );
  }
}