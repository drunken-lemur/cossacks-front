import React from 'react';
import { Button as Button_, PageHeader } from 'antd';
import { Loader } from 'molecules';
import PropTypes from 'prop-types';
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

  onClose = () => {
    history.push('/events');
  };

  componentWillMount() {
    this.eventsStore.get(getParams(this).id);
  }

  render() {
    const { ...rest } = this.props;
    const { eventsStore } = this;

    return (
      <Provider>
        <Wrapper {...rest}>
          <PageHeader
            onBack={history.goBack}
            title="Events"
            subTitle="View Event"
          />

          <Loader store={eventsStore}>
            <EventCard {...eventsStore.data}/>
          </Loader>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(EventView)``;
