// @flow
import styled from 'styled-components';
import type { ComponentType } from 'react';
import Meta from './Meta';

type Props = {
  color?: string,
};

const HoverFader: ComponentType<Props> = styled.section`
  & ${Meta} {
    opacity: 0.7;
    transition: opacity 0.2s ease-out;
  }

  &:hover {
    & ${Meta} {
      opacity: 1;
      transition: opacity 0.2s ease-in;
    }
  }
`;

export default HoverFader;
