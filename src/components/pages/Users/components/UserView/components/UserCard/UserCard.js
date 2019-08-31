import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Col, Descriptions, Row} from 'antd';

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
            permissions,
            ...rest
        } = this.props;

        return (
            <Wrapper {...rest}>
                <Row>
                    <Col>
                        <Descriptions layout="horizontal" size="small" bordered>
                            <Descriptions.Item span={3} label="Avatar">
                                <img src={avatar} alt={email}/>
                            </Descriptions.Item>

                            <Descriptions.Item span={3} label="Email">
                                {email}
                            </Descriptions.Item>

                            <Descriptions.Item span={3} label="First name">
                                {firstName}
                            </Descriptions.Item>

                            <Descriptions.Item span={3} label="Last name">
                                {lastName}
                            </Descriptions.Item>

                            <Descriptions.Item span={3} label="Middle name">
                                {middleName}
                            </Descriptions.Item>

                            <Descriptions.Item span={3} label="Phone">
                                {phone}
                            </Descriptions.Item>

                            <Descriptions.Item span={3} label="Permissions">
                                {permissions}
                            </Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
            </Wrapper>
        );
    }
}

export default styled(UserCard)``;
