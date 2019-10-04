import Events from 'services/Events';
import Event from 'stores/models/Event';
import { createApiStore } from '../utils';
import { client } from '../../services';

const getSubscribeService = id => client.service(`/events/${id}/subscribe`);

const EventsStore = createApiStore(
  Event,
  Events,
  () => ({}),
  self => ({
    subscribe() {
      const service = getSubscribeService(self.data._id);
      self.setStatusPending();

      return service
        .create({})
        .then(self.resetData)
        .then(self.setStatusDone)
        .catch(self.onError);
    },

    unsubscribe() {
      const service = getSubscribeService(self.data._id);
      self.setStatusPending();

      return service
        .remove(0)
        .then(self.resetData)
        .then(self.setStatusDone)
        .catch(self.onError);
    },
  })
);

export default EventsStore;
