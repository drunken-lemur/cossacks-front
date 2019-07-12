import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { setDisplayName } from 'recompose';
import { Input as BaseInput } from 'semantic-ui-react';

@setDisplayName('Input')
@observer
class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { ...rest } = this.props;

    return <BaseInput {...rest} />;
  }
}

export default styled(Input)``;
