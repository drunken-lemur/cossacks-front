import React from 'react';
import { Field } from 'forms';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const Wrapper = styled.div``;

@inject('form')
@observer
class FieldGroup extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    fields: PropTypes.object.isRequired,
  };

  render() {
    const { fields, ...rest } = this.props;

    return !!fields && (
      <Wrapper {...rest}>
        {Object.keys(fields).map(name => (
          <Field key={name} name={name} component={fields[name]}/>
        ))}
      </Wrapper>
    );
  }
}

export default styled(FieldGroup)``;
