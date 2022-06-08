import Router from './src/services/Router';
import Login from './src/pages/home/modules/login';
import Signin from './src/pages/home/modules/signin';
import Error404 from './src/pages/error/404';
import Error500 from './src/pages/error/500';
import ChatPage from './src/pages/chat/chat';
import Profile from './src/pages/profile';
import './src/layout/main/main.css';
import MainApi from './main.api';

export const router = new Router('#root');
const mainApi = new MainApi();
router
  .use('/', Login)
  .use('/settings', Profile)
  .use('/sign-up', Signin)
  .use('/error-404', Error404)
  .use('/error-500', Error500)
  .use('/messenger', ChatPage)
  .start();

document.addEventListener('DOMContentLoaded', () => {
  const userId = mainApi.request();
  console.log(userId);
});
