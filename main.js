import { Login } from "./src/pages/home/modules/login";
import { Signin } from "./src/pages/home/modules/signin";
import { Error404 } from "./src/pages/error/404";
import { Error500 } from "./src/pages/error/500";
import { Chat } from "./src/pages/chat";
import { Profile } from "./src/pages/profile";
import { Home } from "./src/pages/home";

const HomePage = Home();
const loginPage = Login();
const SigninPage = Signin();
const Error404Page = Error404();
const Error500Page = Error500();
const ChatPage = Chat();
const ProfilePage = Profile();

const renderDOM = () => {
  const root = document.getElementById("root");
  root.innerHTML = ChatPage;
};
renderDOM();
