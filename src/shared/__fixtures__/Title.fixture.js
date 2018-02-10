import Title from '../Title';

export default [
  {
    component: Title,
    name: '<= 2 words',
    props: {
      children: 'Hello',
    },
  },
  {
    component: Title,
    name: '> 2 words',
    props: {
      children: 'Hello World Yeah Ho Ah',
    },
  },
  {
    component: Title,
    name: 'error',
    props: {
      children: 123,
    },
  },
];
