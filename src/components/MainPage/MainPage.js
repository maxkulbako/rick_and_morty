/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './mainpage.scss';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Content } from '../Content/Content';
import { SearchBar } from '../SearchBar/SearchBar';
import { Header } from '../Header/Header';

import { getRickyMortyData } from '../../actions';

export function MainPageView({ items, getItems, activeUser }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const nameQuery = searchParams.get('name') || '';
  console.log(activeUser.id);
  useEffect(() => {
    if (activeUser.id) {
      getItems(nameQuery);
    } else navigate('/login');

    window.scroll(0, 0);
  }, [getItems, nameQuery]);

  return (
    <>
      <Header />
      <SearchBar setSearchParams={setSearchParams} searchValue={nameQuery} />
      <Content items={items} />
    </>
  );
}

const mapState = (state) => ({
  items: state.rickandmorty.items,
  activeUser: state.auth.activeUser
});

const mapDispatch = (dispatch) => ({
  getItems: (text) => dispatch(getRickyMortyData(text))
});

export const MainPage = connect(mapState, mapDispatch)(MainPageView);
