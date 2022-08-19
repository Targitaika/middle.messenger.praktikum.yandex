import { withChats, withUser } from '@services/Hocs';
import ChatPage from './chat';

export default withUser(withChats(ChatPage));
