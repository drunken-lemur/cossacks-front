import { types } from 'mobx-state-tree';

import User from '../models/User';

const Message = types.model('Message', {
  _id: types.identifier,
  userId: types.maybeNull(types.string),
  text: types.optional(types.string, ''),
  createdAt: types.maybeNull(types.number),
  user: types.maybeNull(User),
});

export default Message;
