import React from 'react';
import { Typography } from 'antd';
import { getParams } from 'utils';
import PropTypes from 'prop-types';
import { EventsStore } from 'stores';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { observer, Provider } from 'mobx-react';

const Wrapper = styled.div``;

@withRouter
@observer
class Registration extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);

    this.eventsStore = EventsStore.create();
  }

  componentWillMount() {
    this.eventsStore.get(getParams(this).id);
  }

  render() {
    const { ...rest } = this.props;

    return (
      <Provider>
        <Wrapper {...rest}>
          <Typography.Title>Registration</Typography.Title>
        </Wrapper>
      </Provider>
    );
  }
}

export default styled(Registration)``;
