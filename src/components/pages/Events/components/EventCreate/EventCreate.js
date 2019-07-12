import React from 'react';
import { Button } from 'forms';
import { history } from 'utils';
import { Loader } from 'molecules';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import { observer, Provider } from 'mobx-react';

import { EventsStore } from 'stores';
import EventFormState from 'stores/forms/events/EventForm';

import { EventForm } from '..';

const Wrapper = styled.div``;

@observer
class EventCreate extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  onSuccess = form => {
    const values = form.values();
    const { eventsStore, onClose } = this;

    eventsStore.create(values)
      .then(onClose);
  };

  onClose = () => {
    history.push('/events');
  };

  onError = form => {
    console.log('onError', { form });
  };

  onSubmit = () => {
    this.eventsForm.submit();
  };

  constructor(props) {
    super(props);

    const { onSuccess, onError } = this;
    this.eventsForm = new EventFormState({ onSuccess, onError });

    this.eventsStore = EventsStore.create();
  }

  render() {
    const { ...rest } = this.props;
    const { eventsForm, eventsStore, onSubmit, onClose } = this;

    return (
      <Provider eventsForm={eventsForm}>
        <Wrapper {...rest}>
          <Header as="h1">EventCreate</Header>

          <Loader store={eventsStore}>
            <EventForm onSubmit={onSubmit}/>

            <Button onClick={onSubmit}>Create</Button>

            <Button onClick={onClose}>Close</Button>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventCreate)``;
