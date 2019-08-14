import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground
} from 'react-native';

import {Icon} from 'react-native-elements';





export default class Workshop extends React.Component {

  
  render() {
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
                  <Icon name='sort' color='#ffffff' size={35} onPress= {()=>this.props.navigation.openDrawer()}/>  

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
                   <Text style={{
                       color: 'white',
                       fontStyle: 'Monsterrat',
                       fontSize: 45,
                       alignItems:'center',
                       justifyContent:'center'
                     }}>
                          Workshop
                     </Text>
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