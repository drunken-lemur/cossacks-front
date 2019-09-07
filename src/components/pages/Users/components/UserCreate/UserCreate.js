import * as React from 'react';
import { history } from 'utils';
import { Loader } from 'molecules';
import styled from 'styled-components';
import { observer, Provider } from 'mobx-react';
import { Button as Button_, PageHeader } from 'antd';

import { UsersStore } from 'stores/users';
import UserFormState from 'stores/forms/users/UserForm';

import { UserForm } from '..';

const Button = styled(Button_).attrs({ type: 'primary' })``;

const Wrapper = styled.div`
  ${Button} {
    margin: 16px 0;
    
    + ${Button} {
      margin-left: 16px;
    }
  }
`;

@observer
class UserCreate extends React.Component {
  constructor(props) {
    super(props);

    const { onSuccess, onError } = this;
    this.userForm = new UserFormState({ onSuccess, onError });

    this.usersStore = UsersStore.create();
  }

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

  render() {
    const { ...rest } = this.props;
    const { userForm, usersStore, onSubmit } = this;

    return (
      <Provider userForm={userForm}>
        <Wrapper {...rest}>
          <PageHeader
            onBack={history.goBack}
            title="Users"
            subTitle="Create new User"
          />

          <Loader store={usersStore}>
            <UserForm onSubmit={onSubmit}/>

            <Button onClick={onSubmit}>Create</Button>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(UserCreate)``;
