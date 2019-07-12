import React from 'react';
import { Button } from 'forms';
import { history } from 'utils';
import { UsersStore } from 'stores';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List, Loader } from 'molecules';
import { observer, Provider } from 'mobx-react';

import { UserRow } from './components';

const Wrapper = styled.div``;

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
          <div>UserList</div>

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
