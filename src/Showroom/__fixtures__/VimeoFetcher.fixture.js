import VimeoFetcher from '../VimeoFetcher';
import mock from '../../__mocks__/video';

const videoId = 155417031;

export default [
  {
    name: 'mocked response',
    component: VimeoFetcher,
    props: {
      videoId,
      render: video => video && video.name,
    },
    fetch: [
      {
        matcher: `https://api.vimeo.com/videos/${videoId}`,
        response: mock,
      },
    ],
    state: {
      loading: true,
      video: null,
    },
  },
  {
    name: 'real response - success',
    component: VimeoFetcher,
    props: {
      videoId,
      render: video => video && video.name,
    },
  },
  {
    name: 'real response - error',
    component: VimeoFetcher,
    props: {
      videoId: 'invalid id',
      render: video => video && video.name,
    },
  },
];
