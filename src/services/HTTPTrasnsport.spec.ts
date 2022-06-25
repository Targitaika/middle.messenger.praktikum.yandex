import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import { expect } from 'chai';
import HTTPTransport from './HTTPTransport';

describe('HTTPTransport', () => {
  it('should do smth', () => {});
  const testApi = new HTTPTransport('');
  let chatResponse: any;
  let chatDeleted = false;
  beforeEach(async () => {
    await testApi.post('/auth/signin', {
      data: {
        login: 'Asdasd1234',
        password: 'Asdasd1234',
      },
    });
    const chatResult: any = await testApi.post('/chats', {
      data: {
        title: 'test-chat',
      },
    });
    chatResponse = chatResult.response;
  });

  describe('.get', () => {
    it('should request chat list', async () => {
      const getResponse: any = await testApi.get(
        '/chats?offset=0&limit=1&title=""',
      );
      expect(getResponse.response).is.not.null;
    });
  });

  describe('.post', () => {
    it('should create chat', async () => {
      expect(chatResponse.id).is.not.null;
    });
  });

  describe('.put', () => {
    it('should add user to chat', async () => {
      const response: any = await testApi.put(
        '/chats/users',
        {
          data: {
            users: [61289],
            chatId: chatResponse.id,
          },
        },
        false,
      );
      expect(response.response).is.null;
    });
  });

  describe('.delete', () => {
    it('should delete chat', async () => {
      const response: any = await testApi.delete('/chats', {
        data: {
          chatId: chatResponse.id,
        },
      });
      expect(response.response.result).is.not.null;
      chatDeleted = true;
    });
  });

  afterEach(async () => {
    if (!chatDeleted) {
      await testApi.delete('/chats', {
        data: {
          chatId: chatResponse.id,
        },
      });
    }

    await testApi.post('/auth/logout', {});
  });
});
