/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import './auth.scss';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, actionAuthLogin } from '../../actions/actionAuth';

export function Auth() {
  const activeUser = useSelector((state) => state.auth.activeUser);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(actionAuthLogin(user));
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="auth_container">
      {activeUser ? activeUser.name : <p className="login_name">LOGIN</p>}
      <button onClick={handleLogin} type="button" className="login_google">
        GOOGLE
      </button>
    </div>
  );
}
