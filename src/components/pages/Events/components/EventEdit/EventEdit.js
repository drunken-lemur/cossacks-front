import React from 'react';
import { Button } from 'forms';
import { reaction } from 'mobx';
import { Loader } from 'molecules';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import { getParams, history } from 'utils';
import { withRouter } from 'react-router-dom';
import { observer, Provider } from 'mobx-react';

import { EventsStore } from 'stores';
import EventFormState from 'stores/forms/events/EventForm';

import { EventForm } from '..';

const Wrapper = styled.div``;

@withRouter
@observer
class EventEdit extends React.Component {
  onSuccess = form => {
    const data = form.values();
    const { eventsStore, onClose } = this;

    eventsStore.update(getParams(this).id, data)
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

  componentDidMount() {
    const { eventsStore, eventsForm } = this;

    this.reactions = [
      reaction(
        () => eventsStore.data,
        event => eventsForm.set('value', event.toJSON()),
      ),
    ];

    eventsStore.get(getParams(this).id);
  }

  componentWillUnmount() {
    this.reactions.map(reaction => reaction());
  }

  render() {
    const { ...rest } = this.props;
    const { eventsForm, eventsStore, onSubmit, onClose } = this;

    return (
      <Provider eventsForm={eventsForm}>
        <Wrapper {...rest}>
          <Header as="h1">EventEdit</Header>

          <Loader store={eventsStore}>
            <EventForm/>

            <Button onClick={onSubmit}>Save</Button>

            <Button onClick={onClose}>Close</Button>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventEdit)``;
