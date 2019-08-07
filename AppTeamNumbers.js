import React,{Fragment} from 'react';

import {  

    View,

    TouchableOpacity,

    Linking,

    Platform,

    Image,

    ImageBackground,

    Text} from 'react-native';



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

          <ImageBackground source={require('../assets/imageSolar.png')} 
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

              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:28, width:28, borderRadius:6}} />

              <Text style={{color:'white',alignItems:'center', fontSize: 18}}> Prajwal Kulkarni</Text>

              <TouchableOpacity onPress={this.dialCallP} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:25, width:25, borderRadius:6}}/>

              </TouchableOpacity>

          </View>

        <View style={{ flex: 1,

                              
                              justifyContent:'space-between', 

                              flexDirection:'row'}}>

              <Image source={require('../assets/PSLOGOWHITE.png')} style={{alignItems: 'flex-start', height:28, width:28, borderRadius:6}} />

              <Text style={{color:'white',alignItems:'center', fontSize: 18}}>Guru Nanma</Text>

              <TouchableOpacity onPress={this.dialCallN} activeOpacity={0.7} style={{alignItems: 'flex-end'}} >

              <Image source={require('../assets/dialer-app.png')} style={{ height:25, width:25, borderRadius:6}} />

              </TouchableOpacity>

        </View>

        
        </View>

       </ImageBackground>

     </Fragment>

      );

    }

  }
