import React, { Component } from 'react';


import { StyleSheet, View, Modal,Dimensions, Image } from 'react-native';
import {Icon} from 'react-native-elements';
import ImageViewer from 'react-native-image-zoom-viewer';
import PinchZoomView from 'react-native-pinch-zoom-view';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Map extends Component {
  static navigationOptions ={
    drawerIcon : () => (
      <Image source={require('../assets/map_white.png')} style={{height:24,width:24}}/>
    )
  }
 

  render() {

   
    return (

      <View style={styles.MainContainer}>


      
<View style={{
        
        padding:20,
        backgroundColor:'#213368',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row'
      }}>

        <View style={{flex:1,alignItems:'flex-start',paddingTop:10}}>
          <Icon name='sort' color='#ffffff' size={35}  onPress= {()=>this.props.navigation.openDrawer()}/>  

        </View>

       
        
        
      </View>
        

         


        <ImageZoom cropWidth={Dimensions.get('window').width}
           cropHeight={Dimensions.get('window').height}
           imageHeight={600}
           imageWidth={450}>

  
          <Image source={require('../assets/mapforapp.png')} style={{width:450, height:600,paddingBottom:20}}  />

          </ImageZoom>

          </View>
         

        

     

    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  
  },
});