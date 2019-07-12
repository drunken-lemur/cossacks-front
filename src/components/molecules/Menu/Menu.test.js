/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Menu }) => {
  test(`Render a Menu (${name})`, () => {
    const wrapper = renderWithContext(<Menu {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
