import Messages from 'services/Messages';
import Message from 'stores/models/Message';
import { createApiStore } from '../utils';

const MessageStore = createApiStore(Message, Messages);

export default MessageStore;
