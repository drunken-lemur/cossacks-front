import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Breadcrumb as Breadcrumb_ } from 'antd';

const { Item } = Breadcrumb_;

const Wrapper = styled(Breadcrumb_)``;

class Breadcrumb extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    breadcrumbs: PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string,
    }),
  };

  static defaultProps = {
    className: '',
    breadcrumbs: []
  };

  render() {
    const { breadcrumbs, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Item>Home</Item>
        
        {breadcrumbs.map(breadcrumb => (
          <Item>{breadcrumb.title}</Item>
        ))}
      </Wrapper>
    );
  }
}

export default styled(Breadcrumb)``;
