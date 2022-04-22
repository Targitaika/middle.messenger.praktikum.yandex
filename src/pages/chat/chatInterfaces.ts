export interface getChatsData {
  offset: number;
  limit: number;
  title: string;
}

export interface getChatsResponse {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
}

export interface createChatData {
  title: string;
}

export interface deleteChatData {
  chatId: number;
}

export interface deleteChatResponse {
  userId: number;
  result: {
    id: number;
    title: string;
    avatar: string;
  };
}

export interface getChatSentFilesData {
  id: number;
}

export interface getChatSentFilesResponse {
  id: number;
  user_id: number;
  chat_id: number;
  time: string;
  type: string;
  content: number;
  file: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

export interface addUsersToChatData {
  users: [number];
  chatId: number;
}

export interface deleteUsersFromChat {
  users: [number];
  chatId: number;
}

export interface getChatUsers {
  id: number;
}
