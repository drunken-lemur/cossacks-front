import React from 'react';
import {Field} from 'forms';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

class Fields extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        fields: PropTypes.object.isRequired,
        component: PropTypes.func,
    };

    static defaultProps = {
        className: '',
        component: Field,
    };

    render() {
        const {fields, component: Field, ...rest} = this.props;

        return (
            <Wrapper {...rest}>
                {[...fields.keys()].map(field => (
                    <Field field={fields.get(field)}/>
                ))}
            </Wrapper>
        );
    }
}

export default styled(Fields)``;
