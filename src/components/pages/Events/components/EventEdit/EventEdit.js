import * as React from 'react';
import { reaction } from 'mobx';
import moment from 'utils/moment';
import { Loader } from 'molecules';
import styled from 'styled-components';
import { getParams, history } from 'utils';
import { withRouter } from 'react-router-dom';
import { observer, Provider } from 'mobx-react';
import { Button as Button_, PageHeader } from 'antd';

import { EventsStore } from 'stores';
import EventFormState from 'stores/forms/events/EventForm';

import { EventForm } from '..';

const Button = styled(Button_).attrs({ type: 'primary' })``;

const Wrapper = styled.div`
  ${Button} {
    margin-top: 16px;
    
    + ${Button} {
      margin-left: 16px;
    }
  }
`;

@withRouter
@observer
class EventEdit extends React.Component {
  constructor(props) {
    super(props);

    const { onSuccess, onError } = this;
    this.eventsForm = new EventFormState({ onSuccess, onError });

    this.eventsStore = EventsStore.create();
  }

  onSuccess = form => {
    const values = form.values();
    const { range, ...data } = values;
    const [start, end] = range;
    const { eventsStore, onClose } = this;

    eventsStore.update(getParams(this).id, { ...data, start, end })
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

  componentDidMount() {
    const { eventsStore, eventsForm } = this;

    this.reactions = [
      reaction(
        () => eventsStore.data,
        eventObject => {
          const event = eventObject.toJSON();
          const start = moment(event.start);
          const end = moment(event.end);

          eventsForm.set('value', {
            ...event, range: [
              start.isValid() ? start : undefined,
              end.isValid() ? end : undefined(),
            ],
          });
        },
      ),
    ];

    eventsStore.get(getParams(this).id);
  }

  componentWillUnmount() {
    this.reactions.map(reaction => reaction());
  }

  render() {
    const { ...rest } = this.props;
    const { eventsForm, eventsStore, onSubmit } = this;

    return (
      <Provider eventsForm={eventsForm}>
        <Wrapper {...rest}>
          <PageHeader
            onBack={history.goBack}
            title="Events"
            subTitle="Edit Event"
          />

          <Loader store={eventsStore}>
            <EventForm/>

            <Button onClick={onSubmit}>Save</Button>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventEdit)``;
