import React from "react";
import { TouchableOpacity,Dimensions,Animated, TouchableWithoutFeedback,Alert } from "react-native";
import styled from 'styled-components';
import {connect} from 'react-redux';


function mapStateToProps (state) {
  return {menu:state.menu};
}

function mapDispatchToProps (dispatch) {
  return {
    closeLogin:() =>
    dispatch({
       type:"CLOSELOGIN"
    })
  };
}



const screenHeight = Dimensions.get("screen").height;

class Login extends React.Component {

state ={
    email:"",
    password:"",
    top:new Animated.Value(screenHeight)
};

handleLogin=()=>{
    const email=this.state.email;
    const password=this.state.password;

    firebaseApp
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(function(error){
        Alert.alert("Error",error.message);
    })
    .then(response=>{
        this.setState({});
    })
}


componentDidUpdate () {
  if(this.props.menu=="openLogin") {
    Animated.timing(this.state.top, {toValue:0,duration:0}).start();
  }
  if(this.props.menu=="closeLogin") {
    Animated.timing(this.state.top, {toValue:screenHeight,duration:0}).start();
  }
}

tapBackground=()=>{
  this.props.closeLogin();
}
    render() {
        return(
            <AnimatedContainer style={{top:this.state.top}}>
            <TouchableWithoutFeedback onPress={this.tapBackground} style={{position:"absolute",top:0,left:0}}> 
            <BlackScreen></BlackScreen>
            </TouchableWithoutFeedback>
                <Box>
                <Text>
                    Member Login
                </Text>
                <TextIn placeholder="Email" keyboardType="email-address" 
                onChangeText={(email)=>{this.setState({email:email})}}>

                </TextIn>
                <TextIn placeholder="Password" secureTextEntry={true}
                onChangeText={(password)=>{this.setState({password:password})}}>
                </TextIn>
                <TouchableOpacity onPress={this.handleLogin}>
                <ButtonView>
                <ButtonText>Login</ButtonText>
                </ButtonView>
                </TouchableOpacity>              
                </Box>
              
            </AnimatedContainer>

        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

const Container = styled.View`
 position:absolute;
  width: 100%;
 height: 100%;
 top:0;
 left:0;
justify-content: center;
align-items: center;
 `;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const BlackScreen = styled.View`
background: rgba(0,0,0,0.65);
position:absolute;
  width: 100%;
 height: 100%;
 top:0;
 left:0;
justify-content: center;
align-items: center;
`;

const Box = styled.View`
  width: 332px;
  height: 346px;
  margin-top:35px;
  background: white;
  border-radius: 25px;
  
`;

const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color:black;
  text-align: center;
  margin-top: 50px;
`;

const TextIn = styled.TextInput`
  margin-top: 20px;
  border-radius: 15px;
  background: lightgrey;
  width:307px;
  height: 38px;
  margin-left: 13px;
`;

const ButtonText = styled.Text`
  color:white;
  font-weight: 600;
  font-size: 18px;
`;

const ButtonView = styled.View`
  background: #48A7FF;
  border-radius: 10px;
  width:187px;
  height:38px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-left: 73px;
`;