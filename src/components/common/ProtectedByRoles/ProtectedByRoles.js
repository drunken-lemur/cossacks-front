import * as React from 'react';
import * as PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class ProtectedByRoles extends React.PureComponent {
  static propTypes = {
    roles: PropTypes.string,
  };

  static defaultProps = {
    roles: [],
  };

  render() {
    const { roles, authStore, children } = this.props;
    const isAllow = authStore.user && authStore.user.permissions.some(permissions => roles.includes(permissions));

    return !isAllow ? null : children;
  }
}

export default ProtectedByRoles;