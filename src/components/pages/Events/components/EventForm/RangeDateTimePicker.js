import * as React from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const { RangePicker } = DatePicker;

class RangeDateTimePicker extends React.PureComponent {
  static propTypes = {
    format: PropTypes.string,
    showTime: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    showTime: true,
    format: 'HH:mm DD.MM.YYYY',
  };

  render() {
    const { ...rest } = this.props;

    return (
      <div>
        <RangePicker {...rest} />
      </div>
    );
  }
}

export default styled(RangeDateTimePicker)``;
