// @flow
import styled from 'styled-components';
import { type ComponentType } from 'react';

type Props = {
  size?: number,
};

const Space: ComponentType<Props> = styled.div`
  height: ${props => (props.size || 1) * 1.5}rem;
`;

export default Space;
