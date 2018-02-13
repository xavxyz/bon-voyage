import Text from '../Text';

export default [
  {
    name: 'default',
    component: Text,
    props: {
      content: 'Hello\nSecond line',
    },
  },
  {
    name: 'error',
    component: Text,
    props: {
      content: 'Red text yo',
      hasError: true,
    },
  },
];
