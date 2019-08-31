import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import {Alert, Spin} from 'antd';
import {observer} from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled(Spin)``;

@observer
class Loader extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    getErrors = () => {
        const {store} = this.props;

        if (!store.isError) {
            return null;
        }

        const message = R.pathOr(null, ['error', 'message'], store);

        return (
            <Alert
                type="error"
                message={message || 'Error... Something went wrong.....'}
            />
        );
    };

    render() {
        const {store, children, ...rest} = this.props;

        return (
            <>
                {this.getErrors()}

                <Wrapper {...rest} spinning={store.isPending}>
                    {children}
                </Wrapper>
            </>
        );
    }
}

export default styled(Loader)``;
