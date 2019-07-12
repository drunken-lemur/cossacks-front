import BaseState from '../base/BaseState';

const fields = ['name', 'description', 'start', 'end'];

const placeholders = {
  name: 'Name',
  description: 'Description',
  start: 'Start',
  end: 'End',
};

const labels = {
  name: 'Name',
  description: 'Description',
  start: 'Start',
  end: 'End',
};

const extra = {};

const rules = {};

const types = {};

const values = {};

const output = {};

class EventForm extends BaseState {
  constructor(hooks) {
    super(
      {
        fields,
        labels,
        placeholders,
        rules,
        types,
        values,
        extra,
        output,
      },
      { hooks }
    );
  }

  options() {
    return {
      showErrorsOnClear: false,
      showErrorsOnChange: false,
      showErrorsOnSubmit: true,
      validateOnChange: true,
    };
  }
}

export default EventForm;
