import BaseState from '../base/BaseState';

const fields = [
  'email',
  'password',
  'firstName',
  'lastName',
  'middleName',
  'avatar',
  'phone',
];

const placeholders = {
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  middleName: 'middleName',
  avatar: 'avatar',
  phone: 'phone',
};
const labels = {
  email: 'Email',
  password: 'Password',
  firstName: 'First name',
  lastName: 'Last name',
  middleName: 'Middle name',
  avatar: 'Avatar',
  phone: 'Phone',
};
const extra = {};
const rules = {};
const types = {};
const values = {};
const output = {};

class CreateForm extends BaseState {
  constructor(hooks) {
    super(
      {
        fields,
        labels,
        placeholders,
        rules,
        types,
        values,
        extra,
        output,
      },
      { hooks },
    );
  }
}

export default CreateForm;
