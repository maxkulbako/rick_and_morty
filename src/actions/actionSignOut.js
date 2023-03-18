import { createPayloadAction } from "../utils/_helpers";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const actionSignOut = createPayloadAction("SIGN_OUT");

export const googleSignOutRedux = () => {
  return (dispatch) => {
    signOut(auth);
    dispatch(actionSignOut());
  };
};
