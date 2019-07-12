import component from './';

export default [
  {
    component,
    name: 'empty',
    props: {
      placeholder: 'Пустое поле',
    },
  },
  {
    component,
    name: 'typed',
    props: {
      placeholder: 'Пустое поле',
      value: 'Заполненное текстовое поле',
    },
  },
  {
    component,
    name: 'success',
    props: {
      value: 'Успех',
      status: 'success',
    },
  },
  {
    component,
    name: 'warning',
    props: {
      value: 'Внимание',
      status: 'warning',
    },
  },
  {
    component,
    name: 'error',
    props: {
      value: 'Ошибка',
      status: 'error',
    },
  },
  {
    component,
    name: 'with mobx',
    props: {
      useStore: true,
    },
  },
];
