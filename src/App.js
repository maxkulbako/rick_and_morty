import './App.css';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { actionAuthLogout } from './actions/actionAuth';
import { auth } from './components/Auth/firebase';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        type="button"
        className="logout"
        onClick={() => {
          signOut(auth);
          dispatch(actionAuthLogout(null));
        }}
      >
        logout
      </button>
      <Outlet />
    </div>
  );
}

export default App;
