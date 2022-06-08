import ErrorLayout from '../../layout/error';

export default class Error404 extends ErrorLayout {
  constructor(props: any) {
    super(props);
    this.props.title = '404';
    this.props.text = 'Не туда попали';
    this.props.linkText = 'Назад к чатам';
  }
}
