import * as React from 'react';
import { Button as Button_, PageHeader } from 'antd';
import { Loader } from 'molecules';
import * as PropTypes from 'prop-types';
import { EventsStore } from 'stores';
import styled from 'styled-components';
import { getParams, history } from 'utils';
import { withRouter } from 'react-router-dom';
import { observer, Provider } from 'mobx-react';

import { EventCard } from './components';

const Button = styled(Button_).attrs({ type: 'primary' })``;

const Wrapper = styled.div`
  ${Button} {
    margin: 16px 0;
  }
`;

@withRouter
@observer
class EventView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

  componentWillMount() {
    this.eventsStore.get(getParams(this).id);
  }

  onSubscribe = id => () => {
    history.push(`/events/${id}/subscribe`);
  };

  render() {
    const { ...rest } = this.props;
    const { eventsStore, onSubscribe } = this;
    const { _id } = eventsStore.data || {};

    return (
      <Provider>
        <Wrapper {...rest}>
          <PageHeader
            onBack={history.goBack}
            title="Events"
            subTitle="View Event"
          />

          <Loader store={eventsStore}>
            <Button onClick={onSubscribe(_id)}>Subscribe</Button>

            <EventCard {...eventsStore.data}/>

            <Button onClick={onSubscribe(_id)}>Subscribe</Button>
          </Loader>

        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventView)``;
