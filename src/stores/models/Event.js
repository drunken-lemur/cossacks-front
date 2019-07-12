import { types } from 'mobx-state-tree';

const Event = types.model('Event', {
  _id: types.identifier,
  name: types.optional(types.string, ''),
  description: types.optional(types.string, ''),
  start: types.optional(types.string, ''),
  end: types.optional(types.string, ''),
});

export default Event;
