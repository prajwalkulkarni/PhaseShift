import React,{Fragment} from 'react';

import {  

    View,

    TouchableOpacity,

    Linking,

    Platform,

    Image,

    ImageBackground,

    Text} from 'react-native';
import {Icon} from 'react-native-elements';    





export default class CoreNumbers extends React.Component {

  static navigationOptions = {
    tabBarLabel:'Core Team',
    drawerLabel:'Team',
    drawerIcon : (
      <Image source={require('../assets/team-icon-white.png')} style={{height:24,width:24}}/>
    )
  }

 

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

          <ImageBackground source={require('../assets/grad.jpg')} 
            style={{
              flex:1,
              paddingTop:20,
              paddingLeft:20,
              paddingRight:20,
              paddingBottom:20

           
            }}

            >
              
         <View style={{

           backgroundColor:'#213368',

           flex:1,

           borderRadius: 10,

           paddingTop:20,

           paddingLeft:20,

           paddingRight:20

         }}>

          <View style={{ flex: 1,

                              justifyContent:'space-between', 

                              flexDirection:'row'}}>

              <Image source={require('../assets/arjun.jpg')} style={{alignItems: 'flex-start', height:45, width:45, borderRadius:6}} />

              <Text style={{color:'white',padding:7,alignItems:'center',justifyContent:'center', fontSize: 18}}> Arjun M N</Text>

              <TouchableOpacity onPress={this.dialCallA} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:35, width:35,alignItems:'center', borderRadius:6}}/>

              </TouchableOpacity>

          </View>

        <View style={{ flex: 1,

                              
                              justifyContent:'space-between', 

                              flexDirection:'row'}}>

              <Image source={require('../assets/Tejus.jpg')} style={{alignItems: 'flex-start', height:45, width:45, borderRadius:6}} />

              <Text style={{color:'white',padding:7,justifyContent:'center',alignItems:'center', fontSize: 18}}>Tejus Gowdar </Text>

              <TouchableOpacity onPress={this.dialCallT} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:35,width:35,alignItems:'center', borderRadius:6}} />

              </TouchableOpacity>

        </View>

        <View style={{ flex: 1,

                             
                              justifyContent:'space-between', 

                              flexDirection:'row'}}>

              <Image source={require('../assets/JobJoseph.jpeg')} style={{alignItems: 'flex-start', height:45, width:45, borderRadius:6}} />

              <Text style={{color:'white',padding:7,justifyContent:'center',alignItems:'center', fontSize: 18}}> J Job Joseph </Text>

              <TouchableOpacity onPress={this.dialCallJob} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:35, width:35,alignItems:'center', borderRadius:6}}/>

              </TouchableOpacity>

        </View>

        <View style={{ flex: 1,

                              

                              justifyContent:'space-between', 

                              flexDirection:'row'}}>

              <Image source={require('../assets/harshitha.jpg')} style={{alignItems: 'flex-start', height:45, width:45, borderRadius:6}} />

              <Text style={{color:'white',padding:7,justifyContent:'center',alignItems:'center', fontSize: 18}}> Harshitha G </Text>

              <TouchableOpacity onPress={this.dialCallH} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:35, width:35,alignItems:'center', borderRadius:6}} />

              </TouchableOpacity>

        </View>

        <View style={{ flex: 1,

                            
                              justifyContent:'space-between', 

                              flexDirection:'row'}}>

              <Image source={require('../assets/SiddharthAthreyas.jpg')} style={{alignItems: 'flex-start', height:45, width:45, borderRadius:6}} />

              <Text style={{color:'white',padding:7,justifyContent:'center',alignItems:'center', fontSize: 18}}> Siddarth Athreyas </Text>

              <TouchableOpacity onPress={this.dialCallS} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:35, width:35,alignItems:'center', borderRadius:6}} />

              </TouchableOpacity>

        </View>

        <View style={{ flex: 1,

                             

                              justifyContent:'space-between', 

                              flexDirection:'row'}}>

              <Image source={require('../assets/jayesh.jpeg')} style={{alignItems: 'flex-start', height:45, width:45, borderRadius:6}} />

              <Text style={{color:'white',padding:7,justifyContent:'center',alignItems:'center', fontSize: 18}}> Jayesh Nahar </Text>

              <TouchableOpacity onPress={this.dialCallJ} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:35, width:35,alignItems:'center', borderRadius:6}} />

              </TouchableOpacity>

        </View>

        </View>

       </ImageBackground>

     </Fragment>

      );

    }

  }