import React from 'react';
import VimeoFetcher from './Showroom/VimeoFetcher';
import Showroom from './Showroom';
import { Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/:videoId"
          render={({ match }) => (
            <VimeoFetcher
              videoId={match.params.videoId}
              render={video => <Showroom video={video} />}
            />
          )}
        />
      </div>
    );
  }
}
