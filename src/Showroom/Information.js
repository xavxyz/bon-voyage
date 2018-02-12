import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../shared/Title';
import Text from '../shared/Text';
import Appear from '../shared/Appear';

export default class Information extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  render() {
    const { name, description } = this.props;

    return (
      <Wrapper>
        <Appear inside offset={3} duration={0.5} delay={0.3}>
          <Title>{name}</Title>
        </Appear>
        <Appear inside offset={3} duration={0.5} delay={0.4}>
          <Text content={description} />
        </Appear>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
  padding: 4rem;

  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;
