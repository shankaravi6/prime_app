import React from "react";
import styled from 'styled-components';

class VideoScreen extends React.Component {
    render() {
        return(
            <Container>
                <Text>Fuck Video</Text>
            </Container>
        )
    }
}

export default VideoScreen;

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 25px;
`;