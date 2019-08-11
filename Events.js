import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import {Icon} from 'react-native-elements';



export default class Events extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      dataSource: null
    }

  }

  componentDidMount() {
    return fetch('https://prajwalkulkarni.github.io/PhaseShift/JsonFiles/events.json')
    .then((response)=> response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.events
      })

    })

    .catch((error) => {
      console.log(error)

    });
  }
  
 
  static navigationOptions ={
    drawerIcon : () => (
      <Image source={require('../assets/events_1.png')} style={{height:24,width:24}}/>
    ),
    tabBarIcon:({tintColor})=>(
      <Icon name="event" color={tintColor} size={25} />
     ) 
  }
  render() {

    if(this.setState.isLoading){
      return(
        <View style={StyleSheet.container}>
          <ActivityIndicator/>
        </View>
      )
    }

    else{

      let event_s = this.state.dataSource.map((val,key) => {
        return <View key={key} style={styles.item}>
          <Text>{val.A}</Text>
        </View>
      });

    

    
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('../assets/imageSolar.png')} 
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
                    <Image source={require('../assets/Events.png')} />
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
                    }}> {event_s}
                            
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
}


const styles = StyleSheet.create({

  item:{
    flex:1,
    alignItems:'center',
    color:'green'

  }
})