import * as React from 'react';
import { Loader } from 'molecules';
import { EventsStore } from 'stores';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { getParams, history } from 'utils';
import { withRouter } from 'react-router-dom';
import { Button as Button_, PageHeader } from 'antd';
import { inject, observer, Provider } from 'mobx-react';

import { EventParticipants } from '..'
import { EventCard } from '../EventView/components';

const Button = styled(Button_).attrs({ type: 'primary' })``;

const Wrapper = styled.div`
  ${Button} {
    margin-top: 16px;
  }
`;

@withRouter
@inject('authStore')
@observer
class EventSubscribe extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    authStore: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

  onClose = () => {
    history.push('/events');
  };

  onSubscribe = async () => {
    const result = await this.eventsStore.subscribe();

    console.log('onSubscribe', { result });
  };

  onUnsubscribe = async () => {
    const result = await this.eventsStore.unsubscribe();

    console.log('onUnsubscribe', { result });
  };

  componentWillMount() {
    this.eventsStore.get(getParams(this).id);
  }

  render() {
    const { eventsStore } = this;
    const { ...rest } = this.props;
    const { data, isDone } = eventsStore;

    const isSubscribed = isDone && data.isUserSubscribed;

    return (
      <Provider>
        <Wrapper {...rest}>
          <PageHeader
            onBack={history.goBack}
            title="Events"
            subTitle="Event Subscribe"
          />

          <Loader store={eventsStore}>
            <EventCard {...data}/>

            {!isSubscribed ? (
              <Button onClick={this.onSubscribe}>Subscribe</Button>
            ) : (
              <Button onClick={this.onUnsubscribe}>Unsubscribe</Button>
            )}

            {isDone && <EventParticipants participants={data.participants} />}
          </Loader>

        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventSubscribe)``;
