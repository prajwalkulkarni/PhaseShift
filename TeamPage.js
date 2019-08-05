import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Modal
} from 'react-native';


export default class TeamPage extends React.Component {
constructor(){
  super()
  this.state={
    showMe: true
  }
}

  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <ImageBackground source={require('../assets/imageSolar.png')} 
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
                <Image source={require('../assets/PSLOGOWHITE.png')} />
              </View>           
              <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }} >
                <View style={{
                    paddingBottom:45
                }}>
                    <Image source={require('../assets/team.png')} />
                </View>

             <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }}>   
              <Modal visible={this.state.showMe}
              onRequestClose={() => console.warn("this is a close request")}>
                <View>
                  <TouchableOpacity onPress={()=>{
                    this.setState({
                      showMe: true
                    })
                  }}>
                    <Text style={{
                      fontColor: 'white',
                      backgroundColor:'#213368',
                      borderRadius:8,
                      padding:7
                    }}>Core Committee</Text>
                  </TouchableOpacity>
                  <View style={{
                    backgroundColor: '#213368',
                    flex:1,
                    borderRadius:9,
                    padding:20,
                    paddingBottom:30,
                    color:'white'
                  }}>
                   <CoreNumbers/>
                  </View>
                </View>
              </Modal>
                <View>
                  <TouchableOpacity  onPress={()=>{
                    this.setState({
                      showMe: false
                    })
                  }}>
                    <Text style={{
                      fontColor: 'white',
                      backgroundColor:'#213368',
                      borderRadius:8,
                      padding:7,
                      color:'white'
                    }}>App Team</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: '#213368',
                    flex:1,
                    borderRadius:9,
                    padding:20,
                    paddingBottom:30,
                    color:'white'
                  }}>
                    <AppTeamNumbers/>
                    
                  </View>
               
              </View>
                
               </View>

                </ImageBackground>
        </ScrollView>
        </SafeAreaView>
      </Fragment>
        
      
    );
  }
}


class CoreNumbers extends React.Component {
 
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
          <View style={{flex:1}}>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:19, width:19, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 19, padding: 13}}> Arjun M N</Text>
              <TouchableOpacity onPress={this.dialCallA} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:19, width:19, borderRadius:6}}/>
              </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:19, width:19, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 19, padding: 13}}> Harshitha G </Text>
              <TouchableOpacity onPress={this.dialCallH} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:19, width:19, borderRadius:6}} />
              </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:19, width:19, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 19, padding: 13}}> Jayesh Nahar </Text>
              <TouchableOpacity onPress={this.dialCallJ} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:19, width:19, borderRadius:6}}/>
              </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:19, width:19, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 19, padding: 13}}>  J Job Joseph </Text>
              <TouchableOpacity onPress={this.dialCallJob} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:19, width:19, borderRadius:6}} />
              </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:19, width:19, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 19, padding: 13}}> Siddhart Athreyas </Text>
              <TouchableOpacity onPress={this.dialCallS} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:19, width:19, borderRadius:6}} />
              </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:19, width:19, borderRadius:6}} />
              <Text style={{color:'white', fontSize: 19, padding: 13}}> Tejus Gowdar </Text>
              <TouchableOpacity onPress={this.dialCallT} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >
              <Image source={require('../assets/dialer-app.png')} style={{ height:19, width:19, borderRadius:6}} />
              </TouchableOpacity>
        </View>
     </Fragment>
      );
    }
  }


class AppTeamNumbers extends React.Component {
 
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
     </Fragment>
      );
    }
  }