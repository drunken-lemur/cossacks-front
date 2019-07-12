import component from './Menu';

export default [
  {
    component,
    name: 'example',
    props: {
      items: [
        { title: 'Заказы' },
        { title: 'Отчетность' },
        { title: 'Финансы' },
        { title: 'Настройки', isActive: true },
        { title: 'Частые вопросы' },
      ],
    },
  },
  {
    component,
    name: 'example 2',
    props: {
      items: [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
        { title: 'Item 4' },
        { title: 'Item 5' },
      ],
    },
  },
  {
    component,
    name: 'example 3',
    props: {
      items: [
        { title: 'Item 1', isActive: true },
        { title: 'Item 2' },
        { title: 'Item 3' },
        { title: 'Item 4' },
        { title: 'Item 5' },
      ],
    },
  },
  {
    component,
    name: 'example',
    props: {
      items: [
        { title: 'Заказы', isActive: true },
        { title: 'Отчетность' },
        { title: 'Финансы' },
        { title: 'Настройки' },
        { title: 'Частые вопросы' },
      ],
    },
  },
];
