import React from 'react';
import { history } from 'utils';
import PropTypes from 'prop-types';
import { EventsStore } from 'stores';
import styled from 'styled-components';
import { List, Loader } from 'molecules';
import { observer, Provider } from 'mobx-react';
import { Button as Button_, Typography } from 'antd';

import { EventRow } from './components';

const Button = styled(Button_).attrs({ type: 'primary' })``;

const Wrapper = styled.div`
  ${Button} {
    margin: 16px 0;
    
    + ${Button} {
      margin-left: 16px;
    }
  }
`;

@observer
class EventList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  onCreate = () => {
    history.push('/events/create');
  };

  onView = id => () => {
    history.push(`/events/${id}`);
  };

  onEdit = id => () => {
    history.push(`/events/${id}/edit`);
  };

  onDelete = id => () => {
    const { eventsStore } = this;

    eventsStore.delete(id)
      .then(() => eventsStore.find());
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

  componentDidMount() {
    this.eventsStore.find();
  }

  render() {
    const { ...rest } = this.props;
    const { eventsStore, onCreate, onView, onEdit, onDelete } = this;

    const events = eventsStore.list.toJSON();

    return (
      <Wrapper {...rest}>
        <Provider>
          <>
            <Typography.Title>List of Events</Typography.Title>

            <Button onClick={onCreate}>Create</Button>

            <Loader store={eventsStore}>
              <List
                list={events}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
                component={EventRow}
              />
            </Loader>

            <Button onClick={onCreate}>Create</Button>
          </>
        </Provider>
      </Wrapper>
    );
  }
}

export default styled(EventList)``;
