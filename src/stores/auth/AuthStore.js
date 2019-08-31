import Auth from 'services/Auth';
import client from 'services/client';
import {types} from 'mobx-state-tree';
import User from 'stores/models/User';

const debug = false;

const Statuses = {
    done: 'done',
    pending: 'pending',
    error: 'error',
};

const Payload = types.model('Payload', {
    aud: types.string,
    exp: types.number,
    iat: types.number,
    iss: types.string,
    jti: types.string,
    sub: types.string,
    userId: types.string,
});

const AuthStore = types
    .model('AuthStore', {
        user: types.maybeNull(User),
        accessToken: types.maybeNull(types.string),
        payload: types.maybeNull(Payload),
        status: types.maybeNull(types.enumeration(Object.keys(Statuses))),
        error: types.maybeNull(types.frozen()),
    })
    .views(self => ({
        get isDone() {
            return self.status === Statuses.done;
        },

        get isPending() {
            return self.status === Statuses.pending;
        },

        get isError() {
            return self.status === Statuses.error;
        },

        get isAuthenticated() {
            return !!self.user;
        },
    }))
    .actions(self => ({
        afterCreate() {
            const cleanup = () => {
                self.setStatusPending();
                self.setStatusDone();
            };

            self
                .login()
                .then(cleanup)
                .catch(cleanup);
        },

        setAccessToken(response) {
            debug && console.log('Authenticated!', response);

            self.accessToken = response ? response.accessToken : null;

            if (!response) {
                return null;
            }

            return client.passport.verifyJWT(response.accessToken);
        },

        setPayload(payload) {
            debug && console.log('JWT Payload', payload);

            self.payload = payload;

            if (!payload) {
                return null;
            }

            return client.service('users').get(payload.userId);
        },

        setUser(user) {
            debug && console.log('User', user);

            client.set('user', user);

            self.user = user;

            return user;
        },

        login({email, password} = {}) {
            self.setStatusPending();

            return Auth.authenticate({email, password})
                .then(self.setAccessToken)
                .then(self.setPayload)
                .then(self.setUser)
                .then(self.setStatusDone)
                .catch(self.onError);
        },

        setError(error) {
            self.error = error;
        },

        onError(error) {
            debug && console.log('onError', error);

            self.setStatusError();

            self.setError(error);

            self.logout();
        },

        logout() {
            self.user = null;
            self.payload = null;
            self.accessToken = null;

            return Auth.logout();
        },

        setStatusDone() {
            self.status = Statuses.done;

            return self;
        },

        setStatusPending() {
            self.error = null;
            self.status = Statuses.pending;

            return self;
        },

        setStatusError() {
            self.status = Statuses.error;

            return self;
        },
    }));

export default AuthStore;
