import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { createPayloadAction } from '../utils/_helpers';
import { auth } from '../components/Auth/firebase';

export const actionAuthLogin = createPayloadAction('LOG_IN');
export const actionAuthLogout = createPayloadAction('LOG_OUT');

export const login = () => {
  return async (dispatch) => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    dispatch(actionAuthLogin(user));
  };
};
