import React from 'react';
import { Default } from 'templates';
import styled from 'styled-components';

const Wrapper = styled.div``;

const body = (
  <Wrapper>
    <h1>Page not found</h1>
  </Wrapper>
);

const NotFoundPage = () => <Default body={body} />;

export default NotFoundPage;
