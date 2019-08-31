import {Form} from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

// Phone validator
const phoneChecker = (value, requirement, attribute) => {
    return value.replace(/(\s|\W)/gi, '').match(/^\d{11}$/);
};

validatorjs.register(
    'phone',
    phoneChecker,
    'The :attribute phone number is not in the format XXX-XXX-XXXX.'
);

// FullName validator
const fullNameChecker = (value, requirement, attribute) => {
    return value.split(' ').length === 3;
};

validatorjs.register(
    'fullName',
    fullNameChecker,
    'The :attribute is not in the format LastName FirstName MiddleName.'
);

class BaseState extends Form {
    options() {
        return {
            showErrorsOnClear: false,
            showErrorsOnChange: true,
            showErrorsOnSubmit: true,
            validateOnChange: true,
        };
    }

    plugins() {
        return {
            dvr: dvr(validatorjs),
        };
    }
}

export default BaseState;
