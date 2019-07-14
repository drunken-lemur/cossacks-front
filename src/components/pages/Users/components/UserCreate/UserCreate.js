import React from 'react';
import { Button } from 'forms';
import { history } from 'utils';
import { Typography } from 'antd';
import { Loader } from 'molecules';
import styled from 'styled-components';
import { observer, Provider } from 'mobx-react';

import { UsersStore } from 'stores/users';
import UserFormState from 'stores/forms/users/UserForm';

import { UserForm } from '..';

const Wrapper = styled.div``;

@observer
class UserCreate extends React.Component {
  onSuccess = form => {
    const { usersStore } = this;
    const values = form.values();

    usersStore.create(values)
      .then(() => history.push('/users'));
  };

  onClose = () => {
    history.push('/users');
  };

  onError = form => {
    console.log('onError', { form });
  };

  onSubmit = () => {
    this.userForm.submit();
  };

  constructor(props) {
    super(props);

    const { onSuccess, onError } = this;
    this.userForm = new UserFormState({ onSuccess, onError });

    this.usersStore = UsersStore.create();
  }

  render() {
    const { ...rest } = this.props;
    const { userForm, usersStore, onSubmit, onClose } = this;

    return (
      <Provider userForm={userForm}>
        <Wrapper {...rest}>
          <Typography.Title>Create User</Typography.Title>

          <Loader store={usersStore}>
            <UserForm onSubmit={onSubmit}/>

            <Button onClick={onSubmit}>Create</Button>

            <Button onClick={onClose}>Close</Button>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(UserCreate)``;
