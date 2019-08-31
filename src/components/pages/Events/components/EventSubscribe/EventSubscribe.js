import React from 'react';
import {Button} from 'forms';
import {EventsStore} from 'stores';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getParams, history} from 'utils';
import {withRouter} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';

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
        const {onClose} = this;
        const {...rest} = this.props;

        return (
            <Provider>
                <Wrapper {...rest}>
                    <div>EventSubscribe</div>

                    <Button onClick={onClose}>Close</Button>
                </Wrapper>
            </Provider>
        );
    }
}

export default styled(EventSubscribe)``;
