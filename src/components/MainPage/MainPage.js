import { useEffect } from 'react';
import './mainpage.scss';
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../utils/img/RM_Logo.png';
import { Content } from '../Content/Content';
import { SearchBar } from '../SearchBar/SearchBar';

import { getRickyMortyData } from '../../actions';

export function MainPageView({ items, getItems }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const nameQuery = searchParams.get('name') || '';

  useEffect(() => {
    getItems(nameQuery);

    window.scroll(0, 0);
  }, [getItems, nameQuery]);

  return (
    <>
      <header>
        <div className="logo_wrapper">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <SearchBar setSearchParams={setSearchParams} searchValue={nameQuery} />
      <Content items={items} />
    </>
  );
}

const mapState = (state) => ({
  items: state.rickandmorty.items
});

const mapDispatch = (dispatch) => ({
  getItems: (text) => dispatch(getRickyMortyData(text))
});

export const MainPage = connect(mapState, mapDispatch)(MainPageView);
