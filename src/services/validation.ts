export function validation(
  type: 'name' | 'login' | 'email' | 'password' | 'phone' | 'message',
  value: string,
): boolean {
  if (!value || !type) {
    return false;
  }
  let errorMessage = '';
  let checkParameter = '.{0,}';
  const containLetter = new RegExp('[a-z]|[A-Z]|[А-Я]|[а-я]', 'g');

  switch (type) {
    case 'message':
      errorMessage = 'Message validation failed';
      checkParameter = '.{1,}';
      break;
    case 'email':
      errorMessage = 'Email validation failed';
      checkParameter = '^([a-z]|[A-Z]|\\d){1,}\\@([a-z]|[A-Z]|\\d){1,}\\.([a-z]|[A-Z]){1,}$';
      break;
    case 'login':
      errorMessage = 'Login validation failed';
      if (!containLetter.test(value)) {
        console.log(errorMessage);
        return false;
      }
      checkParameter = '^([a-z]|[A-Z|\\d]|\\-|\\_){3,20}$';
      break;
    case 'phone':
      errorMessage = 'Phone validation failed';
      // checkParameterBack = /^((8|+7)[- ]?)?((?\d{3})?[- ]?)?[\d- ]{7,10}$/;
      checkParameter = '^[+\\d]\\d{9,14}$';
      break;
    case 'name':
      errorMessage = 'Name or second name validation failed';
      checkParameter = '^([a-z]|[A-Z]|\\d|\\-|\\_){3,20}$';
      break;
    case 'password':
      errorMessage = 'Password validation failed';
      const passed = /[A-Z]/.test(value) && /\d/.test(value);
      if (!passed || value.length > 40 || value.length < 8) {
        console.log(errorMessage);
        return false;
      }
      break;
    default:
      errorMessage = 'Validation requires a type';
      return false;
  }
  const reg = new RegExp(checkParameter, 'g');
  if (!reg.test(value)) {
    console.log(errorMessage);
    return false;
  }
  return true;
}

export function validateForm(x: any) {
  let type = x.target.name;
  if (type === 'second_name' || type === 'first_name') {
    type = 'name';
  }
  if (type === 'password' || type === 'confirm_password') {
    type = 'password';
  }
  if (!validation(type, x.target.value)) {
    x.target.style.borderColor = 'red';
  } else {
    x.target.style.borderColor = '#3369F3';
  }
}

export const isValidToSend = (formData: {}, length: number): boolean => {
  const entries = Object.entries(formData);
  if (entries.length < length) {
    return false;
  }
  for (let i = 0; i < entries.length; i++) {
    let type = entries[i][0];
    if (type === 'second_name' || type === 'first_name') {
      type = 'name';
    }
    if (type === 'password' || type === 'confirm_password') {
      type = 'password';
    }
    if (!validation(type, entries[i][1])) {
      return false;
    }
  }

  return true;
};
