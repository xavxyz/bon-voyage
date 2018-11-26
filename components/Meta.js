// @flow
import styled from 'styled-components';
import { type ComponentType } from 'react';

type Props = {
  isSelected?: boolean,
  color?: string,
};

const Meta: ComponentType<Props> = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 400;
  color: #ddd;
  transition: color 0.3s ease-out;
`;

export default Meta;
