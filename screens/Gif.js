import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
import PowerUp from './PowerUp';



export default class Gif extends React.Component {

  componentDidMount(){
    this.timeoutHandle = setTimeout(()=>{
      this.props.navigation.navigate('PowerUp')
    },1500);
  }

  componentWillMount(){
    clearTimeout(this.timeoutHandle)
  }

  

  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />

      <ImageBackground source={require('../assets/Windmill3.gif')} 
            style={{
              width: '100%',
              flex:1,
              height: '100%',
              resizeMode: 'cover',
              }}>

              </ImageBackground>

</Fragment>


);
}
}