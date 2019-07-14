import React from 'react';
import { noop } from 'utils';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as Button_ } from 'antd';
import { NavLink } from 'react-router-dom';

const Button = styled(Button_).attrs({ type: 'primary' })``;

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
      onView,
      onEdit,
      onDelete,
      ...rest
    } = this.props;

    return (
      <Wrapper {...rest}>
        <div>
          <div>
            <img src={avatar} alt={email}/>
          </div>

          <div>
            <NavLink to={`/users/${_id}`}>
              <strong>Email: </strong>
              {email}
            </NavLink>
          </div>

          <div>
            <strong>First name: </strong>
            {firstName}
          </div>

          <div>
            <strong>Last name: </strong>
            {lastName}
          </div>

          <div>
            <strong>Middle name: </strong>
            {middleName}
          </div>

          <div>
            <strong>Phone: </strong>
            {phone}
          </div>
        </div>

        <Button onClick={onView(_id)}>View</Button>

        <Button onClick={onEdit(_id)}>Edit</Button>

        <Button onClick={onDelete(_id)}>Delete</Button>
      </Wrapper>
    );
  }
}

export default styled(UserRow)``;
