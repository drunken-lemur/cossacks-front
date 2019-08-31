import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class List extends React.PureComponent {
    static propTypes = {
        list: PropTypes.array,
        component: PropTypes.any.isRequired,
    };

    static defaultProps = {
        list: [],
    };

    render() {
        const {list, component: Component, ...rest} = this.props;

        const Wrapper = props => <Component {...props} />;

        return list.map((item, key) => (
            <Wrapper key={item.id || item._id || key} {...rest} {...item} />
        ));
    }
}

export default styled(List)``;
