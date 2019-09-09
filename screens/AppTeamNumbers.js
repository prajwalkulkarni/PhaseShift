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



export default class AppTeamNumbers extends React.Component {

 

    dialCallP = () => {

   

      let phoneNumber = '';

   

      if (Platform.OS === 'android') {

        phoneNumber = 'tel:${8105976325}';

      }

      else {

        phoneNumber = 'telprompt:${8105976325}';

      }

   

      Linking.openURL(phoneNumber);

    };

    dialCallN = () => {

   

      let phoneNumber = '';

   

      if (Platform.OS === 'android') {

        phoneNumber = 'tel:${7411830877}';

      }

      else {

        phoneNumber = 'telprompt:${7411830877}';

      }

   

      Linking.openURL(phoneNumber);

    };

    static navigationOptions={
      tabBarLabel:'App team'
    }

    

   

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

           justifyContent:'center',

           flex:0.4,

           borderRadius: 10,

           paddingTop:20,

           paddingLeft:20,

           paddingRight:20

         }}>

          <View style={{ flex: 1,

                              justifyContent:'space-between', 

                              flexDirection:'row'}}>

              <Image source={require('../assets/PrajwalKulkarni.jpeg')} style={{alignItems: 'flex-start', height:45, width:45, borderRadius:6}} />

              <Text style={{color:'white',padding:7,alignItems:'center',justifyContent:'center', fontSize: 18}}> Prajwal Kulkarni</Text>

              <TouchableOpacity onPress={this.dialCallP} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:35, width:35,alignItems:'center', borderRadius:6}}/>

              </TouchableOpacity>

          </View>

        <View style={{ flex: 1,

                              
                              justifyContent:'space-between', 

                              flexDirection:'row'}}>

              <Image source={require('../assets/GuruNanma.jpeg')} style={{alignItems: 'flex-start', height:45, width:55, borderRadius:6}} />

              <Text style={{color:'white',padding:7,alignItems:'center', fontSize: 18}}>Guru Nanma</Text>

              <TouchableOpacity onPress={this.dialCallN} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:35, width:35,alignItems:'center', borderRadius:6}} />

              </TouchableOpacity>

        </View>

        
        </View>

       </ImageBackground>

     </Fragment>

      );

    }

  }