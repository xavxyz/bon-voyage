import Preview from '../Preview';
import video from '../../__mocks__/video';

const { uri, pictures } = video;

export default [
  {
    name: 'idle',
    component: Preview,
    state: {
      showVideo: false,
    },
    props: {
      uri,
      pictures,
    },
  },
  {
    name: 'active',
    component: Preview,
    state: {
      showVideo: true,
    },
    props: {
      uri,
      pictures,
    },
  },
];
