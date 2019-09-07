import * as React from 'react';
import { Switch } from 'react-router';
import { CustomRoute } from 'components/common';

const PageGroup = ({ routes }) => (
  <Switch>
    {routes.map((route, key) => (
      <CustomRoute key={key} {...route} />
    ))}
  </Switch>
);

export default PageGroup;
