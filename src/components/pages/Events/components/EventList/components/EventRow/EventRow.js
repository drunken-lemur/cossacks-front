import * as React from 'react';
import moment from 'utils/moment';
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

class EventRow extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
    start: PropTypes.string,
    end: PropTypes.string,
    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onSubscribe: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    _id: '',
    name: '',
    description: '',
    start: '',
    end: '',
    onView: noop,
    onEdit: noop,
    onDelete: noop,
    onSubscribe: noop,
  };

  render() {
    const {
      _id,
      name,
      description,
      start,
      end,
      user,
      onView,
      onEdit,
      onDelete,
      onSubscribe,
      ...rest
    } = this.props;

    return (
      <Wrapper {...rest}>
        <div>
          <div>
            <strong>User: </strong>
            <NavLink to={`/users/${user._id}`}>
              {user.email}
            </NavLink>
          </div>

          <div>
            <strong>Name: </strong>
            <NavLink to={`/events/${_id}`}>
              {name}
            </NavLink>
          </div>

          <div>
            <strong>Description: </strong>
            {description}
          </div>

          <div>
            <strong>Start: </strong>
            {moment(start).format('HH:mm DD.MM.YYYY')}
            {' - '}
            <strong>End: </strong>
            {moment(start).format('HH:mm DD.MM.YYYY')}
          </div>
        </div>

        <Button onClick={onView(_id)}>View</Button>

        <ButtonEdit onClick={onEdit(_id)}>Edit</ButtonEdit>

        <ButtonDelete onClick={onDelete(_id)}>Delete</ButtonDelete>

        <Button onClick={onSubscribe(_id)}>Subscribe</Button>
      </Wrapper>
    );
  }
}

export default styled(EventRow)``;
