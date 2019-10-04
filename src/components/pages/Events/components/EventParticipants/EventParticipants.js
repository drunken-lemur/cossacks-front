import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  padding-top: 16px;
`;

class EventParticipants extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        email: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        middleName: PropTypes.string,
        avatar: PropTypes.string,
        phone: PropTypes.string,
      })
    ),
  };

  static defaultProps = {
    className: '',
    participants: [],
  };

  render() {
    const { participants, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        {!!participants.length && (
          <>
            <strong>Participants:</strong>

            <ul>
              {participants.map(p => (
                <li key={p._id}>
                  {[p.lastName, p.firstName, p.middleName].join(' ')},{' '}
                  <NavLink to={`/users/${p._id}`}>{p.email}</NavLink>, {p.phone}
                </li>
              ))}
            </ul>
          </>
        )}
      </Wrapper>
    );
  }
}

export default styled(EventParticipants)``;
