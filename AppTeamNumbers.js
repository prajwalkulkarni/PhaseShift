import React,{Fragment} from 'react';
import {  
    View,
    TouchableOpacity,
    Linking,
    Platform,
    Image,
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
          <View style={{
           backgroundColor:'#213368',
           borderRadius: 10,
           padding:15
         }}>
          <View>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:19, width:19, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 19, padding: 13}}> Prajwal</Text>
              <TouchableOpacity onPress={this.dialCallP} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} />
              </TouchableOpacity>
        </View>
        <View>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:19, width:19, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 19, padding: 13}}> Guru Nanma </Text>
              <TouchableOpacity onPress={this.dialCallN} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} />
              </TouchableOpacity>
        </View>
        </View>
     </Fragment>
      );
    }
  }