import React from 'react';
import { Button } from 'forms';
import { reaction } from 'mobx';
import { Loader } from 'molecules';
import styled from 'styled-components';
import { getParams, history } from 'utils';
import { withRouter } from 'react-router-dom';
import { observer, Provider } from 'mobx-react';

import { UsersStore } from 'stores/users';
import UserFormState from 'stores/forms/users/UserForm';

import { UserForm } from '..';

const Wrapper = styled.div``;

@withRouter
@observer
class UserEdit extends React.Component {
  onSuccess = form => {
    const values = form.values();
    const { usersStore, onClose } = this;

    usersStore.update(getParams(this).id, values)
      .then(onClose);
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

    const { onSuccess } = this;
    this.userForm = new UserFormState({ onSuccess });

    this.usersStore = UsersStore.create();
  }

  componentDidMount() {
    const { userForm, usersStore } = this;

    this.reactions = [
      reaction(
        () => usersStore.data,
        user => userForm.set('value', user.toJSON()),
      ),
    ];

    this.usersStore.get(getParams(this).id);
  }

  componentWillUnmount() {
    this.reactions.map(reaction => reaction());
  }

  render() {
    const { ...rest } = this.props;
    const { userForm, usersStore, onSubmit, onClose } = this;

    return (
      <Provider userForm={userForm}>
        <Wrapper {...rest}>
          <div>UserEdit</div>

          <Loader store={usersStore}>
            <UserForm/>

            <Button onClick={onSubmit}>Save</Button>

            <Button onClick={onClose}>Close</Button>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(UserEdit)``;
