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
import CountDown from 'react-native-countdown-component';

export default class PowerUp extends React.Component {
  static navigationOptions={
    header:null
  }
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('../assets/screen1.png')} 
            style={{
              flex:1,
              padding:20,
              resizeMode:'stretch',
              alignItems:'center',
              
              
              
              }}>

          <SafeAreaView>
            <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            
             <View style={{alignItems:'center',
             justifyContent:'flex-end',
             flex:1}}>
              <View style={{
                    alignItems:'center',
                    justifyContent:'flex-end',
                    flex:1,
                  
                }}>
                  <CountDown
                    until={60*11+60*45+10}
                    onFinish={()=> alert('finish')}
                    digitStyle={{backgroundColor:'transparent'}}
                    digitTxtStyle={{color:'#fff'}}
                    timeLabelStyle={{color:'#fff'}}
                    size={30}/>
                   
              </View>
      
      
              <View style={{
                    alignItems:'center',
                    justifyContent: 'flex-end',
                    flex:1,
                    padding:50
                }}>

                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('AboutUs')} >
                    <Image source={require('../assets/button_cta.png')}/>
                    </TouchableOpacity>
              </View>

              </View>
                
            
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
      </Fragment>
        
      
    );
  }
}