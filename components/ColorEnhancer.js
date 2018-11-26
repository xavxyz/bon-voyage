// @flow
import styled from 'styled-components';
import type { ComponentType } from 'react';
import ColorSubject from './ColorSubject';

type Props = {
  color?: string,
};

const ColorEnhancer: ComponentType<Props> = styled.section`
  &:hover {
    & ${ColorSubject} {
      color: ${props => props.color || '#0d9'};
    }
  }
`;

export default ColorEnhancer;
