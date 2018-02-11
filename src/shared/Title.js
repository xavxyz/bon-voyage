import React from 'react';
import styled from 'styled-components';

class Title extends React.Component {
  render() {
    const { children } = this.props;

    if (typeof children !== 'string') {
      throw new Error('Title only accepts children as a string!');
    }

    return children
      .split(' ')
      .reduce((element, word, index) => {
        if (index % 2) {
          return [
            ...element.slice(0, element.length - 1),
            element[element.length - 1].concat(word),
          ];
        }

        return [...element, [word]];
      }, [])
      .map((line, index) => <Heading key={index}>{line.join(' ')}</Heading>);
  }
}

export const Heading = styled.div`
  font-size: 8vw;
  font-weight: 800;
  text-transform: lowercase;
  letter-spacing: -0.35vw;
  line-height: 1;
  margin-bottom: 2rem;
`;

export default Title;
