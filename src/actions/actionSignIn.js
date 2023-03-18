import { createPayloadAction } from "../utils/_helpers";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

export const actionSignIn = createPayloadAction("SIGN_IN");

export const googleSignInRedux = () => {
  return async (dispatch) => {
    try {
      const provider = new GoogleAuthProvider();

      const { user } = await signInWithPopup(auth, provider);
      dispatch(actionSignIn(user));
    } catch (error) {
      console.log(error);
    }
  };
};
