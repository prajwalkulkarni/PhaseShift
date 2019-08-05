import React,{Fragment} from 'react';
import {  
    View,
    TouchableOpacity,
    Linking,
    Platform,
    Image,
    ImageBackground
    Text} from 'react-native';

export default class CoreNumbers extends React.Component {
 
    dialCallA = () => {
   
      let phoneNumber = '';
   
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${9535247608}';
      }
      else {
        phoneNumber = 'telprompt:${9535247608}';
      }
   
      Linking.openURL(phoneNumber);
    };
    dialCallH = () => {
   
      let phoneNumber = '';
   
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${9686550555}';
      }
      else {
        phoneNumber = 'telprompt:${9686550555}';
      }
   
      Linking.openURL(phoneNumber);
    };
    dialCallJ = () => {
   
      let phoneNumber = '';
   
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${8123883179}';
      }
      else {
        phoneNumber = 'telprompt:${8123883179}';
      }
   
      Linking.openURL(phoneNumber);
    };
    dialCallJob = () => {
   
      let phoneNumber = '';
   
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${7259680730}';
      }
      else {
        phoneNumber = 'telprompt:${7259680730}';
      }
   
      Linking.openURL(phoneNumber);
    };
    dialCallS = () => {
   
      let phoneNumber = '';
   
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${9945156263}';
      }
      else {
        phoneNumber = 'telprompt:${9945156263}';
      }
   
      Linking.openURL(phoneNumber);
    };
    dialCallT = () => {
   
      let phoneNumber = '';
   
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${9986992948}';
      }
      else {
        phoneNumber = 'telprompt:${9986992948}';
      }
   
      Linking.openURL(phoneNumber);
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
              <Text style={{color:'white', fontSize: 14, padding: 5}}> Arjun M N</Text>
              <TouchableOpacity onPress={this.dialCallA} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:23, width:23, borderRadius:6}}/>
              </TouchableOpacity>
        </View>
        <View>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:23, width:23, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 14, padding: 5}}> Harshitha G </Text>
              <TouchableOpacity onPress={this.dialCallH} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:23, width:23, borderRadius:6}} />
              </TouchableOpacity>
        </View>
        <View>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:23, width:23, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 14, padding: 5}}> Jayesh Nahar </Text>
              <TouchableOpacity onPress={this.dialCallJ} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:23, width:23, borderRadius:6}}/>
              </TouchableOpacity>
        </View>
        <View>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:23, width:23, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 14, padding: 5}}>  J Job Joseph </Text>
              <TouchableOpacity onPress={this.dialCallJob} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:23, width:23, borderRadius:6}} />
              </TouchableOpacity>
        </View>
        <View>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:23, width:23, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 14, padding: 5}}> Siddhart Athreyas </Text>
              <TouchableOpacity onPress={this.dialCallS} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:23, width:23, borderRadius:6}} />
              </TouchableOpacity>
        </View>
        <View>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:23, width:23, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 14, padding: 5}}> Tejus Gowdar </Text>
              <TouchableOpacity onPress={this.dialCallT} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:23, width:23, borderRadius:6}} />
              </TouchableOpacity>
        </View>
        </View>
       </ImageBackground>
     </Fragment>
      );
    }
  }
  
  
