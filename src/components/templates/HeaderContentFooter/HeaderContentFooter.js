import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { Header } from 'organisms';
import { Breadcrumb, Footer } from 'molecules';
import styled, { createGlobalStyle } from 'styled-components';

const Content = styled(Layout.Content)``;

const Inner = styled.div``;

const Wrapper = styled(Layout)`
  --header-height: 64px;
  --breadcrumb-height: 64px;
  --footer-height: 64px;

  ${Header} {
    z-index: 1;
    width: 100%;
    position: fixed;
    height: var(--header-height);
  }

  ${Breadcrumb} {
    line-height: var(--breadcrumb-height);
  }
  
  ${Content} {
    padding: 0 48px;
    overflow: scroll;
    margin-top: var(--header-height);
    height: calc(100vh - var(--header-height) - var(--footer-height));
  }
  
  ${Inner} {
    padding: 24px;
    background: #fff;
    min-height: calc(100% - var(--breadcrumb-height));
  }
  
  ${Footer} {
    line-height: 16px;
    height: var(--footer-height);
  }
`;

const GlobalStyle = createGlobalStyle`
  html, 
  body,
  #root {
    height: 100%;
  }
  
  .ant-spin-nested-loading {
      padding: 16px;
      border: 1px solid rgb(235, 237, 240);
  }
  
  .ant-page-header {
    border: 1px solid rgb(235, 237, 240);
    border-bottom: none;
  }
`;

class HeaderContentFooter extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    header: PropTypes.node,
    children: PropTypes.node,
    footer: PropTypes.node,
    breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        to: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    className: '',
    header: <Header/>,
    children: null,
    footer: <Footer/>,
    breadcrumbs: [],
  };

  render() {
    const { header, children, footer, breadcrumbs, ...rest } = this.props;

    return (
      <>
        <GlobalStyle/>

        <Wrapper {...rest}>

          {header}

          <Content>
            <Breadcrumb breadcrumbs={breadcrumbs}/>

            <Inner>{children}</Inner>
          </Content>

          {footer}
        </Wrapper>
      </>
    );
  }
}

export default HeaderContentFooter;
