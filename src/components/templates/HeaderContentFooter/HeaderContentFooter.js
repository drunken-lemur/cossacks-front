import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { Header } from 'organisms';
import styled from 'styled-components';
import { Breadcrumb, Footer } from 'molecules';

const Content = styled(Layout.Content)``;

const Inner = styled.div``;

const Wrapper = styled(Layout)`
  ${Header} {
    z-index: 1;
    width: 100%;
    position: fixed;
  }

  ${Breadcrumb} {
    margin: 16px 0;
  }
  
  ${Content} {
    padding: 0 48px;
    margin-top: 64px;
  }
  
  ${Inner} {
    padding: 24px;
    background: #fff;
    min-height: 380px;
  }
`;

class HeaderContentFooter extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    header: PropTypes.node,
    children: PropTypes.node,
    footer: PropTypes.node,
  };

  static defaultProps = {
    className: '',
    header: <Header/>,
    children: null,
    footer: <Footer/>,
  };

  render() {
    const { header, children, footer, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        {header}

        <Content>
          <Breadcrumb/>

          <Inner>{children}</Inner>
        </Content>

        {footer}
      </Wrapper>
    );
  }
}

export default HeaderContentFooter;
