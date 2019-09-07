import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Error = styled.div``;

class Errors extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    errors: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    className: '',
    error: null,
    errors: [],
  };

  render() {
    const { error, errors, ...rest } = this.props;

    return !error && !errors.length ? null : (
      <Wrapper {...rest}>
        <Error>{error}</Error>

        {errors.map((error, key) => (
          <Error key={`error_${key}`}>{error}</Error>
        ))}
      </Wrapper>
    );
  }
}

export default styled(Errors)``;
