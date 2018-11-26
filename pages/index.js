// @flow
import * as React from 'react';
import getConfig from 'next/config';
import 'isomorphic-unfetch';
import styled, { createGlobalStyle } from 'styled-components';

import Head from '../components/Head';
import Main from '../components/Main';
import AssetPrefetch from '../components/AssetPrefetch';
import Hero from '../components/Hero';
import Meta from '../components/Meta';
import Title from '../components/Title';
import Anchor from '../components/Anchor';
import Space from '../components/Space';
import ColorEnhancer from '../components/ColorEnhancer';
import ColorSubject from '../components/ColorSubject';

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
    return (
      <Main>
        <Head />
        <GlobalStyles />
        <AssetPrefetch src="static/cursor-pointer-clicked.png" />
        <Hero />
        <Space size={2} />
        <ColorEnhancer>
          <Meta>My adventures, over the years, over the world;</Meta>
          <Meta>Bon Voyage, ou l'aventure douce.</Meta>
          <Space />
          <Meta>
            —{' '}
            <ColorSubject>
              <Anchor
                href="https://twitter.com/xavczen"
                target="_blank"
                rel="noreferrer"
                decorationDisabled
              >
                @xavczen
              </Anchor>
            </ColorSubject>
          </Meta>
        </ColorEnhancer>
        <Space size={6} />
        {this.props.videos.length === 0 && (
          <section>
            <Meta>oops</Meta>
            <Space />
            <Title>
              We couldn't retrieve the video stories from the interweb.
            </Title>
          </section>
        )}
        {this.props.videos.map((video, index, list) => (
          <React.Fragment key={video.link}>
            <ColorEnhancer>
              <Meta>
                <ColorSubject>{video.year}</ColorSubject>
              </Meta>
              <Space />
              <Title>
                <Anchor href={video.link} target="_blank" rel="noreferrer">
                  {video.name}
                </Anchor>
              </Title>
            </ColorEnhancer>
            {index !== list.length - 1 && <Space size={3} />}
          </React.Fragment>
        ))}
        <Space size={6} />
        <ColorEnhancer>
          <Meta>
            Wanderer, <ColorSubject>your footsteps are the road</ColorSubject>,
            and nothing more;
          </Meta>
          <Meta>
            wanderer, there is no road,{' '}
            <ColorSubject>the road is made by walking</ColorSubject>.
          </Meta>
          <Space />
          <Meta>— Antonio Machado</Meta>
        </ColorEnhancer>
      </Main>
    );
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
