import React from 'react';
import { pathOr } from 'ramda';
import { Loader } from 'molecules';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setDisplayName } from 'recompose';
import { inject, observer } from 'mobx-react';
import { MessagesStore, UsersStore } from 'stores';
import { Redirect, withRouter } from 'react-router';

import { LoginForm } from './components';

import Chat from './chat';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 300px;
`;

@setDisplayName('Login')
@withRouter
@inject('authStore')
@observer
class Login extends React.Component {
  static propTypes = {
    authStore: PropTypes.object,
  };

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

  onLogout = () => {
    const { authStore } = this.props;

    authStore.logout();
  };

  constructor(props) {
    super(props);

    this.state = {};
    this.usersStore = UsersStore.create();
    this.messagesStore = MessagesStore.create();
  }

  render() {
    const { authStore, location } = this.props;
    const { usersStore, messagesStore } = this;
    let fromUrl = pathOr('/', ['state', 'from'], location);

    if (fromUrl.pathname && fromUrl.pathname.startsWith('/auth/login')) {
      fromUrl = '/';
    }

    if (authStore.isAuthenticated) {
      return <Redirect to={fromUrl}/>;
    }

    if (authStore.isAuthenticated) {
      return (
        <Chat
          onLogout={this.onLogout}
          messages={messagesStore.list.toJSON()}
          users={usersStore.list.toJSON()}
        />
      );
    }

    return (
      <Wrapper>
        <Loader store={authStore}>
          <LoginForm onSubmit={this.onSubmit}/>
        </Loader>
      </Wrapper>
    );
  }
}

export default Login;
