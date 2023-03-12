import { useState } from 'react';
import './mainpage.scss';
import logo from '../../utils/img/RM_Logo.png';
import { Content } from '../Content/Content';
import { SearchBar } from '../SearchBar/SearchBar';

export function MainPage() {
  const [search, setSearch] = useState('');

  return (
    <>
      <header>
        <div className="logo_wrapper">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <SearchBar search={search} setSearch={setSearch} />
      <Content search={search} />
    </>
  );
}
