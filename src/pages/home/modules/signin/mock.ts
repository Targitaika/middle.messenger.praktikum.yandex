export const fieldList: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  events?: {
    click?: () => void;
    keydown?: (arg0: any, arg1: any) => void;
  };
}[] = [
  {
    label: 'Почта',
    name: 'email',
    placeholder: 'pochta@yandex.ru',
  },
  {
    label: 'Логин',
    name: 'login',
    placeholder: 'ivanivanov',
    events: {
      keydown: () => console.log(this),
    },
  },
  {
    label: 'Имя',
    name: 'first_name',
    placeholder: 'Иван',
  },
  {
    label: 'Фамилия',
    name: 'second_name',
    placeholder: 'Иванов',
  },
  {
    label: 'Телефон',
    name: 'phone',
    placeholder: '+7 (909) 967 30 30',
  },
  {
    label: 'Пароль',
    name: 'password',
    placeholder: '******',
    type: 'password',
  },
  {
    label: 'Пароль (ещё раз)',
    name: 'confirm_password',
    placeholder: '******',
    type: 'password',
  },
];
