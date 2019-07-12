/* eslint-disable no-undef */
import React from 'react';

import mock from './fixtures';

mock.forEach(({ name, props, component: Set }) => {
  test(`Render a Set (${name})`, () => {
    const wrapper = renderWithContext(<Set {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
