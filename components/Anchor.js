// @flow
import styled from 'styled-components';
import { type ComponentType } from 'react';

type Props = {
  decorationDisabled?: boolean,
};

const Anchor: ComponentType<Props> = styled.a`
  text-decoration: none;
  color: inherit;
  outline: 0;
  font-weight: 700;
  cursor: url(static/cursor-pointer.png), pointer;

  &:active {
    cursor: url(static/cursor-pointer-clicked.png), pointer;
  }

  position: relative;
  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    height: 0.5rem;
    bottom: 0.25rem;
    left: 0;
    width: 80%;
    transform: scaleX(0);
    background: hsla(162, 100%, 33%, 1);
    transition: transform 0.3s ease-out;
    transform-origin: 0 0;
  }

  &:focus,
  &:hover {
    ${props =>
      props.decorationDisabled
        ? 'color: #0d9 }'
        : `
    &:after {
      transform: scaleX(1);
      transition: transform 0.3s ease-in;
    }`}
  }
`;
export default Anchor;
