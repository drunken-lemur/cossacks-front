import client from './client';

const Auth = {
  authenticate: ({ email, password } = {}) => {
    return email && password
      ? client.authenticate({ strategy: 'local', email, password })
      : client.authenticate();
  },

  logout: client.logout,
};

export default Auth;
