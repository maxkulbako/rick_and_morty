import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { createPayloadAction } from '../utils/_helpers';
import { auth } from '../components/Auth/firebase';

export const actionAuthSignIn = createPayloadAction('SIGN_IN');
export const actionAuthSignUp = createPayloadAction('SIGN_UP');

export const loginWithGoogle = () => {
  return async (dispatch) => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    dispatch(actionAuthSignIn(user));
  };
};
