import './header.scss';
import logo from '../../utils/img/RM_Logo.png';

export function Header() {
  return (
    <header>
      <div className="logo_wrapper">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}
