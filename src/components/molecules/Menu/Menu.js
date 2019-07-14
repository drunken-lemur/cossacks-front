import React from 'react';
import PropTypes from 'prop-types';
import { Menu as Menu_ } from 'antd';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const { Item } = Menu_;

const Wrapper = styled(Menu_)`
  line-height: 64px;
`;

@inject('authStore')
@observer
class Menu extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    authStore: PropTypes.object,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    ),
  };

  static defaultProps = {
    className: '',
    items: [],
  };

  render() {
    const { authStore, ...rest } = this.props;

    return (
      <Wrapper
        theme="dark"
        mode="horizontal"
        {...rest}
      >
        <Item key="events">Events</Item>

        <Item key="users">Users</Item>

        <Item onClick={authStore.logout}>logout</Item>
      </Wrapper>
    );
  }
}

export default styled(Menu)``;
