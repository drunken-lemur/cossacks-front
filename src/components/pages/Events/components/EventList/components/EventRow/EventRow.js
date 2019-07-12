import React from 'react';
import { noop } from 'utils';
import { Button } from 'forms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const Wrapper = styled(Segment)``;

class EventRow extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
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
      onView,
      onEdit,
      onDelete,
      ...rest
    } = this.props;

    return (
      <Wrapper {...rest}>
        <div>
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
