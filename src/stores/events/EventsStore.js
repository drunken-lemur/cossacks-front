import Events from 'services/Events';
import Event from 'stores/models/Event';
import { createApiStore } from '../utils';

const EventsStore = createApiStore(Event, Events);

export default EventsStore;
