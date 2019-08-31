import React from 'react';
import {history} from 'utils';
import {Loader} from 'molecules';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {observer, Provider} from 'mobx-react';
import {Button as Button_, PageHeader} from 'antd';

import {EventsStore} from 'stores';
import EventFormState from 'stores/forms/events/EventForm';

import {EventForm} from '..';

const Button = styled(Button_).attrs({type: 'primary'})``;

const Wrapper = styled.div`
  ${Button} {
    margin-top: 16px;
    
    + ${Button} {
      margin-left: 16px;
    }
  }
`;

@observer
class EventCreate extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    constructor(props) {
        super(props);

        const {onSuccess, onError} = this;
        this.eventsForm = new EventFormState({onSuccess, onError});

        this.eventsStore = EventsStore.create();
    }

    onSuccess = form => {
        const data = form.values();
        const {eventsStore, onClose} = this;

        console.log('EventCreate', data);

        eventsStore.create(data)
            .then(onClose);
    };

    onClose = () => {
        history.push('/events');
    };

    onError = form => {
        console.log('onError', {form});
    };

    onSubmit = () => {
        this.eventsForm.submit();
    };

    render() {
        const {...rest} = this.props;
        const {eventsForm, eventsStore, onSubmit} = this;

        return (
            <Provider eventsForm={eventsForm}>
                <Wrapper {...rest}>
                    <PageHeader
                        onBack={history.goBack}
                        title="Events"
                        subTitle="Create Event"
                    />

                    <Loader store={eventsStore}>
                        <EventForm onSubmit={onSubmit}/>

                        <Button onClick={onSubmit}>Create</Button>
                    </Loader>
                </Wrapper>
            </Provider>
        );
    }
}

export default styled(EventCreate)``;
