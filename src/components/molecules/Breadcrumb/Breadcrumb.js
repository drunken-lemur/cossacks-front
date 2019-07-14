import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Breadcrumb as Breadcrumb_ } from 'antd';

const { Item } = Breadcrumb_;

const Wrapper = styled(Breadcrumb_)``;

class Breadcrumb extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Item>Home</Item>
        <Item>List</Item>
        <Item>App</Item>
      </Wrapper>
    );
  }
}

export default styled(Breadcrumb)``;
