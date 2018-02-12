import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class VideoTrigger extends React.Component {
  static propTypes = {
    showVideo: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { showVideo, onClick } = this.props;

    return (
      <PlayButton
        style={{
          opacity: Number(!showVideo),
          cursor: showVideo ? 'default' : 'pointer',
        }}
        onClick={showVideo ? undefined : onClick}
      >
        <SvgPositioner>
          <Svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" tabindex="-1">
            <polygon points="1,0 20,10 1,20" fill="#fff" />
          </Svg>
        </SvgPositioner>
      </PlayButton>
    );
  }
}

export const PlayButton = styled.button`
  background: rgba(35, 35, 35, 0.75);
  border-radius: 0.5rem;
  width: 5rem;
  height: 3rem;
  outline: 0;
  border: 0;
  transition: opacity 0.4s, background 0.4s;

  &:hover {
    background: #48ace9;
  }
`;

const SvgPositioner = styled.div`
  margin: 0 auto;
  padding: 0 1.2rem;
`;

const Svg = styled.svg`
  width: 100%;
  height: auto;
`;
