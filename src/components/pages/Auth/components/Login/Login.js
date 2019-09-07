import * as React from 'react';
import { pathOr } from 'ramda';
import { Typography } from 'antd';
import { Loader } from 'molecules';
import * as PropTypes from 'prop-types';
import { UsersStore } from 'stores';
import styled from 'styled-components';
import { setDisplayName } from 'recompose';
import { inject, observer } from 'mobx-react';
import { Redirect, withRouter } from 'react-router';

import { LoginForm } from './components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 332px;
`;

@setDisplayName('Login')
@withRouter
@inject('authStore')
@observer
class Login extends React.Component {
  static propTypes = {
    authStore: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.usersStore = UsersStore.create();
  }

  onSubmit = (values, type) => {
    if (type === 'login') {
      return this.login(values);
    }

    if (type === 'registration') {
      return this.registration(values);
    }
  };

  login = values => {
    const { authStore } = this.props;
    const { email, password } = values;

    authStore.login({ email, password });
  };

  registration = values => {
    const { usersStore, login } = this;
    const { email, password } = values;

    usersStore.create({ email, password })
      .then(login);
  };

  render() {
    const { usersStore } = this;
    const { authStore, location } = this.props;
    let fromUrl = pathOr('/', ['state', 'from'], location);

    if (fromUrl.pathname && fromUrl.pathname.startsWith('/auth/login')) {
      fromUrl = '/';
    }

    if (authStore.isAuthenticated) {
      return <Redirect to={fromUrl}/>;
    }

    return (
      <Wrapper>
        <Typography.Title>
          Login
        </Typography.Title>

        <Loader store={authStore}>
          <Loader store={usersStore}>
            <LoginForm onSubmit={this.onSubmit}/>
          </Loader>
        </Loader>
      </Wrapper>
    );
  }
}

export default Login;
