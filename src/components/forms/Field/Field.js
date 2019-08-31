import React from 'react';
import {Errors} from 'atoms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form} from 'semantic-ui-react';
import {inject, observer} from 'mobx-react';
import {branch, setDisplayName} from 'recompose';

const Wrapper = styled(Form.Field)``;

const Label = styled.label`
  user-select: none;
`;

@setDisplayName('Field')
@branch(
    props => props.name,
    inject('form'),
)
@observer
class Field extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        form: PropTypes.object,
        name: PropTypes.string,
        field: PropTypes.object,
        component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    };

    static defaultProps = {
        className: '',
        form: null,
        name: '',
        field: null,
        component: styled.input``,
    };

    get field() {
        const {form, field, name} = this.props;

        return form ? form.$(name) : field;
    }

    render() {
        const {field} = this;
        const {className, component: Component, ...rest} = this.props;

        if (!field) {
            return null;
        }

        const {label, ...props} = field.bind();

        return (
            <Wrapper className={className}>
                {!!label && (
                    <Label htmlFor={field.id}>
                        {label}
                    </Label>
                )}

                <Component {...rest} {...props}/>

                <Errors error={field.error}/>
            </Wrapper>
        );
    }
}

export default styled(Field)``;
