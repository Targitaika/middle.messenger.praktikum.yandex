import { Profile } from './profile';
import { withUser, withUserAndPassword } from '../../services/Hocs';

export default withUser(Profile);
