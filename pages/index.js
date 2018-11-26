// @flow
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

export default class Page extends React.Component<{}> {
  render() {
    return 'Bon Voyage!';
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
`;
