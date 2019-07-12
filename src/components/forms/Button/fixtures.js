import styled from 'styled-components';
import React, { Fragment } from 'react';

import component, { variants } from './Button';

const children = 'Click me';

const Component = styled(component)`
  margin: 4px !important;
`;

export default [
  {
    component,
    name: 'primary',
    props: {
      children,
    },
  },
  {
    component,
    name: 'primary rounded',
    props: {
      children,
      rounded: true,
    },
  },
  {
    component,
    name: 'outline',
    props: {
      children,
      variant: 'outline',
    },
  },
  {
    component,
    name: 'outline rounded',
    props: {
      children,
      variant: 'outline',
      rounded: true,
    },
  },
  {
    component,
    name: 'outline rounded disabled',
    props: {
      children,
      variant: 'outline',
      rounded: true,
      disabled: true,
    },
  },
  {
    component,
    name: 'disabled',
    props: {
      children,
      disabled: true,
    },
  },
  {
    name: 'All Buttons',
    component: function Button() {
      return (
        <Fragment>
          {Object.keys(variants).map(key => (
            <div>
              <Component key={key} variant={key}>
                {key}
              </Component>

              <Component key={`${key}_disabled`} variant={key} disabled>
                {key} disabled
              </Component>

              <Component key={`${key}_rounded`} variant={key} rounded>
                {key} rounded
              </Component>

              <Component
                key={`${key}_rounded_disabled`}
                variant={key}
                rounded
                disabled
              >
                {key} rounded disabled
              </Component>
            </div>
          ))}
        </Fragment>
      );
    },
  },
];
