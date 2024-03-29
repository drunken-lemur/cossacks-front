import { types } from 'mobx-state-tree';

import { User } from 'stores/models';

const Event = types.model('Event', {
  _id: types.identifier,
  name: types.optional(types.string, ''),
  description: types.optional(types.string, ''),
  start: types.optional(types.string, ''),
  end: types.optional(types.string, ''),
  user: User,
  participants: types.optional(types.array(User), []),
  isUserSubscribed: types.boolean,
});

export default Event;
