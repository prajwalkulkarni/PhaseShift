import React,{Fragment} from 'react';
import {  
    View,
    TouchableOpacity,
    Linking,
    Platform,
    Image,
    ImageBackground
    Text} from 'react-native';


export default class AppTeamNumbers extends React.Component {
 
    dialCallP = () => {
   
      let phoneNumberP = '';
   
      if (Platform.OS === 'android') {
        phoneNumberP = 'tel:${8105976325}';
      }
      else {
        phoneNumberP = 'telprompt:${8105976325}';
      }
   
      Linking.openURL(phoneNumberP);
    };
    dialCallN = () => {
   
      let phoneNumberN = '';
   
      if (Platform.OS === 'android') {
        phoneNumberN = 'tel:${7411830877}';
      }
      else {
        phoneNumberN = 'telprompt:${7411830877}';
      }
   
      Linking.openURL(phoneNumberN);
    };
   
    render() {
      return (
       <Fragment>
          <ImageBackground source={require('./src/images/BACKG5.png')} 
            style={{
              flex:1
              }}>
          <View style={{
           backgroundColor:'#213368',
           borderRadius: 10,
           paddingTop:30,
           paddingLeft:20
           paddingRight:20          
         }}>
          <View>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:23, width:23, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 14, padding: 5}}> Prajwal</Text>
              <TouchableOpacity onPress={this.dialCallP} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')}  style={{ height:22, width:22, borderRadius:6}}/>
              </TouchableOpacity>
        </View>
        <View>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:23, width:23, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 14, padding: 5}}> Guru Nanma </Text>
              <TouchableOpacity onPress={this.dialCallN} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')}  style={{ height:22, width:22, borderRadius:6}} />
              </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
     </Fragment>
      );
    }
  }
