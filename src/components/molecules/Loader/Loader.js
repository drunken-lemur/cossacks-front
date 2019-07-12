import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const Wrapper = styled(Spin)``;

@observer
class Loader extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const { store, children, ...rest } = this.props;

    if (store.isError) {
      const { message } = store.error.toJSON();

      return <div>Error: {message}. Something went wrong.....</div>;
    }

    return (
      <Wrapper {...rest} spinning={store.isPending}>
        <>{children}</>
      </Wrapper>
    );
  }
}

export default styled(Loader)``;
