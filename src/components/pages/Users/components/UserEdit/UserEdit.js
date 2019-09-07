import * as React from 'react';
import { reaction } from 'mobx';
import { Loader } from 'molecules';
import styled from 'styled-components';
import { getParams, history } from 'utils';
import { withRouter } from 'react-router-dom';
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

@withRouter
@observer
class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    const { onSuccess } = this;
    this.userForm = new UserFormState({ onSuccess });

    this.usersStore = UsersStore.create();
  }

  onSuccess = form => {
    const { password, ...user } = form.values();
    const { usersStore, onClose } = this;

    usersStore.update(getParams(this).id, user)
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

  componentDidMount() {
    const { userForm, usersStore } = this;

    this.reactions = [
      reaction(
        () => usersStore.data,
        data => {
          const user = data.toJSON();
          const permissions = user.permissions.join(', ');

          return userForm.set('value', { ...user, permissions });
        },
      ),
    ];

    this.usersStore.get(getParams(this).id);
  }

  componentWillUnmount() {
    this.reactions.map(reaction => reaction());
  }

  render() {
    const { ...rest } = this.props;
    const { userForm, usersStore, onSubmit } = this;

    return (
      <Provider userForm={userForm}>
        <Wrapper {...rest}>
          <PageHeader
            onBack={history.goBack}
            title="Users"
            subTitle="Edit User"
          />

          <Loader store={usersStore}>
            <UserForm/>

            <Button onClick={onSubmit}>Save</Button>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(UserEdit)``;
