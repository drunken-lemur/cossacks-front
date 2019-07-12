import component from './';

export default [
  {
    component,
    name: 'example with checkbox',
    props: {
      field: {
        label: 'Example',
        type: 'checkbox',
      },
    },
  },
  {
    component,
    name: 'example with checkbox checked',
    props: {
      field: {
        label: 'Example',
        type: 'checkbox',
        checked: true,
      },
    },
  },
  {
    component,
    name: 'example with input',
    props: {
      field: {
        label: 'Example',
      },
    },
  },
  {
    component,
    name: 'example with input and error',
    props: {
      field: {
        label: 'Example',
        error: 'Field is required',
      },
    },
  },
];
