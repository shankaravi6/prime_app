import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import BigCard from "../components/BigCard";
import MedCard from '../components/MedCard';
import { Ionicons } from "@expo/vector-icons"
import {TouchableOpacity,Animated} from "react-native";
import Menu from '../components/Menu';
import {connect} from "react-redux";
import Login from '../components/Login';
import SmallCard from '../components/SmallCard';
import Loading from '../components/Loading';



function mapStateToProps(state) {
  return {menu: state.menu}
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () => dispatch({
      type: "OPENMENU"      
    }),
    openLogin:() => dispatch({
      type:"OPENLOGIN"
    })
  }
}

class HomeScreen extends React.Component {
state = {
  left: 7,
  top: new Animated.Value(900),
  opacity:new Animated.Value(0)
};

componentDidUpdate() {
  this.blackscreen()
}

blackscreen() {
  if(this.props.menu=="openMenu") {
    Animated.timing(this.state.top, {toValue:0,duration:10}).start();
    Animated.timing(this.state.opacity, {toValue:0.6,duration:500}).start();
  }
  if(this.props.menu=="closeMenu"){
    Animated.spring(this.state.top, {toValue:900}).start();
    Animated.spring(this.state.opacity, {toValue:0}).start();
  }
}

  render() {
 return (
    <Root>
    
    <Main>
       
      <StatusBar hidden/>
      <Header>
      <TouchableOpacity 
      onPress={this.props.openLogin}
      style={{
          position: "absolute",
          top:6,
          left:this.state.left,
          zIndex:100
        }}
      >
        <Ionicons name="ios-menu" size={28} color="black"></Ionicons>
      </TouchableOpacity>
        <Logo source={require("../assets/prime.png")} style={{width:127,height:45}}/>
        <Profile source={require("../assets/bluej.png")}></Profile>
      </Header>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
      <BigCardContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {
          BigCardData.map((data,index)=>(
           <TouchableOpacity key={index} >
            <BigCard image={data.image}/>
            </TouchableOpacity>
          ))
        }
     </ScrollView>
      </BigCardContainer>
      <CText>Continue Watching</CText>
      <MedCardContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          MedCardData.map((data,index)=>(
           <TouchableOpacity key={index} >
            <MedCard image={data.image}/>
            </TouchableOpacity>
          ))
        }
        </ScrollView>
      </MedCardContainer>
      </ScrollView>
      <SText>Related Movies</SText>
      <SmallCardContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          SmallCardData.map((data,index)=>(
           <TouchableOpacity key={index} >
            <SmallCard image={data.image}/>
            </TouchableOpacity>
          ))
        }
        </ScrollView>
      </SmallCardContainer>     
    </Main>
    <AnimatedBlack style={{top:this.state.top,opacity:this.state.opacity}}></AnimatedBlack>
    <Menu></Menu>
    <Login></Login>
    </Root>
  );
}
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);

const Main = styled.View`
flex: 1;
background-color: white;
`;

const Some = styled.Text`
font-size:40px;
color: darkblue;
`;

const Header =styled.View`
width: 100%;
height: 46px;
background: white;
`;

const Profile =styled.Image`
top:3px;
right:15px;
position:absolute;
width: 38px;
height:38px;
border-radius:22px;
`;

const Logo =styled.Image`
margin-left:30px;
`;

const BigCardContainer =styled.View`
margin-top:20px;
margin-left:0px;
`;

const CText =styled.Text`
color:black;
font-weight:bold;
margin-top:18px;
font-size:18px;
margin-left:10px;
`;

const SText =styled.Text`
color:black;
font-weight:bold;
margin-top:450px;
position: absolute;
font-size:18px;
margin-left:10px;
`;

const MedCardContainer=styled.View`
    margin-left:5px;
    margin-top:15px;
`;


const SmallCardContainer=styled.View`
    margin-left:5px;
    position:absolute;
    margin-top:490px;
    margin-bottom: 200px;
`;

const Root = styled.View`
flex:1;
`;

const Black = styled.View`
  position: absolute;
  width:100%;
  height: 100%;
  opacity: 0.6;
  background-color: black;
`;

const AnimatedBlack = Animated.createAnimatedComponent(Black);


const BigCardData = [
  {
    image: require("../assets/b1.jpg")
  },
  {
    image: require("../assets/b2.jpg")
  },
  {
    image: require("../assets/b3.jpg")
  },
  {
    image: require("../assets/b4.jpg")
  }
];



const MedCardData = [
  {
      image: require("../assets/m1.jpg")
  },
  {
    image: require("../assets/m2.jpg")
  },
  {
    image: require("../assets/m3.jpg")
  },
  {
    image: require("../assets/m4.jpg")
  }
];

const SmallCardData = [
  {
    image: require("../assets/s1.jpg")
  },
  {
    image: require("../assets/s2.jpg")
  },
  {
    image: require("../assets/s3.jpg")
  },
  {
    image: require("../assets/s4.jpg")
  },
  {
    image: require("../assets/s5.jpg")
  }
];
