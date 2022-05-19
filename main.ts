import Login from "./src/pages/home/modules/login";
import Signin from "./src/pages/home/modules/signin";
import { Error404 } from "./src/pages/error/404";
import { Error500 } from "./src/pages/error/500";
import { renderDOM } from "./src/services/renderDOM";
import { ChatPage } from "./src/pages/chat/chat";
import Profile from "./src/pages/profile";
import { Home } from "./src/pages/home";

document.addEventListener("DOMContentLoaded", () => {
  const chatPage = new ChatPage({});
  const HomePage = Home();
  const loginPage = new Login({});
  const SigninPage = new Signin({});
  const Error404Page = Error404;
  const Error500Page = Error500;
  const ProfilePage = new Profile({});
  console.log(
    !!chatPage,
    !!HomePage,
    !!loginPage,
    !!SigninPage,
    !!Error404Page,
    !!Error500Page,
    !!ProfilePage
  );

  renderDOM("#root", Error500Page);
});
