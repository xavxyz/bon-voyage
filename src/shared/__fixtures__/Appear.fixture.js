import Appear from '../Appear';

export default [
  {
    component: Appear,
    name: 'disappear',
    props: {
      children: "I'm disappearing",
      outside: true,
      offset: -10,
      duration: 1,
    },
  },
  {
    component: Appear,
    name: 'appear',
    props: {
      children: "I'm appearing",
      inside: true,
      offset: -10,
      duration: 1,
    },
  },
  {
    component: Appear,
    name: 'static',
    props: {
      children:
        'Inside is not defined or false, outside is not defined or false',
      inside: false,
      outside: false,
      offset: -10,
      duration: 1,
    },
  },
  {
    component: Appear,
    name: 'error',
    props: {
      children: 'Inside & outside are defined',
      inside: true,
      outside: true,
      offset: -10,
      duration: 1,
    },
  },
];
