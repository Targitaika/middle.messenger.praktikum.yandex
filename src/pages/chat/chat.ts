import Block from '../../services/Component';
import tpl from './chat.hbs';
import Field from '../../components/field';
import { SearchIcon } from '../../components/icons/search';
import './chat.css';
import { MessagePinIcon } from '../../components/icons/messagePin';
import { MessageSendIcon } from '../../components/icons/messageSend';
import { MessageTikIcon } from '../../components/icons/messageTik';
import ChatItem from './chatItem';
import { router } from '../../../main';
import Button from '../../components/button';
import ChatController from '../../components/controllers/ChatController';
import UserModal from './userModal';
import { FieldModal } from '../../components/fieldModal/fieldModal';

export default class ChatPage extends Block {
  constructor(props: any) {
    super(props);

    this.props.showUserModal = false;
    this.props.showAddModal = false;
    this.props.showRemoveModal = false;
    this.props.selectedChat = props.list[0];
  }

  handleSearch(e: any) {
    this.setProps({ searchField: e.target.value });
  }

  handleClickSearch(e: any) {
    ChatController.getChats({
      offset: 10,
      limit: 10,
      title: e,
    });
  }

  handleChatItemClick(e) {
    const chatId = parseInt(e.target.closest('li').dataset.chatId, 10);
    const choosedChat = this.props.list.filter((item) => item.id === chatId);
    this.setProps({ selectedChat: choosedChat[0] });
    document.querySelectorAll('li.list-block__item').forEach((item) => {
      item.classList.remove('selected-chat');
    });
    const pathChat = Array.from(
      document.querySelectorAll('li.list-block__item'),
    ).filter(
      (item) => parseInt(item.dataset.chatId, 10) === this.props.selectedChat.id,
    )[0];
    pathChat.classList.add('selected-chat');
  }

  render(): DocumentFragment {
    return this.compile(tpl, {
      ...this.props,
      pinIcon: MessagePinIcon,
      avatar:
        `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`
        || 'http://sun9-44.userapi.com/impf/4E3j4SGPX2aFmmus-akOKZhswIbMDiI05Jyv6Q/DaZxg4wnOrw.jpg?size=604x604&quality=96&sign=87f803e3ec2b022b16518b613af7bd99&type=album',
      sendIcon: MessageSendIcon,
      tikIcon: MessageTikIcon,
      name: this.props.display_name || this.props.first_name,
      showModal: this.props.showUserModal ? '' : 'dn',
      showAddModal: this.props.showAddModal ? '' : 'dn',
      showRemoveModal: this.props.showRemoveModal ? '' : 'dn',
      selectedId: this.props.selectedChat?.id,
    });
  }

  protected initChildren() {
    let arr = [];
    if (this.props.list) {
      arr = this.props.list.map(
        (prop: any) => new ChatItem({
          ...prop,
          events: {
            click: (e) => this.handleChatItemClick(e),
          },
        }),
      );
    }
    this.children.chatList = arr;
    this.children.linkToSettings = new Button({
      text: 'Профиль >',
      type: 'button',
      className: 'btn_chat',
      events: {
        click: () => {
          router.go('/settings');
        },
      },
    });

    this.children.searchInput = new Field({
      name: 'search',
      label: '',
      placeholder: 'Поиск',
      type: 'search',
      icon: SearchIcon,
      events: {
        change: (e) => this.handleSearch(e),
        blur: () => this.handleClickSearch(this.props.searchField),
      },
    });

    this.children.messageInput = new Field({
      name: 'message',
      label: '',
      placeholder: 'Отправить',
      type: 'send-message',
    });

    this.children.userModal = new UserModal({
      btn_1: new Button({
        text: 'Добавить пользователя',
        type: 'btn_text',
        className: 'regular showUserModal',
        events: {
          click: () => {
            this.setProps({ showAddModal: !this.props.showAddModal });
          },
        },
      }),
      btn_2: new Button({
        text: 'Удалить пользователя',
        type: 'btn_text',
        className: 'regular showUserModal',
        events: {
          click: () => {
            this.setProps({ showRemoveModal: !this.props.showRemoveModal });
          },
        },
      }),
    });

    this.children.addUserModal = new FieldModal({
      title: 'Добавить пользователя',
      field: new Field({
        name: 'message',
        label: 'Логин',
        placeholder: 'Логин',
        type: 'send-message',
        events: {
          change: (e) => this.setProps({ handleAddUser: e.target.value }),
        },
      }),
      btn: new Button({
        text: 'Добавить',
        type: 'btn_text',
        className: 'regular',
        events: {
          click: (e) => {
            e.preventDefault();
            this.setProps({ showAddModal: false });
            ChatController.addUsersToChat({
              users: [parseInt(this.props.handleAddUser, 10)],
              chatId: this.props.selectedChat.id,
            });
          },
        },
      }),
    });

    this.children.removeUserModal = new FieldModal({
      title: 'Удалить пользователя',
      field: new Field({
        name: 'message',
        label: 'Логин',
        placeholder: 'Логин',
        type: 'send-message',
      }),
      btn: new Button({
        text: 'Удалить',
        type: 'btn_text',
        className: 'regular',
        events: {
          click: (e) => {
            e.preventDefault();
            this.setProps({ showRemoveModal: false });
            ChatController.deleteUsersFromChat({
              users: [parseInt(this.props.handleAddUser, 10)],
              chatId: this.props.selectedChat.id,
            });
          },
        },
      }),
    });

    this.children.showUserModal = new Button({
      text: '...',
      type: 'button',
      className: !this.props.showUserModal
        ? 'btn_showUserModal'
        : 'btn_showUserModal dn',
      events: {
        click: () => {
          this.setProps({ showUserModal: !this.props.showUserModal });
        },
      },
    });
  }
}
