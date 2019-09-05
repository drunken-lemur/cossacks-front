import React from 'react';
import { history } from 'utils';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';

import AuthStore from 'stores/auth/AuthStore';

import 'antd/dist/antd.css';

class MainProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.authStore = AuthStore.create();
  }

  render() {
    const { authStore } = this;
    const { children } = this.props;

    return (
      <Router history={history}>
        <Provider authStore={authStore}>
          <>{children}</>
        </Provider>
      </Router>
    );
  }
}

export default MainProvider;
