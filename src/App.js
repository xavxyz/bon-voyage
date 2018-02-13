import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import VimeoFetcher from './Showroom/VimeoFetcher';
import Showroom from './Showroom';
import Welcome from './Welcome';
import Text from './shared/Text';

export default class App extends React.Component {
  state = {
    error: null,
    hasError: false,
  };

  componentDidCatch(error) {
    this.setState({
      error,
      hasError: true,
    });
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Welcome} />
        <Route
          exact
          path="/:videoId"
          render={({ match }) => (
            <VimeoFetcher
              hasError={this.state.hasError}
              videoId={match.params.videoId}
              render={video => <Showroom video={video} />}
            />
          )}
        />
        <FixedFooter>
          <Text
            content={this.state.error || 'Made with ♥️ by Xavier Cazalot'}
            hasError={this.state.hasError}
          />
        </FixedFooter>
      </div>
    );
  }
}

const FixedFooter = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  text-align: center;
`;
