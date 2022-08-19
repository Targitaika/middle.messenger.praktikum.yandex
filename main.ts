// import Login from '@pages/home/modules/login';
import Login from '@pages/home/modules/login';
import Signin from '@pages/home/modules/signin';
import Error404 from '@pages/error/404';
import Error500 from '@pages/error/500';
import ChatPage from '@pages/chat';
import Profile from '@pages/profile';
import './src/layout/main/main.css';
import AuthController from '@components/controllers/AuthController';
import ChatController from '@components/controllers/ChatController';
import Router from './src/services/Router';

export const router = new Router('#root');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await AuthController.fetchUser().then(() => {
      router.go('/messenger');
    });
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
    .use('/messenger', ChatPage);
  router.start();
});
