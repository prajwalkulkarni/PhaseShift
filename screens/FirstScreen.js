import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Gif from './Gif';
import PowerUp from './PowerUp';


export default class App extends Component {
constructor(props){
 super(props)
 this.state = {
  component : <Gif />
 }
}


componentDidMount(){

     
     this.timeoutHandle = setTimeout(()=>{
         
          this.setState({ component: <PowerUp /> })
     }, 2000);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle);
}

static navigationOptions = {
    header:null
}

render() {
return (
  this.state.component
);
}
}