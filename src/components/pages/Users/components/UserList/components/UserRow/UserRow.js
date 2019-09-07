import * as React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { Button as Button_ } from 'antd';
import { NavLink } from 'react-router-dom';
import { noop, protectByRoles } from 'utils';

const Button = styled(Button_).attrs({ type: 'primary' })``;

const ButtonEdit = protectByRoles('moderator', 'admin')(Button);

const ButtonDelete = protectByRoles('admin')(Button);

const Wrapper = styled.div`
  ${Button} {
    margin-top: 16px;

    + ${Button} {
      margin-left: 16px;
    }
  }
`;

class UserRow extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    _id: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    middleName: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    middleName: '',
    avatar: '',
    phone: '',
    onView: noop,
    onEdit: noop,
    onDelete: noop,
  };

  render() {
    const {
      _id,
      email,
      firstName,
      lastName,
      middleName,
      avatar,
      phone,
      permissions,
      onView,
      onEdit,
      onDelete,
      ...rest
    } = this.props;

    return (
      <Wrapper {...rest}>
        <div>
          {!!avatar && (
            <div>
              <img src={avatar} alt={email}/>
            </div>
          )}

          <div>
            <NavLink to={`/users/${_id}`}>
              <strong>Email: </strong>
              {email}
            </NavLink>
          </div>

          {!!firstName && (
            <div>
              <strong>First name: </strong>
              {firstName}
            </div>
          )}

          {!!lastName && (
            <div>
              <strong>Last name: </strong>
              {lastName}
            </div>
          )}

          {!!permissions && !!permissions.length && (
            <div>
              <strong>Permissions: </strong>
              {permissions.join(', ')}
            </div>
          )}
        </div>

        <Button onClick={onView(_id)}>View</Button>

        <ButtonEdit onClick={onEdit(_id)}>Edit</ButtonEdit>

        <ButtonDelete onClick={onDelete(_id)}>Delete</ButtonDelete>
      </Wrapper>
    );
  }
}

export default styled(UserRow)``;
