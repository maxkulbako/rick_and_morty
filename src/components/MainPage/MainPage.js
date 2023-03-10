import './mainpage.scss';
import logo from '../../utils/img/RM_Logo.png';
import { Content } from '../Content/Content';

export function MainPage() {
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