import React from 'react';
import { Menu } from 'molecules';
import PropTypes from 'prop-types';
import { Icon, Layout } from 'antd';
import styled from 'styled-components';

const Logo = styled(Icon).attrs({
  theme: 'filled',
  type: 'dashboard',
})`
  --logo-size: 2em;

  svg {
    fill: #fff;
    width: var(--logo-size);
    height: var(--logo-size);
  }
`;

const Wrapper = styled(Layout.Header)`
  ${Logo} {
    float: left;
    margin: 16px 24px 16px 0;
  }
  
  ${Menu} {
    line-height: 64px;
  }
`;

class Header extends React.PureComponent {
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
        <Logo/>

        <Menu/>
      </Wrapper>
    );
  }
}

export default styled(Header)``;