import { applySnapshot, detach, types } from 'mobx-state-tree';

export const Statuses = {
  done: 'done',
  pending: 'pending',
  error: 'error',
};

const debug = true;

const createApiStore = (model, service = {}, structure = {}) => {
  return types
    .model(model.name, {
      data: types.maybeNull(model),
      list: types.optional(types.array(model), []),
      skip: types.maybeNull(types.number),
      total: types.maybeNull(types.number),
      limit: types.maybeNull(types.number),
      status: types.maybeNull(types.enumeration(Object.keys(Statuses))),
      error: types.maybeNull(types.frozen()),
      ...structure,
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
    }))
    .actions(self => ({
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

      resetData(response) {
        debug && console.log('response:', response);

        if (response.data) {
          const { data: list, ...rest } = response;

          applySnapshot(self, { ...rest, list });
        } else {
          applySnapshot(self, { data: response });
        }

        debug && console.log('self:', self.toJSON());

        return self;
      },

      onError(error) {
        self.setStatusError();
        self.error = error;
        return Promise.reject(error);
      },

      clear() {
        detach(self);

        return self;
      },

      request(action, ...rest) {
        self.setStatusPending();

        return action
          .apply(service, rest)
          .then(self.resetData)
          .then(self.setStatusDone)
          .catch(self.onError);
      },

      create(...rest) {
        return self.request(service.create, ...rest);
      },

      find(...rest) {
        return self.request(service.find, ...rest);
      },

      get(...rest) {
        return self.request(service.get, ...rest);
      },

      update(...rest) {
        return self.request(service.patch, ...rest);
      },

      delete(...rest) {
        self.setStatusPending();

        return service.remove
          .apply(service, rest)
          .then(self.setStatusDone)
          .catch(self.onError);
      },
    }));
};

export default createApiStore;
