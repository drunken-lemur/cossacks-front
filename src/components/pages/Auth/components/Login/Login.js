import React from 'react';
import { reaction } from 'mobx';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { MessagesStore, UsersStore } from 'stores';

import Chat from './chat';
import { setDisplayName } from 'recompose';
import { Redirect, withRouter } from 'react-router';
import { pathOr } from 'ramda';

@setDisplayName('Login')
@withRouter
@inject('authStore')
@observer
class Login extends React.Component {
  static propTypes = {
    authStore: PropTypes.object.isRequired,
  };

  login = () => {
    const { authStore } = this.props;
    const { email, password } = this.state;

    return authStore.login({ email, password });
  };

  signup = () => {
    const { email, password } = this.state;

    this.usersStore.create({ email, password })
      .then(() => this.login());
  };

  onLogout = () => {
    const { authStore } = this.props;

    authStore.logout();
  };

  fetchAll = () => {
    const { messagesStore, usersStore } = this;

    Promise.all([
      usersStore.find(),

      messagesStore.find({
        query: {
          $sort: { createdAt: -1 },
          $limit: 25,
        },
      }),
    ]);
  };

  constructor(props) {
    super(props);

    this.state = {};
    this.usersStore = UsersStore.create();
    this.messagesStore = MessagesStore.create();
  }

  updateField(name, ev) {
    this.setState({ [name]: ev.target.value });
  }

  componentDidMount() {
    const { authStore } = this.props;

    this.reactions = [
      reaction(
        () => authStore.user,
        user => user && this.fetchAll(),
      ),
    ];
  }

  componentWillUnmount() {
    this.reactions.map(reaction => reaction());
  }

  render() {
    const { authStore, location } = this.props;
    const { usersStore, messagesStore } = this;
    const fromUrl = pathOr('/', ['state', 'from'], location);

    if (authStore.isAuthenticated) {
      return <Redirect to={fromUrl}/>;
    }

    if (authStore.isPending) {
      return (
        <main className="container text-center">
          <h1>Loading...</h1>
        </main>
      );
    } else if (authStore.isAuthenticated) {
      return (
        <div>
          <Chat onLogout={this.onLogout} messages={messagesStore.list.toJSON()} users={usersStore.list.toJSON()}/>
        </div>
      );
    }

    return <main className="login container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet text-center heading">
          <h1 className="font-100">Log in or signup</h1>
          <p>{authStore.error && authStore.error.message}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
          <form className="form">
            <fieldset>
              <input className="block" type="email" name="email" placeholder="email"
                     onChange={ev => this.updateField('email', ev)}/>
            </fieldset>

            <fieldset>
              <input className="block" type="password" name="password" placeholder="password"
                     onChange={ev => this.updateField('password', ev)}/>
            </fieldset>

            <button type="button" className="button button-primary block signup" onClick={() => this.login()}>
              Log in
            </button>

            <button type="button" className="button button-primary block signup" onClick={() => this.signup()}>
              Signup
            </button>
          </form>
        </div>
      </div>
    </main>;
  }
}

export default Login;
