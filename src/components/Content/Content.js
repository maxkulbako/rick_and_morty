/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRickyMortyData } from '../../actions';
import { ContentItem } from '../ContentItem/ContentItem';
import './content.scss';

function ContentView({ items, getItems, search }) {
  useEffect(() => {
    getItems(search);
  }, [search]);

  const isFetching = useSelector((state) => state.rickandmorty.isFetching);

  return (
    <div className="content_wrapper">
      {!isFetching ? (
        items.length > 0 ? (
          items.map((item) => (
            <Link
              to={`characters/${item.id}`}
              key={item.id}
              style={{ textDecoration: 'none' }}
            >
              <ContentItem item={item} />
            </Link>
          ))
        ) : (
          <div>No results found. Please try a different search term.</div>
        )
      ) : (
        <div className="fetching" />
      )}
    </div>
  );
}

const mapState = (state) => ({
  items: state.rickandmorty.items
});

const mapDispatch = (dispatch) => ({
  getItems: (text) => dispatch(getRickyMortyData(text))
});

export const Content = connect(mapState, mapDispatch)(ContentView);
