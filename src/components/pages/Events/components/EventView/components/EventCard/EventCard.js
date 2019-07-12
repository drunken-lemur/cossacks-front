import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.article``;

class EventCard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    _id: '',
    name: '',
    description: '',
    start: '',
    end: '',
  };

  render() {
    const { name, description, start, end, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <div>
          <strong>Name: </strong>
          {name}
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
      </Wrapper>
    );
  }
}

export default styled(EventCard)``;
