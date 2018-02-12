import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

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

  mediaQuery = window.matchMedia('(max-width: 768px)');

  state = {
    showVideo: false,
    axes: getAxes(this.mediaQuery.matches),
  };

  motionPresets = {
    y: { direction: -1 },
    x: { direction: 1 },
  };

  updateStyles = event => {
    this.setState({ axes: getAxes(event.matches) });
  };

  componentDidMount() {
    this.mediaQuery.addListener(this.updateStyles);
  }

  componentWillUnmount() {
    this.mediaQuery.removeListener(this.updateStyles);
  }

  handleShowVideo = () => {
    this.setState(state => ({
      showVideo: !state.showVideo,
    }));
  };

  render() {
    const { pictures: { sizes: thumbnails } } = this.props;
    const { link: image } = thumbnails[thumbnails.length - 1];

    const { showVideo, axes } = this.state;
    const { direction } = this.motionPresets[axes.main];

    return (
      <Wrapper onClick={this.handleShowVideo}>
        <Motion
          defaultStyle={{
            [axes.main]: direction * 100,
            [axes.opposite]: 0,
            scale: 1,
          }}
          style={{
            [axes.main]: spring(direction * (showVideo ? -17 : 10)),
            [axes.opposite]: 0,
            scale: showVideo ? spring(1.5) : spring(1),
          }}
        >
          {style => (
            <VideoContainer
              image={image}
              style={{
                transform: `scale(${style.scale}) translate(${style.x}vw,${
                  style.y
                }vh)`,
              }}
            />
          )}
        </Motion>
      </Wrapper>
    );
  }
}

// utility hoisted outside to be used when defining the initial state
const getAxes = matches =>
  matches ? { main: 'y', opposite: 'x' } : { main: 'x', opposite: 'y' };

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    padding: 0 4rem;
  }
`;

const VideoContainer = styled.div`
  height: 28.12vw;
  width: 50vw;
  border-radius: 2vw;
  background: url(${props => props.image});
  background-size: cover;
  background-position: right center;

  @media (max-width: 768px) {
    height: 28.12vh;
    width: 50vh;
    background-position: center top;
  }
`;
