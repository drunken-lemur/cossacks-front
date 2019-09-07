import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { Breadcrumb as Breadcrumb_ } from 'antd';
import { Link } from 'react-router-dom';

const { Item } = Breadcrumb_;

const Wrapper = styled(Breadcrumb_)``;

class Breadcrumb extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        to: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    className: '',
    breadcrumbs: [],
  };

  render() {
    const { breadcrumbs, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <Item>
          <Link to="/">Home</Link>
        </Item>

        {breadcrumbs.map(breadcrumb => (
          <Item key={breadcrumb.to || breadcrumb.title}>
            {!!breadcrumb.to ? (
              <Link to={breadcrumb.to}>
                {breadcrumb.title}
              </Link>
            ) : (
              <span>{breadcrumb.title}</span>
            )}
          </Item>
        ))}
      </Wrapper>
    );
  }
}

export default styled(Breadcrumb)``;
