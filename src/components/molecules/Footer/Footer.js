import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from 'antd';

const Wrapper = styled(Layout.Footer)`
  text-align: center;
`;

class Footer extends React.PureComponent {
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
        Ant Design ©2018 Created by Ant UED
      </Wrapper>
    );
  }
}

export default styled(Footer)``;
