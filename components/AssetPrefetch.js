import styled from 'styled-components';

/*
  Explore how to prefetch asset instead of waiting for it to be loaded
  This is inspired by https://github.com/JasonBoy/prefetch-image
*/

const AssetPrefetch = styled.img`
  display: none;
  width: 0;
  height: 0;
  overflow: hidden;
`;

export default AssetPrefetch;
