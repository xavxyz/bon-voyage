import React from 'react';
import styled from 'styled-components';
import Appear from '../shared/Appear';
import Title from '../shared/Title';
import Text from '../shared/Text';
import AddVideo from './AddVideo';

export default class Welcome extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Appear inside offset={-1} duration={0.3} delay={0.1}>
            <Title>Bon Voyage</Title>
          </Appear>
          <Appear inside offset={-1} duration={0.3} delay={0.2}>
            <Text content="Add a video in the bar below" />
          </Appear>
        </Header>
        <Appear inside offset={-1} duration={0.3} delay={0.3}>
          <WidthContainer>
            <AddVideo />
          </WidthContainer>
        </Appear>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WidthContainer = styled.div`
  max-width: 1000px;
`;
