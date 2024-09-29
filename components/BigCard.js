import React from 'react';
import styled from  'styled-components';

export default class BigCard extends React.Component {
    render(){
        return(
            <Containter>
                 <Img source={
                    this.props.image
                 }/>
            </Containter>
        );
    }
}

const Containter = styled.View`
width:338px;
height:200px;
border-radius:5px;
background:white;
overflow:hidden;
margin-left:10px;
`;

const Img = styled.Image`
width:100%;
height:100%;
`;