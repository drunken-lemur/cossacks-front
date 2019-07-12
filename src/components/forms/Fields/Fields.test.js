/* eslint-disable no-undef */
import React from 'react';

import fixture from './fixtures';

fixture.forEach(({ name, props, component: Component }) => {
  test(`Render a ${Component.name} (${name})`, () => {
    const wrapper = renderWithContext(<Component {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
