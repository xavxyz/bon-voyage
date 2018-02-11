import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

export default class Preview extends React.Component {
  static propTypes = {
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
  };

  render() {
    const { pictures: { sizes: thumbnails } } = this.props;

    const { link: image } = thumbnails[thumbnails.length - 1];

    return (
      <Wrapper>
        <ImageContainer image={image} />
      </Wrapper>
    );
  }
}

const slideIn = axis => {
  const letter = axis.toUpperCase();
  const direction = letter === 'Y' ? -1 : 1;

  return keyframes`
  0% {
    transform: translate${letter}(${direction}100%)
  }
  100% {
    transform: translate${letter}(${direction}10)
  }
`;
};

const slideX = slideIn('x');
const slideY = slideIn('y');

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    padding: 0 4rem;
  }
`;

const ImageContainer = styled.div`
  height: 50vh;
  width: 100%;
  border-radius: 2rem;
  margin-right: -4rem;
  background: url(${props => props.image});
  background-size: cover;
  background-position: right center;
  transform: translateX(10%);
  animation: ${slideX} 1s cubic-bezier(0.16, 0.5, 0.49, 1.05) forwards;

  @media (max-width: 768px) {
    transform: translateY(-10%);
    margin-right: 0;
    margin-top: -4rem;
    background-position: center top;
    animation: ${slideY} 0.4s cubic-bezier(0.16, 0.5, 0.49, 1.05) forwards;
  }
`;
