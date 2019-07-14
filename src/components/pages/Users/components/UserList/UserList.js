import React from 'react';
import { history } from 'utils';
import PropTypes from 'prop-types';
import { UsersStore } from 'stores';
import styled from 'styled-components';
import { List, Loader } from 'molecules';
import { observer, Provider } from 'mobx-react';
import { Button as Button_, Typography } from 'antd';

import { UserRow } from './components';

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
class UserList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

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

  constructor(props) {
    super(props);

    this.usersStore = UsersStore.create();
  }

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

          <Button onClick={onCreate}>Create</Button>

          <Loader store={usersStore}>
            <List
              list={users}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
              component={UserRow}
            />
          </Loader>

          <Button onClick={onCreate}>Create</Button>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(UserList)``;
