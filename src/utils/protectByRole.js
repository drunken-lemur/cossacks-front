import * as React from 'react';
import { ProtectedByRole } from 'components/common';

const protectByRole = role => Component => props => (
  <ProtectedByRole role={role}>
    <Component {...props}/>
  </ProtectedByRole>
);

export default protectByRole;