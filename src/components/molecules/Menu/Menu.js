import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter, flexCenterBetween, typography } from 'theme/mixins';

const Wrapper = styled.div`
  ${flexCenterBetween()};
  display: inline-flex;
  background: #9cb4ca;
`;

const Item = styled(NavLink)`
  color: #fff;
  width: 142px;
  height: 72px;
  ${flexCenter()};
  cursor: pointer;
  text-decoration: none;
  ${typography(14, 18, 500)};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: rgba(255, 255, 255, 0.15);
  }
`;

class Menu extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    ),
  };

  static defaultProps = {
    className: '',
    items: [],
  };

  render() {
    const { items, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        {items.map(({ title, isActive, to = '#', ...rest }, key) => (
          <Item key={key} {...rest} to={to}>
            {title}
          </Item>
        ))}
      </Wrapper>
    );
  }
}

export default styled(Menu)``;
