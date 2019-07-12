import component from './';

export default [
  {
    component,
    name: 'example',
    props: {
      error: 'Login error',
    },
  },
  {
    component,
    name: 'example list',
    props: {
      errors: ['Login error', 'Email error'],
    },
  },
];
