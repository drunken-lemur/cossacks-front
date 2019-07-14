import React from 'react';
import { noop } from 'utils';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import styled from 'styled-components';
import { Form as BaseForm } from 'semantic-ui-react';

const StyledForm = styled(BaseForm)``;

class Form extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    form: PropTypes.object.isRequired,
    submitOnEnter: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    submitOnEnter: true,
    form: {
      onReset: noop,
      onSubmit: noop,
    },
  };

  onKeyUp = e => {
    const { submitOnEnter, form } = this.props;

    if (submitOnEnter && e.key === 'Enter') {
      form.submit(form);
    }
  };

  componentDidMount() {
    const { submitOnEnter } = this.props;

    if (submitOnEnter) {
      window.addEventListener('keyup', this.onKeyUp);
    }
  }

  componentWillUnmount() {
    const { submitOnEnter } = this.props;

    if (submitOnEnter) {
      window.removeEventListener('keyup', this.onKeyUp);
    }
  }

  render() {
    // noinspection JSUnusedLocalSymbols
    const { children, form, submitOnEnter, ...rest } = this.props;

    const { onSubmit, onReset } = form;

    return (
      <StyledForm {...{ onSubmit, onReset ...rest }}>
        <Provider form={form}>
          <>{children}</>
        </Provider>
      </StyledForm>
    );
  }
}

export default styled(Form)``;
