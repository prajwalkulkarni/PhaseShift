import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableWithoutFeedback ,
  Image,
  ImageBackground,
  Easing,
  Dimensions
} from 'react-native';
import {Icon} from 'react-native-elements';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Schedule extends React.Component {
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
        <Icon name='schedule' color={tintColor} size={25} />
       ) ,
    
    drawerIcon : (
      <Image source={require('../assets/schedule_i.png')} style={{height:24,width:24}}/>
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



return(
<Fragment>
<StatusBar barStyle="dark-content" />
<ImageBackground source={require('../assets/grad.jpg')}
style={{
  width: '100%',
  flex:1,
  height: '100%',
  resizeMode:'stretch',
  }}>
<SafeAreaView>
<ScrollView
    contentContainerStyle={{alignItems:'center'}}>
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
    paddingBottom:0,
    padding:15
    }} >
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableWithoutFeedback onPress=
                {this.startAnimation}>
                <Animated.View style={{paddingBottom:15,
                transform : [
                  {
                     rotateY: rotateInterpolate
                  } ] }}>
                    <Text style={{fontSize: 45, letterSpacing: 0.3, color:'white', justifyContent: 'center', alignItems: 'center'}}>
                    Schedule</Text>
                </Animated.View>

                </TouchableWithoutFeedback>
                </View>
                </View>
                

  <View style={{padding:0}}>
          <Image source={require('../assets/s1.jpg') } style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s2.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s3.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s4.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s5.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s6.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s7.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s8.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s9.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s10.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s11.jpg')} style={{resizeMode:'stretch',flex:0.8,width:380}}/>
          <Image source={require('../assets/s12.jpg')} style={{resizeMode:'stretch',flex:10.5,width:380,paddingBottom:40}}/>

          </View>
          
  </ScrollView>
  </SafeAreaView>
  </ImageBackground>
  </Fragment>

);
}
}