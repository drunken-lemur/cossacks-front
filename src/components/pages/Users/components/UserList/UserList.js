import * as React from 'react';
import { UsersStore } from 'stores';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { List, Loader } from 'molecules';
import { observer, Provider } from 'mobx-react';
import { history, protectByRoles } from 'utils';
import { Button as Button_, Typography } from 'antd';

import { UserRow } from './components';

const Button = styled(Button_).attrs({ type: 'primary' })``;

const ButtonCreate = protectByRoles('moderator', 'admin')(Button);


const Wrapper = styled.div`
  ${UserRow} {
    padding-bottom: 16px;
    border-bottom: 1px solid rgb(235, 237, 240);
    
    + ${UserRow} {
      margin-top: 16px;    
    }
    
    :last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
  
  ${Button} {
    margin: 16px 0;
  }
`;

@observer
class UserList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);

    this.usersStore = UsersStore.create();
  }

  onCreate = () => {
    history.push('/users/create');
  };

  onView = id => () => {
    history.push(`/users/${id}`);
  };

  onEdit = id => () => {
    history.push(`/users/${id}/edit`);
  };

  onDelete = id => () => {
    const { usersStore } = this;

    usersStore.delete(id)
      .then(() => usersStore.find());
  };

  componentDidMount() {
    this.usersStore.find();
  }

  render() {
    const { ...rest } = this.props;
    const { usersStore, onCreate, onView, onEdit, onDelete } = this;

    const users = usersStore.list.toJSON();

    return (
      <Provider>
        <Wrapper {...rest}>
          <Typography.Title>List of Users</Typography.Title>

          <ButtonCreate onClick={onCreate}>Create</ButtonCreate>

          <Loader store={usersStore}>
            <List
              list={users}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
              component={UserRow}
            />
          </Loader>

          <ButtonCreate onClick={onCreate}>Create</ButtonCreate>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(UserList)``;
