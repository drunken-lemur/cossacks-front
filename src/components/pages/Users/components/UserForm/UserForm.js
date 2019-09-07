import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { FieldGroup, Form, Input } from 'forms';

@inject('userForm', 'authStore')
@observer
class UserForm extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    userForm: PropTypes.object.isRequired,
    authStore: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  fields = {
    email: Input,
    password: Input,
    firstName: Input,
    lastName: Input,
    middleName: Input,
    avatar: Input,
    phone: Input,
  };

  componentDidMount() {
    const { userForm } = this.props;

    userForm.reset();
  }

  render() {
    const { userForm, authStore, ...rest } = this.props;
    const fields = { ...this.fields };

    if (authStore.user.permissions.includes('admin')) {
      fields['permissions'] = Input;
    }

    return (
      <Form {...rest} form={userForm}>
        <FieldGroup fields={fields}/>
      </Form>
    );
  }
}

export default styled(UserForm)``;
