import ErrorLayout from '../../layout/error';

export default class Error500 extends ErrorLayout {
  constructor(props: any) {
    super(props);
    this.props.title = '500';
    this.props.text = 'Мы уже фиксим';
    this.props.linkText = 'Назад к чатам';
  }
}
