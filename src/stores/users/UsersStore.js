import Users from 'services/Users';
import User from 'stores/models/User';
import { createApiStore } from '../utils';

const UsersStore = createApiStore(User, Users);

export default UsersStore;
