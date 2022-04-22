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
    const response: any = await this.chatApi.create(data);
    console.log('response', response);
  }

  async addUsersToChat(data: addUsersToChatData) {
    console.log(data);
    const response: any = await this.chatApi.addUserToChat(data);
    console.log(response);
  }

  async deleteUsersFromChat(data: deleteUsersFromChat) {
    const response: any = await this.chatApi.deleteUserFromChat(data);
  }
}

export default new ChatController();
