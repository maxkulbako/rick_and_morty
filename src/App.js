/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
