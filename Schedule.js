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
  ImageBackground
} from 'react-native';
import {Icon} from 'react-native-elements';


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
Animated.timing(this.state.animation , {
toValue: 360,
duration: 3000,
}).start();

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
              justifyContent: 'center'
              }} >
                  

                <View style={{
                    paddingBottom:45
                }}>
                    <TouchableWithoutFeedback onPress=
                    {this.startAnimation}>
                    <Animated.View style={{paddingBottom:28,
                    transform : [
                      {
                         rotateY: rotateInterpolate
                      } ] }}>
                        <Text style={{fontSize: 45, letterSpacing: 0.3, color:'white', justifyContent: 'center', alignItems: 'center'}}>
                        Schedule</Text>
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
                    textAlign:'auto',
                    fontStyle: 'Poppins-ExtraLight',
                    paddingLeft: 9,
                    fontSize: 18,
                    color: '#fff',
                    lineHeight: 28
                    }}> Info will be updated soon...
                            
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