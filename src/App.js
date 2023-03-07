import logo from './utils/img/RM_Logo.png';
import './App.css';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo_wrapper">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <Content />
    </div>
  );
}

export default App;
