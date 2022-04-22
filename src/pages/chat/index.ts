import ChatPage from './chat';
import { withChats, withUser } from '../../services/Hocs';

export default withUser(withChats(ChatPage));
