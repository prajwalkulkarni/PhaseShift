import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  FlatList,
} from 'react-native';
import {Icon,ListItem} from 'react-native-elements';
import {createStackNavigator,createAppContainer,createSwitchNavigator, } from 'react-navigation';
import w0 from '../details/w0';
import w1 from '../details/w1'


const list = [
  {
    name:'Do it yourself?',
    page:'w0'
  },
  {
    name:'Sustainable software design for acoustic machines',
    page:'w1'
  },
  {
    name:'Stabilized block',
    page:'w2'
  },
  {
    name:'Data science and it\'s applications',
    page:'w3'
  },
  {
    name:'UI/UX',
    page:'w4'
  },
  {
    name:'Hands-on workshop on machine learning',
    page:'w5'
  },
  {
    name:'How to build a software bot',
    page:'w6'
  },
  {
    name:'Workshop on desgin on PV panels',
    page:'w7'
  },
  {
    name:'ZEAL',
    page:'w8'
  },
  {
    name:'Image processing with machine learning',
    page:'w10'
  },
  {
    name:'Delmia process planning',
    page:'w11'
  },
  {
    name:'Automation & robotics',
    page:'w12'
    
  },
  {
    name:'Innoview',
    page:'w13'
  },
  {
    name:'Assets utilisation using IoT',
    page:'w14'
  },
  {
    name:'Workshop on sustainability',
    page:'w15'
  },
  {
    name:'Hands-on workshop on testing contaminants in samples',
    page:'w16'
  },
  {
    name:'Raspberry Pi',
    page:'w17'
  },
  {
    name:'Game development workshop',
    page:'w18'
  },
  {
    name:'Technical paper writing',
    page:'w19'
  },
  {
    name:'Workshop on harvest of solar power',
    page:'w20'
  },
  {
    name:'Workshop on RLFP(Requirements,functional,logical and physical view) from dassault systems',
    page:'w21'
  },
  {
    name:'Workshop on Solar PV and design technology',
    page:'w22'
  },
  {
    name:'Workshop on IoT and it\'s applications',
    page:'w23'
  },
  {
    name:'Building energy efficient smart homes',
    page:'w24'
  },
  {
    name:'Talk to green buildings',
    page:'w25'
  },
  {
    name:'Electric vehicle tech talk',
    page:'w26'
  },
  {
    name:'Deep learning for computer applications',
    page:'w27'
  }
]





export default class Workshop extends React.Component {

 
 
  keyExtractor = (item,index) => index.toString()

  renderItem = ({item,index}) => (
    <ListItem
     title = {item.name}
     subtitle={item.subtitle}
     topDivider={true}
     bottomDivider={true}
     onPress ={()=>this.props.navigation.navigate(item.page)}
     />
  )
  state = {
    animation : new Animated.Value(0),
  }

  shouldComponentUpdate(){
    return false;
  }
  
  



  
  static navigationOptions ={
    header:null,
    drawerIcon : () => (
      <Image source={require('../assets/events_1.png')} style={{height:24,width:24}}/>
    ), 
    tabBarIcon:({tintColor})=>(
      <Icon name="event" color={tintColor} size={25} />
     ) ,
  }
  
startAnimation = () =>
{
Animated.sequence([
Animated.timing(this.state.animation , {
  toValue: 360,
  duration: 1000,
  easing:Easing.linear,
}),
Animated.timing(this.state.animation , {
  toValue: 0,
  duration: 0,
}),
]).start();

}
render() {
const rotateInterpolate = this.state.animation.interpolate({
  inputRange: [0, 360],
  outputRange: ["0deg", "1080deg"]

})





return(
  
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
          <Icon name='sort' color='#ffffff' size={35}  onPress= {()=>this.props.navigation.openDrawer()}/>  

        </View>

        <View style={{flex:1,alignItems:'flex-end'}}>
        
       

        </View>
        
        
      </View>
      <View style={{
        alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:10,
      padding:20
      }} >
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableWithoutFeedback onPress=
                  {this.startAnimation}>
                  <Animated.View style={{paddingBottom:28,
                  transform : [
                    {
                       rotateY: rotateInterpolate
                    } ] }}>
                      <Text style={{fontSize: 45, letterSpacing: 0.3, color:'white', justifyContent: 'center', alignItems: 'center'}}>
                      Workshops</Text>
                  </Animated.View>

                  </TouchableWithoutFeedback>
                  </View>


        <View style={{backgroundColor: 'rgba(0,0,139, 0.1)', borderRadius:15, width:320}}>

        <FlatList
        removeClippedSubviews={true}
        maxToRenderPerBatch={45}
        updateCellsBatchingPeriod={30}
        initialNumToRender={8}
        legacyImplementation={true}
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}/>
        </View>
            </View>
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    </Fragment>

);
}
}