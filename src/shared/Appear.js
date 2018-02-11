import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

export default class Appear extends React.Component {
  static propTypes = {
    offset: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    inside: PropTypes.bool,
    outside: PropTypes.bool,
  };

  // note: these values could be defined by the theme
  static defaultProps = {
    offset: 10,
    duration: 1,
    delay: 0,
  };

  render() {
    return <Container {...this.props}>{this.props.children}</Container>;
  }
}

const animation = ({ disappear, offset }) => keyframes`
  ${disappear ? 'from' : 'to'} {
    opacity: 1;
    transform: translateY(0);
  }
  ${disappear ? 'to' : 'from'} {
    opacity: 0;
    transform: translateY(${-offset}rem);
  }
`;

const Container = styled.div`
  ${({ inside, outside, offset, duration, delay }) => {
    if (inside && outside) {
      throw new Error(
        'Appear only accept inside OR outside. Please check your render method'
      );
    }

    if (!inside && !outside) {
      return '';
    }

    const frames = animation({ disappear: outside === true, offset });
    return `animation: ${frames} ${duration}s cubic-bezier(0.16, 0.5, 0.49, 1.05) forwards ${delay}s;`;
  }};
`;
