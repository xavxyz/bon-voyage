import React from 'react';
import { Route } from 'react-router-dom';
import VimeoFetcher from './Showroom/VimeoFetcher';
import Showroom from './Showroom';
import Welcome from './Welcome';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Welcome} />
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
