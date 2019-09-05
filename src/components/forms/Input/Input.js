import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { mapProps, setDisplayName } from 'recompose';
import { Input as BaseInput } from 'antd';

@setDisplayName('Input')
@mapProps(({ onChange, ...rest }) => ({
  onChange: e => onChange(e.target.value),
  ...rest,
}))
@observer
class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    onChange: () => null,
  };

  render() {
    const { ...rest } = this.props;

    return <BaseInput {...rest} />;
  }
}

export default styled(Input)``;
