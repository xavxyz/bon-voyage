import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Text extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    hasError: PropTypes.bool,
  };

  render() {
    return this.props.content.split('\n').map((line, index) => (
      <Line key={index} hasError={this.props.hasError}>
        {line.trim()}
      </Line>
    ));
  }
}

export const Line = styled.div`
  font-size: 2rem;
  opacity: 0.6;
  ${props => props.hasError && `color: crimson;`};
`;
