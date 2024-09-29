import React from 'react';
import styled from  'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";


export default class MedCard extends React.Component {
    render() {
        return(
          <Container>
                <Image source={this.props.image}></Image>
                <LinearGradient
                    colors={["rgba(0,0,0,0)","rgba(0,0,0,0.8)"]}
                    style={{position:"absolute",width:"100%",height:"50%",top:55}}
                ></LinearGradient>
                <TextContainer> 
                <Ionicons name="ios-play" color="white" size={16}></Ionicons>
                <Text>1.00.35 - OCT 12</Text>
                </TextContainer>
          </Container>
        );
    }
}

    const Container=styled.View`
    width:197px;
    height:110px;
    border-radius:5px;
    background:white;
    overflow:hidden;
    margin-left:5px;
    `;

    const Image=styled.Image`
    width:100%;
    height:100%;
    `;

    const Text=styled.Text`
    padding-left:8px;
    font-weight:500;
    font-size:14px;
    color:white;   
    `;

    const TextContainer=styled.View`
    position:absolute;
    top:87px;
    left:10px;
    align-items:center;
    flex-direction:row;
   `;