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
  Picker
} from 'react-native';
import {Icon,ListItem,SearchBar} from 'react-native-elements';


var list = [
  {
    name:'Hardware Hackathon',
    subtitle:'Flagship',
    page:'e81'
  },
  {
    name: 'Best Manager',
    subtitle: 'Flagship',
    page:'e0'
    
  },
  {
    name: 'Sacred games',
    subtitle: 'Flagship',
    page:'e1'
  },
  {
    name:'Fury Road V5',
    subtitle: 'Flagship',
    page:'e2'
  },
  {
    name:'Smart rooms with Alexa',
    subtitle: 'Flagship',
    page:'e3'
  },
  {
    name:'General quiz',
    subtitle: 'Flagship',
    page:'e4'
  },
  {
    name:'Coders arena',
    subtitle: 'Flagship',
    page:'e5'
  },{
    name:'Logo Mania 5.0',
    subtitle: 'Flagship',
    page:'e6'
  },
  {
    name:'Maze runner',
    subtitle: 'Flagship',
    page:'e7'
  },
  {
    name:'Mech-assemble',
    subtitle: 'Flagship',
    page:'e8'
  },
  {
    name:'Treasure odyssey',
    subtitle: 'Flagship',
    page:'e9'
  },
  {
    name:'E-waste for sustainability',
    subtitle: 'Flagship',
    page:'e10'
  },
  {
    name:'Make-a-thon',
    subtitle: 'Flagship',
    page:'e11'
  },
  {
    name:'Mimic tarraince',
    subtitle: 'Flagship',
    page:'e12'
  },
  {
    name:'Inphinite hunt',
    subtitle: 'Flagship',
    page:'e13'
  },
  {
    name:'Cansat-satellite in a can',
    subtitle: 'Flagship',
    page:'e14'
  },
  {
    name:'Circuit sculpture- the battke of bidding',
    subtitle: 'Circuit',
    page:'e15'
  },
  {
    name:'The decryptor',
    subtitle: 'Circuit',
    page:'e16'
  },
  {
    name:'Plan P',
    subtitle: 'Circuit',
    page:'e17'
  },
  {
    name:'Are you an Arduino ninja?',
    subtitle: 'Circuit',
    page:'e18'
  },
  {
    name:'Circuit hunt',
    subtitle: 'Circuit',
    page:'e19'
  },
  {
    name:'Game of codes 3.0',
    subtitle: 'Coding',
    page:'e20'
  },
  {
    name:'De-energise the minibeasts',
    subtitle: 'Coding',
    page:'e21'
  },
  {
    name:'Dazzle coding',
    subtitle: 'Coding',
    page:'e22'
  },
  {
    name:'Code storm',
    subtitle: 'Coding',
    page:'e23'
  },
  {
    name:'R3verse coding',
    subtitle: 'Coding',
    page:'e24'
  },
  {
    name:'Turing\'s race',
    subtitle: 'Coding',
    page:'e25'
  },
  {
    name:'AI challenge',
    subtitle: 'Coding',
    page:'e26'
  },
  {
    name:'Code in the dark',
    subtitle: 'Coding',
    page:'e27'
  },
  {
    name:'Marathon monkeys',
    subtitle: 'Creative',
    page:'e28'
  },
  {
    name:'Make-a-mark!',
    subtitle: 'Creative',
    page:'e29'
  },
  {
    name:'Energy MP4',
    subtitle: 'Creative',
    page:'e30'
  },
  {
    name:'Flash your acoustic energy',
    subtitle: 'Creative',
    page:'e31'
  },
  {
    name:'Pitch perfect',
    subtitle: 'Creative',
    page:'e32'
  },
  {
    name:'Cruise 2.0',
    subtitle: 'Creative',
    page:'e33'
  },
  {
    name:'Shutter up!',
    subtitle: 'Creative',
    page:'e34'
  },
  {
    name:'CTRL + N',
    subtitle:'Creative',
    page:'e82'
  },
  {
    name:'Stress your brain',
    subtitle: 'General',
    page:'e35'
  },
  {
    name:'Fusion ryder',
    subtitle: 'General',
    page:'e36'
  },
  {
    name:'Gridlocked',
    subtitle: 'General',
    page:'e37'
  },
  {
    name:'Farrago',
    subtitle: 'General',
    page:'e38'
  },
  {
    name:'Zeal Exchange',
    subtitle: 'General',
    page:'e39'
  },
  {
    name:'Talking tech',
    subtitle: 'General',
    page:'e40'
  },
  {
    name:'Jam',
    subtitle: 'General',
    page:'e41'
  },
  {
    name:'Technolution',
    subtitle: 'General',
    page:'e42'
  },
  {
    name:'Potpourri',
    subtitle: 'General',
    page:'e43'
  },
  {
    name:'Of Chronos and Gaea',
    subtitle: 'General',
    page:'e44'
  },
  {
    name:'Tech junk',
    subtitle: 'Innovation',
    page:'e45'
  },
  {
    name:'A week to peak',
    subtitle: 'Innovation',
    page:'e46'
  },
  {
    name:'Shipwrecked',
    subtitle: 'Innovation',
    page:'e47'
  },
  {
    name:'Build it',
    subtitle: 'Innovation',
    page:'e48'
  },
  {
    name:'Mindcraft',
    subtitle: 'Innovation',
    page:'e49'
  },
  {
    name:'Rocketeers ready?',
    subtitle: 'Innovation',
    page:'e50'
  },
  {
    name:'Bamboolicious',
    subtitle: 'Innovation',
    page:'e51'
  },
  {
    name:'Dexter',
    subtitle: 'Innovation',
    page:'e52'
  },
  {
    name:'Fast & Furious',
    subtitle: 'Innovation',
    page:'e53'
  },
  {
    name:'Situation 2.0',
    subtitle: 'Innovation',
    page:'e54'
  },
  {
    name:'Digi-tronics',
    subtitle: 'Innovation',
    page:'e55'
  },
  {
    name:'CSR',
    subtitle: 'Innovation',
    page:'e56'
  },
  {
    name:'Product launch',
    subtitle: 'Presentation',
    page:'e70'
  },
  {
    name:'Eco paradise',
    subtitle: 'Innovation',
    page:'e57'
  },
  {
    name:'Psychic\'s survival',
    subtitle: 'Presentation',
    page:'e58'
  },
  {
    name:'Sliders',
    subtitle: 'Presentation',
    page:'e59'
  },
  {
    name:'Mega-mind',
    subtitle: 'Presentation',
    page:'e60'
  },
  {
    name:'Prose to powerpoint',
    subtitle: 'Presentation',
    page:'e61'
  },
  
  {
    name:'Paper shark',
    subtitle: 'Presentation',
    page:'e63'
  },
  {
    name:'Decision dilemma',
    subtitle: 'Presentation',
    page:'e64'
  },
  {
    name:'Review paper presentation',
    subtitle: 'Presentation',
    page:'e65'
  },
  {
    name:'Sustainable oratory',
    subtitle: 'Presentation',
    page:'e66'
  },
  {
    name:'Poster presentation',
    subtitle: 'Presentation',
    page:'e67'
  },
  {
    name:'Bio-Biz',
    subtitle: 'Presentation',
    page:'e68'
  },
  {
    name:'Present the future',
    subtitle: 'Presentation',
    page:'e69'
  },
  {
    name:'Sustain your ecosystem',
    subtitle: 'Presentation',
    page:'e71'
  },
  {
    name:'Eco Quest(Matrix)',
    subtitle: 'Quest',
    page:'e72'
  },
  {
    name:'Capture the flag',
    subtitle: 'Quest',
    page:'e73'
  },
  {
    name:'Math mania',
    subtitle: 'Quest',
    page:'e74'
  },
  {
    name:'Lights out',
    subtitle: 'Quest',
    page:'e75'
  },
  {
    name:'Energy in-quest-igation',
    subtitle: 'Quest',
    page:'e76'
  },
  {
    name:'Techno hunt',
    subtitle: 'Quest',
    page:'e77'
  },
  {
    name:'Zero hour',
    subtitle: 'Quest',
    page:'e78'
  },
  {
    name:'Fishing expedition',
    subtitle: 'Quest',
    page:'e79'
  },
  {
    name:'Crypt hunt',
    subtitle: 'Quest',
    page:'e80'
  }
]
export default class Events extends React.Component {

 
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

