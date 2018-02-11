import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Appear from '../shared/Appear';
import Title from '../shared/Title';

export default class VimeoFetcher extends React.Component {
  static propTypes = {
    videoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    render: PropTypes.func.isRequired,
  };

  state = {
    loading: true,
    error: null,
    video: null,
  };

  async componentDidMount() {
    if (!this.state.video) {
      try {
        const response = await fetch(
          `https://api.vimeo.com/videos/${this.props.videoId}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_VIMEO_TOKEN}`,
            },
          }
        );
        const video = await response.json();

        // something went bad
        if (video.error) {
          this.setState({
            loading: false,
            error: video.error,
          });
        }

        this.setState({
          loading: false,
          video,
        });
      } catch (error) {
        this.setState({ loading: false, error });
      }
    }
  }

  render() {
    const { loading, error, video } = this.state;

    // the error will be catched by the error boundary
    if (error) {
      throw error;
    }

    return (
      <div>
        <Appear inside={loading} outside={!loading} duration={0.3} offset={0.5}>
          <Loading>
            <Title>Loading...</Title>
          </Loading>
        </Appear>
        {video && this.props.render(video)}
      </div>
    );
  }
}

const Loading = styled.div`
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
