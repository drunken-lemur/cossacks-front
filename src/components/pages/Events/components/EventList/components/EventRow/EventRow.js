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
      ...rest
    } = this.props;

    return (
      <Wrapper {...rest}>
        <div>
          <div>
            <strong>User: </strong>
            {user.email}
          </div>

          <div>
            <NavLink to={`/events/${_id}`}>
              <strong>Name: </strong>
              {name}
            </NavLink>
          </div>

          <div>
            <strong>Description: </strong>
            {description}
          </div>

          <div>
            <strong>Start: </strong>
            {start} - <strong>End: </strong>
            {end}
          </div>
        </div>

        <Button onClick={onView(_id)}>View</Button>

        <Button onClick={onEdit(_id)}>Edit</Button>

        <Button onClick={onDelete(_id)}>Delete</Button>
      </Wrapper>
    );
  }
}

export default styled(EventRow)``;
