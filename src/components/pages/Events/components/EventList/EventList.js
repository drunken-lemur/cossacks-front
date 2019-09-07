import * as React from 'react';
import { EventsStore } from 'stores';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import { List, Loader } from 'molecules';
import { observer, Provider } from 'mobx-react';
import { history, protectByRoles } from 'utils';
import { Button as Button_, Typography } from 'antd';

import { EventRow } from './components';

const Button = styled(Button_).attrs({ type: 'primary' })``;

const ButtonCreate = protectByRoles('moderator', 'admin')(Button);

const Wrapper = styled.div`
  ${EventRow} {
    padding-bottom: 16px;
    border-bottom: 1px solid rgb(235, 237, 240);
    
    + ${EventRow} {
      margin-top: 16px;    
    }
    
    :last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
  
  ${Button} {
    margin: 16px 0;
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

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

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

  onSubscribe = id => () => {
    history.push(`/events/${id}/subscribe`);
  };

  componentDidMount() {
    this.eventsStore.find();
  }

  render() {
    const { ...rest } = this.props;
    const { eventsStore, onCreate, onView, onEdit, onDelete, onSubscribe } = this;

    const events = eventsStore.list.toJSON();

    return (
      <Wrapper {...rest}>
        <Provider>
          <>
            <Typography.Title>List of Events</Typography.Title>

            <ButtonCreate onClick={onCreate}>Create</ButtonCreate>

            <Loader store={eventsStore}>
              <List
                list={events}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
                component={EventRow}
                onSubscribe={onSubscribe}
              />
            </Loader>

            <ButtonCreate onClick={onCreate}>Create</ButtonCreate>
          </>
        </Provider>
      </Wrapper>
    );
  }
}

export default styled(EventList)``;
