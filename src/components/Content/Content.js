/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRickyMortyData } from '../../actions';
import { ContentItem } from '../ContentItem/ContentItem';
import './content.scss';

function ContentView({ items, getItems }) {
  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div className="content_wrapper">
      {items.map((item) => (
        <Link
          to={`characters/${item.id}`}
          key={item.id}
          style={{ textDecoration: 'none' }}
        >
          <ContentItem item={item} />
        </Link>
      ))}
    </div>
  );
}

const mapState = (state) => ({
  items: state.rickandmorty.items
});

const mapDispatch = (dispatch) => ({
  getItems: () => dispatch(getRickyMortyData())
});

export const Content = connect(mapState, mapDispatch)(ContentView);
