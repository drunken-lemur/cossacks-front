import * as React from 'react';
import moment from 'utils/moment';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Col, Descriptions, Row } from 'antd';

const Wrapper = styled.article``;

class EventCard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
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
    const { name, description, start, end, user, ...rest } = this.props;


    return (
      <Wrapper {...rest}>
        <Row>
          <Col>
            <Descriptions layout="horizontal" size="small" bordered>
              <Descriptions.Item span={3} label="User">
                <NavLink to={`/users/${user && user._id}`}>
                  {!!user && user.email}
                </NavLink>
              </Descriptions.Item>

              <Descriptions.Item span={3} label="Name">
                {name}
              </Descriptions.Item>

              <Descriptions.Item span={3} label="Description">
                {description}
              </Descriptions.Item>

              <Descriptions.Item span={3} label="Start">
                {moment(start).format('HH:mm DD.MM.YYYY')}
              </Descriptions.Item>

              <Descriptions.Item span={3} label="End">
                {moment(end).format('HH:mm DD.MM.YYYY')}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default styled(EventCard)``;
