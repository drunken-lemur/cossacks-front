import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { FieldGroup, Form, Input } from 'forms';

@inject('eventsForm')
@observer
class EventForm extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    eventsForm: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',

  };

  fields = {
    name: Input,
    description: Input,
    start: Input,
    end: Input,
  };

  render() {
    const { eventsForm, ...rest } = this.props;

    return (
      <Form {...rest} form={eventsForm}>
        <FieldGroup fields={this.fields}/>
      </Form>
    );
  }
}

export default styled(EventForm)``;
