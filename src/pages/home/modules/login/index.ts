import { Login } from './login';
import { withUser, withUserAndPassword } from '../../../../services/Hocs';

export default withUser(Login);
