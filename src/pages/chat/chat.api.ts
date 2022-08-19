import HTTPTransport from '@services/HTTPTransport';
import {
  addUsersToChatData,
  createChatData,
  deleteUsersFromChat,
  getChatsData,
} from './chatInterfaces';

const chatApiInstance = new HTTPTransport('/chats');

export default class ChatApi {
  request(data: getChatsData) {
    return chatApiInstance.get('', { data });
  }

  create(data: createChatData): any {
    return chatApiInstance.post('', { data });
  }

  addUserToChat(data: addUsersToChatData): any {
    return chatApiInstance.put('/users', { data });
  }

  deleteUserFromChat(data: deleteUsersFromChat) {
    return chatApiInstance.delete('/users', { data });
  }

  getChatUsersSocket(data: number) {
    return chatApiInstance.post(`/token/${data}`, {});
  }
}
