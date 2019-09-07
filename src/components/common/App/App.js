import * as React from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { MainProvider, PageGroup } from 'components/common';
import { Auth, Events, NotFoundPage, Users } from 'pages';

const routes = [{
  path: '/',
  exact: true,
  component: () => <Redirect exact from='/' to='/events'/>,
}, {
  path: '/auth',
  component: Auth,
}, {
  path: '/users',
  isPrivate: true,
  component: Users,
}, {
  path: '/events',
  isPrivate: true,
  component: Events,
}, {
  path: '*',
  component: NotFoundPage,
}];

@observer
class App extends React.Component {
  render() {
    return (
      <MainProvider>
        <PageGroup routes={routes}/>
      </MainProvider>
    );
  }
}

export default App;
