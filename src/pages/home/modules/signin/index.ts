import { Signin } from './signin';
import { withUser, withUserAndPassword } from '../../../../services/Hocs';

export default withUser(Signin);
