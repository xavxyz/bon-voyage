// @flow
import * as React from 'react';
import getConfig from 'next/config';
import 'isomorphic-unfetch';
import { createGlobalStyle } from 'styled-components';

type Video = {
  link: string,
  name: string,
  year: string,
  colors: [string, string],
};

type Props = {
  videos: Array<Video>,
};

export default class Page extends React.Component<Props> {
  static async getInitialProps() {
    try {
      const { serverRuntimeConfig } = getConfig();

      const response = await fetch(
        `https://api.vimeo.com/users/898734/albums/3486258/videos?fields=link,name,created_time,description&sort=date&direction=desc`,
        {
          headers: {
            // $FlowFixMe
            Authorization: `Bearer ${serverRuntimeConfig.VIMEO_TOKEN}`,
          },
        }
      );

      const { data } = await response.json();

      return {
        videos: data.map(({ created_time, ...video }) => ({
          ...video,
          year: new Date(created_time).getFullYear(),
        })),
      };
    } catch (error) {
      return { videos: [] };
    }
  }

  render() {
    return <pre>{this.props.videos}</pre>;
  }
}

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Apercu;
    font-style: normal;
    font-weight: 400;
    src: url(static/apercu_regular.ttf);
  }

  @font-face {
  font-family: 'Apercu';
  font-style: bold;
  font-weight: 700;
  src: url(static/apercu_bold.ttf);
}

  body {
    margin: 0;
    cursor: url(static/cursor-auto.png), auto;
    background: #000;
    font-family: Apercu, Helvetica, sans-serif;
  }

  g, path {
    transform-origin: 240px 244px;
  }

  @keyframes scale {
    to { transform: scale(1, 1); }
  }

  @keyframes draw {
    to { stroke-dashoffset: 0 };
  }
`;
