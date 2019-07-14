import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Spin, Typography } from 'antd';

const Wrapper = styled(Spin)``;

@observer
class Loader extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  getErrors = () => {
    const { store } = this.props;

    if (!store.isError) {
      return null;
    }

    const message = R.pathOr(null, ['error', 'message'], store);

    return (
      <Typography.Text type="danger">
        {message || 'Error... Something went wrong.....'}
      </Typography.Text>
    );
  };

  render() {
    const { store, children, ...rest } = this.props;

    return (
      <Wrapper {...rest} spinning={store.isPending}>
        <>
          {this.getErrors()}
          {children}
        </>
      </Wrapper>
    );
  }
}

export default styled(Loader)``;
