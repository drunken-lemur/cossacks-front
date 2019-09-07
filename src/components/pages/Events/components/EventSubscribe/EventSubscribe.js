import * as React from 'react';
import { PageHeader } from 'antd';
import { Loader } from 'molecules';
import { EventsStore } from 'stores';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { getParams, history } from 'utils';
import { withRouter } from 'react-router-dom';
import { observer, Provider } from 'mobx-react';
import { EventCard } from '../EventView/components';

const Wrapper = styled.div``;

@withRouter
@observer
class EventSubscribe extends React.Component {
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

  onClose = () => {
    history.push('/events');
  };

  componentWillMount() {
    this.eventsStore.get(getParams(this).id);
  }

  render() {
    const { eventsStore } = this;
    const { ...rest } = this.props;

    return (
      <Provider>
        <Wrapper {...rest}>
          <PageHeader
            onBack={history.goBack}
            title="Events"
            subTitle="Event Subscribe"
          />

          <Loader store={eventsStore}>
            <EventCard {...eventsStore.data}/>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventSubscribe)``;
