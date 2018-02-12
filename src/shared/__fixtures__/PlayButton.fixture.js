import PlayButton from '../PlayButton';

export default [
  {
    name: 'shown',
    component: PlayButton,
    props: {
      hidden: false,
      onClick: () => {},
    },
  },
  {
    name: 'hidden',
    component: PlayButton,
    props: {
      hidden: true,
      onClick: () => {},
    },
  },
];
