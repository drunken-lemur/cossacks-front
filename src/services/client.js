import config from 'config';
import io from 'socket.io-client';
import feathers from '@feathersjs/client';

const socket = io(config.backedUrl);
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(
  feathers.authentication({
    storage: window.localStorage,
  }),
);

export default client;
