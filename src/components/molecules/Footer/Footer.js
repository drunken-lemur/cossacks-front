import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import moment from 'utils/moment';

const Wrapper = styled(Layout.Footer)`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
        <span>Created by Drunken Lemur</span>
        <span>Lemur Studio ©{moment().format('YYYY')}</span>
      </Wrapper>
    );
  }
}

export default styled(Footer)``;
