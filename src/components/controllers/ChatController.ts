import {
  addUsersToChatData,
  createChatData,
  deleteUsersFromChat,
  getChatsData,
} from '../../pages/chat/chatInterfaces';
import ChatApi from '../../pages/chat/chat.api';
import store from '../../services/Store';

class ChatController {
  private chatApi: ChatApi;

  constructor() {
    this.chatApi = new ChatApi();
  }

  async getChats(data: getChatsData) {
    const response: any = await this.chatApi.request(data);
    store.set('chats.list', response.response);

    return response.response;
  }

  async createChats(data: createChatData) {
    await this.chatApi.create(data);
  }

  async addUsersToChat(data: addUsersToChatData) {
    await this.chatApi.addUserToChat(data);
  }

  async deleteUsersFromChat(data: deleteUsersFromChat) {
    await this.chatApi.deleteUserFromChat(data);
  }

  async getChatUsersSocket(data: number) {
    const response: any = await this.chatApi.getChatUsersSocket(data);

    store.set('chats.token', response.response.token);
    return response.response.token;
  }
}

export default new ChatController();
