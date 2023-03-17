import './App.css';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionAuthSignUp } from './actions/actionAuth';

function App() {
  const activeUser = useSelector((state) => state.auth.activeUser);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(actionAuthSignUp());
  };

  return (
    <div className="App">
      {activeUser.id && (
        <div className="sign_up_wrapper">
          <p>{activeUser.name}</p>
          <button onClick={handleSignUp}>SIGN UP</button>
        </div>
      )}

      <Outlet />
    </div>
  );
}

export default App;
