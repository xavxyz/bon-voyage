import React from 'react';
import PropTypes from 'prop-types';

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

    // to replace by a smooth SVG element
    if (loading) {
      return 'Loading...';
    }

    // the error will be catched by the error boundary
    if (error) {
      throw error;
    }

    return this.props.render(video);
  }
}
