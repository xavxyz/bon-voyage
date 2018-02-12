import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Information from './Information';
import Preview from './Preview';

export default class Showroom extends React.Component {
  static propTypes = {
    video: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      pictures: PropTypes.shape({
        sizes: PropTypes.arrayOf(
          PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
            link: PropTypes.string.isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired,
    }),
  };

  render() {
    const { video: { name, description, uri, pictures } } = this.props;

    return (
      <Wrapper>
        <Information name={name} description={description} />
        <Preview uri={uri} pictures={pictures} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
