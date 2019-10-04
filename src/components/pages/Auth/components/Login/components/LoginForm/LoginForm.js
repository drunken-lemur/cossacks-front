import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Checkbox, Form, Icon, Input } from 'antd';

const Wrapper = styled(Form)`
  margin: 0 auto;
  max-width: 332px;
  text-align: center;
  
  .login-form-forgot {
    float: left;
  }
  .login-form-remember {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
`;

@Form.create({ name: 'normal_login' })
class LoginForm extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    onSubmit: () => null,
  };

  onSubmit = type => e => {
    e.preventDefault();

    const { form, onSubmit } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values, type);
      }
    });
  };

  render() {
    const { ...rest } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Wrapper {...rest} onSubmit={this.onSubmit('login')}>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })( // eslint-disable-next-line
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              placeholder="Email"
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox className="login-form-remember">Remember me</Checkbox>)}

          <a className="login-form-forgot" href="#/">
            Forgot password
          </a>

          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button">
            Log in
          </Button>

          Or <a href="#/" onClick={this.onSubmit('registration')}>register now!</a>
        </Form.Item>
      </Wrapper>
    );
  }
}

export default styled(LoginForm)``;
