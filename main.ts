import Login from './src/pages/home/modules/login';
import Signin from './src/pages/home/modules/signin';
import Error404 from './src/pages/error/404';
import Error500 from './src/pages/error/500';
import ChatPage from './src/pages/chat';
import Profile from './src/pages/profile';
import './src/layout/main/main.css';
import Router from './src/services/Router';
import AuthController from './src/components/controllers/AuthController';
import ChatController from './src/components/controllers/ChatController';

export const router = new Router('#root');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await AuthController.fetchUser();
  } catch (e) {
    console.log(e);
  }
  try {
    await ChatController.getChats({
      offset: 0,
      limit: 100,
      title: '',
    });
  } catch (e) {
    console.log(e);
  }
  router
    .use('/', Login)
    .use('/settings', Profile)
    .use('/sign-up', Signin)
    .use('/error-404', Error404)
    .use('/error-500', Error500)
    .use('/messenger', ChatPage)
    .start();
});
