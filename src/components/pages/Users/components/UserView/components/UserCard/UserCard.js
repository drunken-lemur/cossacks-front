import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.article``;

class UserCard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    _id: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    middleName: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
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
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      middleName,
      avatar,
      phone,
      ...rest
    } = this.props;

    return (
      <Wrapper {...rest}>
        <div>
          <strong>Email: </strong>
          {email}
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
          <strong>Avatar: </strong>
          {avatar}
        </div>

        <div>
          <strong>Phone: </strong>
          {phone}
        </div>
      </Wrapper>
    );
  }
}

export default styled(UserCard)``;
