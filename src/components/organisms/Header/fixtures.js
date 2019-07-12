import component from './';

import userBarMock from './components/UserBar/fixtures';
import menuMock from 'molecules/Menu/fixtures';

export default [
  {
    component,
    name: 'example',
    props: {
      menuItems: menuMock[0].props.items,
      user: userBarMock[0].props,
    },
  },
  {
    component,
    name: 'example 2',
    props: {
      menuItems: menuMock[2].props.items,
      user: userBarMock[1].props,
    },
  },
  {
    component,
    name: 'example 3',
    props: {
      menuItems: menuMock[3].props.items,
      user: userBarMock[0].props,
    },
  },
];
