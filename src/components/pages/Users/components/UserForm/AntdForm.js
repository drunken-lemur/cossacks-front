import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form, Input, Select} from 'antd';
import {inject, observer} from 'mobx-react';

const {Option} = Select;

@Form.create({name: 'register'})
@inject('userForm')
@observer
class AntdForm extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        userForm: PropTypes.object.isRequired,
    };

    static defaultProps = {
        className: '',
    };

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const {userForm} = this.props;

                userForm.set('value', values);
                userForm.submit();

                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    componentDidMount() {
        const {userForm} = this.props;

        userForm.reset();
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+7',
        })(
            <Select style={{width: 64}} disabled>
                <Option value="+7">+7</Option>
            </Select>,
        );

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input.Password/>)}
                </Form.Item>

                <Form.Item label="Confirm Password" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
                </Form.Item>

                <Form.Item label={<span>First name</span>}>
                    {getFieldDecorator('firstName', {
                        rules: [{required: true, message: 'Please input your first name!', whitespace: true}],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label={<span>Last name</span>}>
                    {getFieldDecorator('lastName', {
                        rules: [{required: true, message: 'Please input your last name!', whitespace: true}],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label={<span>Middle name</span>}>
                    {getFieldDecorator('middleName', {
                        rules: [{required: true, message: 'Please input your middle name!', whitespace: true}],
                    })(<Input/>)}
                </Form.Item>

                <Form.Item label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: 'Please input your phone number!'}],
                    })(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
                </Form.Item>
            </Form>
        );
    }
}

export default styled(AntdForm)``;