  constructor(props){
    super(props);
    this.state = {
      animation : new Animated.Value(0),
      search:'',
      index:-1,
      filteredArray:list
    };
  }
  
  static navigationOptions ={
    header:null,
    drawerIcon : () => (
      <Image source={require('../assets/events_1.png')} style={{height:24,width:24}}/>
    ),
    tabBarIcon:({tintColor})=>(
      <Icon name="event" color={tintColor} size={25} />
     ) 
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

shouldComponentUpdate(){
  return true;
}

render() {

  
  
  const rotateInterpolate = this.state.animation.interpolate({
  inputRange: [0, 360],
  outputRange: ["0deg", "1080deg"]

})


var filter=[]

switch(this.state.index){
  
  case 1:
    filter = list.filter(f=>f.subtitle.indexOf('Flagship')>-1)
    
    break;
  case 2:
    filter = list.filter(f=>f.subtitle.indexOf('Circuit')>-1)
    
    break;
  case 3:
    filter = list.filter(f=>f.subtitle.indexOf('Coding')>-1)
    
    break;
  case 4:
    filter = list.filter(f=>f.subtitle.indexOf('Creative')>-1)
    
    break;
  case 5:
    filter = list.filter(f=>f.subtitle.indexOf('Presentation')>-1)
   
    break;
  case 6:
    filter = list.filter(f=>f.subtitle.indexOf('Quest')>-1)
    
    break;
  default:
    filter = list  
             
    
}


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

        <View style={{flex:3}}>

         <Picker
          selectedValue={this.state.search}
          onValueChange={(itemValue,itemIndex)=>
          this.setState({search: itemValue,index:itemIndex})}
          itemStyle={{backgroundColor:'#fff'}}>
            <Picker.Item label="All" value="all"/>
            <Picker.Item label="Flagship" value="f"/>
            <Picker.Item label="Circiut" value="ci"/>
            <Picker.Item label="Coding" value="co"/>
            <Picker.Item label="Creative" value="cr"/>
            <Picker.Item label="Presentation" value="pr"/>
            <Picker.Item label="Quest" value="q"/>
          </Picker>


        
       

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
                      Events</Text>
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
        data={filter}
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