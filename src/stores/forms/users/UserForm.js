import BaseState from '../base/BaseState';

const fields = [
    'email',
    'password',
    'firstName',
    'lastName',
    'middleName',
    'avatar',
    'phone',
    'permissions',
];

const placeholders = {
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName',
    avatar: 'avatar',
    phone: 'phone',
    permissions: 'Permissions',
};
const labels = {
    email: 'Email',
    password: 'Password',
    firstName: 'First name',
    lastName: 'Last name',
    middleName: 'Middle name',
    avatar: 'Avatar',
    phone: 'Phone',
    permissions: 'Permissions',
};
const extra = {};
const rules = {};
const types = {};
const values = {};
const output = {
    permissions: value => {
        return `${value}`.split(',').map(p => p.trim());
    },
};

class CreateForm extends BaseState {
    constructor(hooks) {
        // noinspection JSCheckFunctionSignatures
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
            {hooks}
        );
    }
}

export default CreateForm;
