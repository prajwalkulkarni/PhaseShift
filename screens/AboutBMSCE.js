import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  ImageBackground
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import {Icon} from 'react-native-elements';

export default class AboutBMSCE extends React.Component {
  static navigationOptions = {
    drawerLabel:'About BMSCE ',
    drawerIcon : (
      <Icon name='school' color='#ffffff' size={25}/>
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
        paddingTop:10,
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
                    About BMSCE</Text>
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
                       B.M.S. College of Engineering, Bengaluru was founded in the year 1946
                       by Late Sri B.M. Sreenivasaiah, a great visionary and philanthropist and
                       later nurtured by his illustrious son Late Sri B.S. Narayan. BMSCE is the
                       first private sector initiative from the erstwhile state of Mysore towards
                       engineering education in India. Started with only three undergraduate and
                       15 postgraduate programmes both in conventional and emerging areas.
                       Fifteen of its departments are recognised as Research Centres offering
                       Ph.D. degree in Science, Engineering and Management. Modernization,
                       expansion and sophistication have not changed the basic philosophy of
                       education at BMSCE,
                       which continually stay put with the real and ever changing technologies.

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
