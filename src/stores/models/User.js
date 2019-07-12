import { types } from 'mobx-state-tree';

const User = types.model('User', {
  _id: types.identifier,
  email: types.optional(types.string, ''),
  password: types.optional(types.string, ''),
  firstName: types.optional(types.string, ''),
  lastName: types.optional(types.string, ''),
  middleName: types.optional(types.string, ''),
  avatar: types.optional(types.string, ''),
  phone: types.optional(types.string, ''),
});

export default User;
