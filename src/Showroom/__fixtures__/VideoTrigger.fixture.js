import VideoTrigger from '../VideoTrigger';

export default [
  {
    name: 'video not shown',
    component: VideoTrigger,
    props: {
      showVideo: false,
      onClick: () => {},
    },
  },
  {
    name: 'video shown',
    component: VideoTrigger,
    props: {
      showVideo: true,
      onClick: () => {},
    },
  },
];
