export const list: {
  name: string;
  label: string;
  text: string;
  type: string;
  events?: {
    click?: () => void;
    keydown?: (arg0: any, arg1: any) => void;
  };
}[] = [
  {
    label: 'Почта',
    name: 'email',
    text: 'pochta@yandex.ru',
    type: 'input_profile',
  },
  {
    label: 'Логин',
    name: 'login',
    text: 'ivanivanov',
    type: 'input_profile',
  },
  {
    label: 'Имя',
    name: 'first_name',
    text: 'Иван',
    type: 'input_profile',
  },
  {
    label: 'Фамилия',
    name: 'second_name',
    text: 'Иванов',
    type: 'input_profile',
  },
  {
    label: 'Имя в чате',
    name: 'display_name',
    text: 'Иван',
    type: 'input_profile',
  },
  {
    label: 'Телефон',
    name: 'phone',
    text: '+7 (909) 967 30 30',
    type: 'input_profile',
  },
];

export const passwordList: {
  name: string;
  label: string;
  text: string;
  type: string;
}[] = [
  {
    label: 'Почта',
    name: 'email',
    text: 'pochta@yandex.ru',
    type: 'input_profile',
  },
  {
    label: 'Логин',
    name: 'login',
    text: 'ivanivanov',
    type: 'input_profile',
  },
  {
    label: 'Имя',
    name: 'first_name',
    text: 'Иван',
    type: 'input_profile',
  },
];
