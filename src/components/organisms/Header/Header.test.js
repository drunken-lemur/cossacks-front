/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Header }) => {
  test(`Render a Header (${name})`, () => {
    const wrapper = renderWithContext(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
