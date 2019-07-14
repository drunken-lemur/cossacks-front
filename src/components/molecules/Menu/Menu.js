import React from 'react';
import PropTypes from 'prop-types';
import { Menu as Menu_ } from 'antd';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';

const { Item } = Menu_;

const Wrapper = styled(Menu_)`
  line-height: 64px;
`;

@withRouter
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
    items: [
      { title: 'Events', to: '/events' },
      { title: 'Users', to: '/users' },
    ],
  };

  render() {
    const { authStore, location, items, ...rest } = this.props;

    return (
      <Wrapper
        theme="dark"
        mode="horizontal"
        activeKey={location.pathname}
        selectedKeys={location.pathname}
        {...rest}
      >
        {items.map(({ title, to = '', ...rest }) => (
          <Item key={to || title} {...rest}>
            <span>{title}</span>

            {!!to && (<Link to={to}/>)}
          </Item>
        ))}

        {authStore.isAuthenticated && (
          <Item onClick={authStore.logout}>logout</Item>
        )}
      </Wrapper>
    );
  }
}

export default styled(Menu)``;
