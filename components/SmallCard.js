import React from 'react';
import styled from  'styled-components';


export default class SmallCard extends React.Component {
    render() {
        return(
          <Container>
                <Image source={this.props.image}></Image>
          </Container>
        );
    }
}

    const Container=styled.View`
    width:108px;
    height:160px;
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