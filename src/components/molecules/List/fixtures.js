import { Chip } from 'atoms/index';
import { Menu } from 'molecules/index';
import menuMock from 'molecules/Menu/fixtures';

import component from '../../../index';

export default [
  {
    component,
    name: 'Set of Chip',
    props: {
      component: Chip,
      props: {},
      propsList: [
        { label: 1 },
        {
          label: 2,
          isSelected: true,
        },
        { label: 3 },
      ],
    },
  },
  {
    component,
    name: 'Set of Menu',
    props: {
      component: Menu,
      propsList: [menuMock[0].props, menuMock[1].props, menuMock[2].props],
    },
  },
];
