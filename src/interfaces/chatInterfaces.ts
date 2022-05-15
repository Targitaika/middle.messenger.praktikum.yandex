import fieldInterface from "./fieldInterface";

export interface chatItemInterface {
  name: string;
  src: string;
  text: string;
  date: string;
  unread: number;
}

export interface infoInterface {
  pinIcon: () => string;
  sendIcon: () => string;
  tikIcon: () => string;
  chatList: Array<chatItemInterface>;
  searchInput: (arg0: fieldInterface) => string;
  messageInput: (arg0: fieldInterface) => string;
}
