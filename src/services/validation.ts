export function validation(
  type: "name" | "login" | "email" | "password" | "phone" | "message",
  value: string
): boolean | undefined {
  if (!value || !type) {
    return;
  }
  let errorMessage = "";
  let checkParameter = ".{0,}";
  const containLetter = new RegExp(`[a-z]|[A-Z]|[А-Я]|[а-я]`, "g");

  switch (type) {
    case "message":
      errorMessage = "Message validation failed";
      checkParameter = ".{1,}";
      break;
    case "email":
      errorMessage = "Email validation failed";
      checkParameter = `^([a-z]|[A-Z]|\\d){1,}\\@([a-z]|[A-Z]|\\d){1,}\\.([a-z]|[A-Z]){1,}$`;
      break;
    case "login":
      errorMessage = "Login validation failed";
      if (!containLetter.test(value)) {
        console.log(errorMessage);
        return false;
      }
      checkParameter = `^([a-z]|[A-Z|\\d]|\\-|\\_){3,20}$`;
      break;
    case "phone":
      errorMessage = "Phone validation failed";
      checkParameter = `^[\+\d]\d{9, 14}$`;
      break;
    case "name":
      errorMessage = "Name or second name validation failed";
      checkParameter = `^([a-z]|[A-Z]|\\d|\\-|\\_){3,20}$`;
      break;
    case "password":
      errorMessage = "Password validation failed";
      let passed = /[A-Z]/.test(value) && /\d/.test(value);
      if (!passed || value.length > 40 || value.length < 8) {
        console.log(errorMessage);
        return false;
      }
      break;
  }
  let reg = new RegExp(checkParameter, "g");
  if (!reg.test(value)) {
    console.log(errorMessage);
    return false;
  } else {
    // console.log("Success");
  }

  return true;
}

export function validateForm(x: any) {
  let type = x.target.name;
  if (type === "second_name" || type === "first_name") {
    type = "name";
  }
  if (!validation(type, x.target.value)) {
    x.target.style.borderColor = "red";
  } else {
    x.target.style.borderColor = "#3369F3";
  }
}
