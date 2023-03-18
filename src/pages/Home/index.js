import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import { Content, SearchBar, Header } from "./components";

import { getRickyMortyData } from "../../actions";

export function HomePageView({ items, getItems }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameQuery = searchParams.get("name") || "";

  useEffect(() => {
    getItems(nameQuery);
  }, [nameQuery]);

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
});

const mapDispatch = (dispatch) => ({
  getItems: (text) => dispatch(getRickyMortyData(text)),
});

export const Home = connect(mapState, mapDispatch)(HomePageView);
