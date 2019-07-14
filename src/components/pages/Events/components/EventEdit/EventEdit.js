import React from 'react';
import { reaction } from 'mobx';
import { Loader } from 'molecules';
import styled from 'styled-components';
import { getParams, history } from 'utils';
import { withRouter } from 'react-router-dom';
import { observer, Provider } from 'mobx-react';
import { Button as Button_, Typography } from 'antd';

import { EventsStore } from 'stores';
import EventFormState from 'stores/forms/events/EventForm';

import { EventForm } from '..';

const Button = styled(Button_).attrs({ type: 'primary' })``;

const Wrapper = styled.div`
  ${Button} {
    margin: 16px 0;
    
    + ${Button} {
      margin-left: 16px;
    }
  }
`;

@withRouter
@observer
class EventEdit extends React.Component {
  onSuccess = form => {
    const data = form.values();
    const { eventsStore, onClose } = this;

    console.log('EventEdit', data);

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
          <Typography.Title>Edit Event</Typography.Title>

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
