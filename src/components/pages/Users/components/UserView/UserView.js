import React from 'react';
import { Button } from 'forms';
import { Loader } from 'molecules';
import { UsersStore } from 'stores';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getParams, history } from 'utils';
import { withRouter } from 'react-router-dom';
import { observer, Provider } from 'mobx-react';

import { UserCard } from './components';

const Wrapper = styled.div``;

@withRouter
@observer
class UserView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  onClose = () => {
    history.push('/users');
  };

  constructor(props) {
    super(props);

    this.usersStore = UsersStore.create();
  }

  componentDidMount() {
    this.usersStore.get(getParams(this).id);
  }

  render() {
    const { ...rest } = this.props;
    const { usersStore, onClose } = this;

    return (
      <Provider>
        <Wrapper {...rest}>
          <div>UserView</div>

          <Button onClick={onClose}>Close</Button>

          <Loader store={usersStore}>
            <UserCard {...usersStore.data}/>
          </Loader>

          <Button onClick={onClose}>Close</Button>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(UserView)``;
