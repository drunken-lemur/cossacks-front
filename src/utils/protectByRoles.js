import * as React from 'react';
import { ProtectedByRoles } from 'components/common';

const protectByRoles = (...roles) => Component => props => (
  <ProtectedByRoles roles={roles}>
    <Component {...props}/>
  </ProtectedByRoles>
);

export default protectByRoles;