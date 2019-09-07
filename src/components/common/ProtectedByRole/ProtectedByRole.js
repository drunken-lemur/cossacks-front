import * as React from 'react';
import * as PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class ProtectedByRole extends React.PureComponent {
  static propTypes = {
    role: PropTypes.string,
  };

  render() {
    const { role, authStore, children } = this.props;
    const isAllow = authStore.user.permissions.includes(role);

    return !isAllow ? null : <>{children}</>;
  }
}

export default ProtectedByRole;