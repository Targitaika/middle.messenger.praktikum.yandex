import tmpl from './messageList.hbs';
import './messageList.css';
import Block from '../../../services/Component';
import Message from '../message';

export class MessageList extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    const tempArr = [
      {
        text: 'Выбери чат, чтобы начать',
        time: '66:66',
        className: 'message_to',
      },
    ];
    if (
      this.props.messagesList === undefined
      || this.props.messagesList?.length === 0
    ) {
      this.setProps({ messagesList: tempArr });
    }
    return this.compile(tmpl, {
      ...this.props,
    });
  }

  renderMessage(arr: undefined | any[] | number) {
    const tempArr = [
      {
        text: 'temp',
        time: '11:23',
        className: 'message_to',
      },
      {
        text: 'temp',
        time: '11:23',
        className: 'message_from',
      },
    ];
    if (Array.isArray(arr)) {
      return arr.map((prop) => new Message({ ...prop }));
    }
    return tempArr.map((prop) => new Message({ ...prop }));
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps.messagesList !== newProps.messagesList) {
      this.children.messagesList = this.renderMessage(this.props.messagesList);
    }
    return super.componentDidUpdate(oldProps, newProps);
  }

  protected initChildren() {
    this.children.messagesList = this.renderMessage(this.props.messagesList);
  }
}
