import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
          <Col span={8}>
            <Descriptions layout="horizontal" size="small" bordered>
              <Descriptions.Item span={3} label="User">
                {!!user && user.email}
              </Descriptions.Item>

              <Descriptions.Item span={3} label="Name">
                {name}
              </Descriptions.Item>

              <Descriptions.Item span={3} label="Description">
                {description}
              </Descriptions.Item>

              <Descriptions.Item span={3} label="Start">
                {start}
              </Descriptions.Item>

              <Descriptions.Item span={3} label="End">
                {end}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default styled(EventCard)``;
